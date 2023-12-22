import { Paginator } from "./typings/paginator";

export class KeyboardPaginatorController {

    private _paginator: Paginator<any>
    private _listener: (event: KeyboardEvent) => void;

    constructor(paginator: Paginator<any>) {
        this._paginator = paginator;
    }

    init() {
        this._listener = this.handleKeyDown.bind(this);

        document.addEventListener('keydown', this._listener);
    }

    destroy() {
        document.removeEventListener('keydown', this._listener);
    }

    private handleKeyDown(event: KeyboardEvent) {
        if (this.isEventFromInput(event)) {
            return;
        }

        switch (event.key) {
            case 'ArrowLeft':
                this._paginator.previous();
                event.stopPropagation();
                break;
            case 'ArrowRight':
                this._paginator.next();
                event.stopPropagation();
                break;
            default:
                break;
        }
    }

    private isEventFromInput(event: KeyboardEvent): boolean {
        const target = event.target as HTMLElement;

        return [
            'INPUT',
            'TEXTAREA',
            'SELECT'
        ].includes(target.tagName);
    }

}

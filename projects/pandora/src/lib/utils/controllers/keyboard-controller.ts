export class KeyboardController {

    private _listener: (event: KeyboardEvent) => void;

    constructor(
        private readonly onNext: () => void,
        private readonly onPrevious: () => void
    ) {}

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
                this.onPrevious();
                event.stopPropagation();
                break;
            case 'ArrowRight':
                this.onNext();
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

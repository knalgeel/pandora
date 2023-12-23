import { Component, Input, OnDestroy } from '@angular/core';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

@Component({
    selector: 'pandora-avatar',
    standalone: true,
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnDestroy {

    @Input()
    src: string;

    @Input()
    size: AvatarSize = 'md';

    ngOnDestroy() {
        this.src = '';
    }

    get sizeClass() {
        return `avatar__image--${ this.size }`
    }


}
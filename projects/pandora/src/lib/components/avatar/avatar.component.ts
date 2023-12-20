import { Component, Input } from '@angular/core';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

@Component({
    selector: 'app-avatar',
    standalone: true,
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

    @Input()
    src: string;

    @Input()
    size: AvatarSize = 'md';

    get sizeClass() {
        return `avatar--${ this.size }`
    }

}
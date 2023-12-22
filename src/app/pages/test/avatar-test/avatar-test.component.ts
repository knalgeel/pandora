import { Component } from '@angular/core';
import { AvatarSize } from "../../../../../projects/pandora/src/lib/components/avatar";

@Component({
  selector: 'app-avatar-test',
  templateUrl: './avatar-test.component.html',
  styleUrl: './avatar-test.component.scss'
})
export class AvatarTestComponent {

    sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'] as AvatarSize[];

}

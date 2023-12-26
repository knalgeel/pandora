import { Component, Input } from '@angular/core';
import { NotificationType } from "./typings/notification-type";
import { NgClass } from "@angular/common";
import { NgIcon } from "@ng-icons/core";

@Component({
    selector: 'pandora-notification',
    standalone: true,
    imports: [
        NgClass,
        NgIcon
    ],
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

    // ----------[ Input ]----------

    @Input({ required: true })
    type: NotificationType

    @Input()
    icon: string

    // ----------[ Getters ]----------

    get typeClass() {
        return `notification--${this.type}`
    }

}

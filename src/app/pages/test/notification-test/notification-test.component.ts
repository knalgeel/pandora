import { Component } from '@angular/core';
import { NotificationService } from "../../../../../projects/pandora/src/lib/services";

@Component({
  selector: 'app-notification-test',
  standalone: true,
  imports: [],
  templateUrl: './notification-test.component.html',
  styleUrl: './notification-test.component.scss'
})
export class NotificationTestComponent {

    constructor(
        private readonly notificationService: NotificationService
    ) {}

    notify() {
        this.notificationService.add({
            type: 'success',
            message: Math.random().toString(36).substring(7)
        })
    }
}

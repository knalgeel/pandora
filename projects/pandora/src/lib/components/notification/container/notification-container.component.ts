import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { INotification } from "../notification/typings/notification";
import { NotificationService } from "../../../services";
import { NotificationComponent } from "../notification/notification.component";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'pandora-notification-container',
    standalone: true,
    imports: [
        CommonModule,
        NotificationComponent,
    ],
    templateUrl: './notification-container.component.html',
    styleUrls: ['./notification-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('slideFadeAnimation', [
            transition(':enter', [
                style({ transform: 'translateY(100%)', opacity: 0 }), // Start from below
                animate('250ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
            ]),
            transition(':leave', [
                style({ transform: 'translateY(0)', opacity: 1 }),
                animate('250ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })) // Exit towards the bottom
            ])
        ])
    ]
})
export class NotificationContainerComponent implements OnInit, OnDestroy {

    private queue: INotification[] = [];
    private timeout?: any;

    notification?: INotification | null = null;

    constructor(private readonly notificationService: NotificationService) {}

    // ----------[ Lifecycle hooks ]----------

    ngOnInit() {
        this.notificationService.added.subscribe(notification => this.handleNotification(notification));
    }

    ngOnDestroy() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    // ----------[ Private methods ]----------

    private addToQueue(value: INotification) {
        this.queue.push(value);
    }

    private handleQueueDelayed(delay: number) {
        setTimeout(() => this.handleQueue(), delay);
    }

    private handleQueue() {
        if (this.queue.length === 0 || this.timeout) return;
        this.notification = this.queue.shift() || null;
        this.timeout = setTimeout(() => {
            this.timeout = undefined;
            this.notification = null;
            if (this.queue.length > 0) {
                this.handleQueueDelayed(250);
            }
        }, NOTIFICATION_DURATION);
    }

    private handleNotification(notification: INotification) {
        this.addToQueue(notification);
        this.handleQueueDelayed(250);
    }
}

export const NOTIFICATION_DURATION = 3000;
import { Component, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";
import { INotification } from "../notification/typings/notification";
import { NotificationService } from "../../../services";
import { NotificationComponent } from "../notification/notification.component";
import { CommonModule } from "@angular/common";
import { Subject, takeUntil } from "rxjs";
import { AutoAnimateDirective } from "../../../directives";

export const NOTIFICATION_DURATION = 3000;

@Component({
    selector: 'pandora-notification-container',
    standalone: true,
    imports: [
        CommonModule,
        NotificationComponent,
        AutoAnimateDirective,
    ],
    templateUrl: './notification-container.component.html',
    styleUrls: ['./notification-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('fadeAnimation', [
            transition(':enter', [
                style({ opacity: 0 }), // Start from below
                animate('250ms ease-out', style({ opacity: 1 }))
            ]),
            transition(':leave', [
                style({ opacity: 1, position: 'absolute', top: 0 }),
                animate('250ms ease-in', style({ opacity: 0 })) // Exit towards the bottom
            ])
        ])
    ]
})
export class NotificationContainerComponent implements OnInit, OnDestroy {

    private readonly destroyed$ = new Subject<void>();

    private readonly added$ = this.notificationService.added.asObservable();

    notifications = signal<INotification[]>([])

    constructor(private readonly notificationService: NotificationService) {}

    // ----------[ Lifecycle hooks ]----------

    ngOnInit() {
        this.added$
            .pipe(takeUntil(this.destroyed$))
            .subscribe(notification => this.handleNotification(notification));
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    // ----------[ Private methods ]----------

    private handleNotification(notification: INotification) {
        this.notifications.update(notifications => [...notifications, notification])

        setTimeout(() => this.removeNotification(notification), NOTIFICATION_DURATION);
    }

    private removeNotification(notification: INotification) {
        this.notifications.update(notifications => notifications.filter(n => n !== notification));
    }
}
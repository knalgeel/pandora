import { Injectable } from '@angular/core';
import { CollectionService } from "./collection.service";
import { INotification } from "../components/notification/notification/typings/notification";

@Injectable({
    providedIn: 'root'
})
export class NotificationService extends CollectionService<INotification> {


}

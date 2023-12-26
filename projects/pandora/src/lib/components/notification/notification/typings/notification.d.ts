import { NotificationType } from "./notification-type";

export interface INotification {
    type: NotificationType;
    message: string;
    icon?: string;
    id?: string;
}

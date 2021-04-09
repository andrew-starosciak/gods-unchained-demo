import { Observer } from "rxjs";

export interface INotification {
    status?: string,
    label: string;
    content: string;
    autoClose?: boolean;
    timer?: number;
}

export interface INotificationContext<O> extends INotification {
    observer: Observer<O>;
}
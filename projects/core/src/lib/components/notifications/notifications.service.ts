import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { INotification, INotificationContext } from "./notification.model";

@Injectable({ providedIn: 'root' })
export class GuNotificationService {
    public readonly items$ = new BehaviorSubject<INotificationContext<any>[]>([]);

    public showNotification<O = void>(options: INotification) {
        return this.createNotification<O>(options);
    }

    private createNotification<O>(options: INotification): Observable<O> {
        return new Observable((observer: Observer<O>) => {
            const notification = {
                observer,
                status: options.status || '',
                label: options.label || '',
                content: options.content || '',
                autoClose: options.autoClose || true,
                timer: options.timer || 4000,
            } as INotificationContext<O>;

            this.items$.next([...this.items$.value, notification]);

            return () => {
                this.items$.next(
                    this.items$.value.filter(item => item !== notification)
                )
            }
        })
    }
}
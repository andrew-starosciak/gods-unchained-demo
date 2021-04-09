import { ChangeDetectionStrategy, Component, Input, OnDestroy, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject, interval, Subject, timer } from "rxjs";
import { takeUntil, tap } from 'rxjs/operators';
import { GU_NOTIFICATION_DURATION, GU_NOTIFICATION_INTERVAL_DURATION } from "../../../constants/index";

@Component({
    selector: 'gu-notification-message',
    templateUrl: './notification-message.component.html',
    styleUrls: ['./notification-message.styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'gu-notification-message'
    }
})
export class GuNotificationMessageComponent implements OnDestroy {
    @Input() message?: any;

    public get safeMessage(): any {
        if (!this.message) {
            throw new Error('Notification message is undefined');
        }
        return this.message;
    }

    public progressDuration$ = new BehaviorSubject(100);

    private _destroy$ = new Subject<void>();
    private _stopCounting$ = new Subject<void>();

    public ngAfterViewInit(): void {
        if (this.safeMessage.autoClose) {
            this.progress();
        }

        // Auto Close with timer.
        timer(GU_NOTIFICATION_DURATION).pipe(
            takeUntil(this._destroy$),
            tap(_ => {
                if (this.safeMessage.autoClose) {
                    this.closeDialog();
                }
            })
        ).subscribe();
    }

    public ngOnDestroy(): void {
        this._destroy$.next();
    }

    public closeDialog() {
        this.safeMessage.observer.complete();
    }

    public progress() {
        let progressDuration = 100;
        interval(GU_NOTIFICATION_INTERVAL_DURATION).pipe(
            takeUntil(this._stopCounting$),
            tap(_ => {
                progressDuration = progressDuration - 1;
                if (progressDuration === 0) {
                    this._stopCounting$.next();
                }
                this.progressDuration$.next(progressDuration);
            })
        ).subscribe();
    }
}
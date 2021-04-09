import { ChangeDetectionStrategy, Component, Inject, Optional, Type, ViewEncapsulation } from "@angular/core";
import { GuNotificationHostComponent } from "../notifications/notification-host.component";

@Component({
    selector: 'gu-root',
    template: `
        <gu-portal-host>
            <ng-content></ng-content>

            <!-- Portal Host for Notifications -->
            <ng-container *ngIf="notificationHost" [ngComponentOutlet]="notificationHost"></ng-container>
        </gu-portal-host>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'gu-root',
    }
})
export class GuRootComponent {

    constructor(
        @Optional() @Inject(GuNotificationHostComponent) readonly notificationHost: Type<GuNotificationHostComponent>,
    ) {
        // Empty
    }
}
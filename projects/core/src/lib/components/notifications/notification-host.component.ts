import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from "@angular/core";
import { guSlideInLeftList } from "../../animations";
import { GuNotificationService } from "./notifications.service";

@Component({
    selector: 'gu-notification-host',
    templateUrl: './notification-host.component.html',
    styleUrls: ['./notifications.styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'gu-notification-host'
    },
    animations: [guSlideInLeftList],
})
export class GuNotificationHostComponent {
    constructor(
        @Inject(GuNotificationService) public readonly notificationService: GuNotificationService,
    ) {
        // Empty
    }
}
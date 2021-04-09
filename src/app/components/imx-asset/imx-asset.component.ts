import { ChangeDetectionStrategy, Component, Inject } from "@angular/core";
import { GuNotificationService } from "@gu/core";

@Component({
    selector: 'app-imx-asset',
    templateUrl: './imx-asset.component.html',
    styleUrls: ['./imx-asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImxAssetComponent {

    constructor(
        @Inject(GuNotificationService) private readonly notificationService: GuNotificationService
    ) {
        // Empty
    }

    public purchase(): void {
        this.notificationService.showNotification({ label: 'Success', content: 'Your purchase has been approved.' }).subscribe();
    }
}
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GuNotificationHostComponent } from "./notification-host.component";
import { GuNotificationMessageComponent } from "./notification-message/notification-message.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        GuNotificationHostComponent,
        GuNotificationMessageComponent,
    ],
    providers: [
        {
            provide: GuNotificationHostComponent,
            useValue: GuNotificationHostComponent,
        }
    ]
})
export class GuNotificationsModule {}
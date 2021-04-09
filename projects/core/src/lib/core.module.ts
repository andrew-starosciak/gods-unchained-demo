import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Typically create modules for each of the components/portals etc. But due to nature of the code challenge
// I have chosen to import it all in the core module. I would refactor the lib parts into their own modules
// for production ready purposes and share-ability/tree-shakable.
import { GuNotificationsModule, GuRootComponent } from './components/index';
import { GuNotificationService } from './components/notifications/index';
import { GuPortalHostComponent } from './portals/index';

const parts = [
  GuPortalHostComponent,
  GuRootComponent,
]

const services = [
  GuNotificationService
]

@NgModule({
  declarations: [...parts],
  imports: [CommonModule, GuNotificationsModule],
  providers: [...services],
  exports: [...parts]
})
export class CoreModule { }

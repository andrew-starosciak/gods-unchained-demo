import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// I included @gu namespace for the purpose of ejecting the project libs into their own repo or monorepo
// but not breaking implementations in the app.
import { CoreModule } from '@gu/core';

import { AppComponent } from './app.component';

import { ComponentsModule } from './components/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

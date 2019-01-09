import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from "./angular-material.module";

import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotificationService } from "./services/notification.service";

import { TwoDigitsPipe } from "./pipes/two-digits.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    DashboardComponent,
    TwoDigitsPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  showFiller = false;
  
}

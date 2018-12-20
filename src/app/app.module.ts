import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode, LOCALE_ID, Component } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CacheModule } from "ionic-cache";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import localePtBr from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { EventpgPage } from '../pages/eventpg/eventpg';

registerLocaleData(localePtBr);


Component({})


enableProdMode()
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventpgPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    HttpClientModule,
    CacheModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventpgPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class AppModule {}
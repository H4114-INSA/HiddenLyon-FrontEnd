import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {ProfilPage} from "../pages/profil/profil";
import { RegisterPage} from "../pages/register/register";
import  { ValiderPointPage} from "../pages/validerPoint/validerPoint";
import { ReportPage} from "../pages/report/report";
import { ParcoursPage} from "../pages/parcours/parcours";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {AppRoutingModule} from "./app.routingModule";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {UserService} from "../service/UserService";
import{POIService} from "../service/POIService";
import {Globals} from "../globalVariable/globals";
import {AuthGuardService} from "../service/AuthGardService";



@NgModule({

  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilPage,
    RegisterPage,
    ValiderPointPage,
    ReportPage,
    ParcoursPage
  ],
  imports: [
   AppRoutingModule,
    BrowserModule,
   HttpModule ,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
  ],
  providers: [
    UserService,
    POIService,
    AuthGuardService,
    Globals,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

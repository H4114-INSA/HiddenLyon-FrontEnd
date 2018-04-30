import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import {LoginPage} from "../pages/login/login";
import {ProfilPage} from "../pages/profil/profil";
import { RegisterPage} from "../pages/register/register";
import  { ValiderPointPage} from "../pages/validerPoint/validerPoint";
import { ReportPage} from "../pages/report/report";
import { ParcoursPage} from "../pages/parcours/parcours";
import {AddPointPage} from "../pages/addPoint/addPoint";
import {AddPointInfosPage} from "../pages/addPointInfos/addPointInfos";
import { ParametresPage} from "../pages/parametres/parametres";
import {ConditionsPage} from "../pages/conditions/conditions";


import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {AppRoutingModule} from "./app.routingModule";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {AddPointPage} from "../pages/addPoint/addPoint";

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
    AddPointPage,
    AddPointInfosPage,
    MapPage,
    RegisterPage,
    ValiderPointPage,
    ReportPage,
    ParcoursPage,
    ParametresPage,
    ConditionsPage
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
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

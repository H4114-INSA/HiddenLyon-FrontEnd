import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {ProfilPage} from "../pages/profil/profil";
import { RegisterPage} from "../pages/register/register";
import  { ValiderPointPage} from "../pages/validerPoint/validerPoint";
import {Globals} from "../globalVariable/globals";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import  {AppRoutingModule} from "./app.routingModule";
import {UserService} from "../service/UserService"
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({

  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilPage,
    RegisterPage,
    ValiderPointPage
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
    Globals,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

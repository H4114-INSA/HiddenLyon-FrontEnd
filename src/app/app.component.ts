import { Component } from '@angular/core';
import {  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import {ProfilPage} from "../pages/profil/profil";
import {ValiderPointPage} from "../pages/validerPoint/validerPoint";
import{ReportPage} from "../pages/report/report";
import { ParcoursPage} from "../pages/parcours/parcours";
import  {ParametresPage} from "../pages/parametres/parametres";
import {Globals} from "../globalVariable/globals";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  global:Globals;
  rootPage: any = LoginPage;
  pages: Array<{title: string,route:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,g:Globals) {
    this.global=g;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: this.global.langue.map,route:'/page-map', component: MapPage },
      { title: this.global.langue.profil,route:'/page-profil', component: ProfilPage },
      { title: this.global.langue.validerPoint,route:'/page-validerPoint', component: ValiderPointPage },
      { title: this.global.langue.report,route:'/page-report', component: ReportPage },
      { title: this.global.langue.parcours,route:'/page-parcours', component: ParcoursPage },
      { title: this.global.langue.parametres,route:'/page-parametres', component: ParametresPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}

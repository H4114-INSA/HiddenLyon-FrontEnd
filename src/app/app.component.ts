import { Component } from '@angular/core';
import {  Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {DetailPage} from "../pages/details/details";
import {ParametresPage} from "../pages/parametres/parametres";
import {MapPage} from "../pages/map/map";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = MapPage;
  pages: Array<{title: string,route:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [

      { title: "details",route:'/page-details', component: DetailPage },
      { title: "parametres",route:'/page-parametres', component: ParametresPage },
      { title: "map",route:'/page-map', component: MapPage }

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

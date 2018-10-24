import { Component } from '@angular/core';
import {Geolocation} from "@ionic-native/geolocation";
import { NavController } from 'ionic-angular';
import { DetailPage} from "../details/details";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(  public navCtrl: NavController) {

  }

  details(){
    this.navCtrl.push(DetailPage);
  }

}

















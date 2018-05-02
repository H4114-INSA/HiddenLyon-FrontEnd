import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Globals} from "../../globalVariable/globals";
import {Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-addPoint',
  templateUrl: 'addPoint.html'
})
export class AddPointPage {
  global:Globals;
  constructor(g:Globals,public geolocation: Geolocation) {
  this.global=g;
  }
sendData(){
  this.global.photoTaken = (<HTMLParagraphElement>document.getElementById("url")).innerHTML;
  this.geolocation.getCurrentPosition().then((position) => {
    this.global.photoTakenLat=position.coords.latitude;
    this.global.photoTakenLon=position.coords.longitude;
    })
  }

  getImage(event){

    var reader = new FileReader();
    reader.onloadend = function(e : any) {
      (<HTMLImageElement>document.getElementById("avatar")).src = e.target.result;
      (<HTMLParagraphElement>document.getElementById("url")).innerHTML = e.target.result;
    };
    reader.readAsDataURL((<HTMLInputElement>document.getElementById("img")).files[0]);
  }

}

import { Component,ViewChild,ElementRef } from '@angular/core';
import {AppService} from "../../app/appService";

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  appService:AppService;
  pointVector: number[];
  constructor() {}
  ionViewDidLoad(){

  }
  getPOI(){
    this.appService.getPOI()
      .subscribe(data => this.pointVector);
  }


  }




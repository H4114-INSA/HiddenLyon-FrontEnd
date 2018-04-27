import { Component,ViewChild,ElementRef } from '@angular/core';
import {POIService} from "../../service/POIService";

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  poiService:POIService;
  pointVector: number[];
  constructor(serv:POIService) {
    this.poiService=serv;
  }

  getPOI(){
    this.poiService.getPOI()
      .subscribe(data => this.pointVector);
  }


  }




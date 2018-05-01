import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {POIService} from "../../service/POIService";
import {Globals} from '../../globalVariable/globals';

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
  global : Globals;

  constructor(serv:POIService, g : Globals) {
    this.poiService=serv;
    this.global = g;
  }

  getPOI(){
    //console.log(this.global.userExtended.token);
    this.poiService.getPOI().subscribe(data => this.pointVector);
  }

  }




import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-addPointInfos',
  templateUrl: 'addPointInfos.html'
})
export class AddPointInfosPage {
  titre:string;
  cat:[string];
  descr:string;
  tempo:boolean;
  date:Date;
  constructor() {
  this.tempo=false;
  }

  addPoint(){


  }
}

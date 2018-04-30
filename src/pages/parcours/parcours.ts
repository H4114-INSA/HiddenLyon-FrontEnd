import { Component } from '@angular/core';
import {Globals} from "../../globalVariable/globals";


@Component({
  selector: 'page-parcours',
  templateUrl: 'parcours.html',
})
export class ParcoursPage {
  cat:Array<string>=["1","2","3"];
  trans:Array<string>=["1","2","3","4"];
  globals:Globals;
  backPoint:boolean;
  distMin:number;
  distMax:number;
  tempsMin:number;
  tempsMax:number;
  constructor(g:Globals) {
  this.globals=g;
  }

}


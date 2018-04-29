import { Component } from '@angular/core';


@Component({
  selector: 'page-parcours',
  templateUrl: 'parcours.html',
})
export class ParcoursPage {
  cat:Array<string>=["1","2","3"];
  trans:Array<string>=["1","2","3","4"];
  backPoint:boolean;
  distMin:number;
  distMax:number;
  tempsMin:number;
  tempsMax:number;
  constructor() {

  }

}


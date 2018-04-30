import { Component } from '@angular/core';
import {Globals} from "../../globalVariable/globals";
import {Langue} from "../../model/Langue.model";

@Component({
  selector: 'page-parametres',
  templateUrl: 'parametres.html',
})
export class ParametresPage {
  langue:string;
  globals: Globals;
  constructor(g:Globals) {
    this.globals=g;
    this.langue=this.globals.langueParam;
  }
  Apply(){
    this.globals.langueParam=this.langue;
    this.globals.langue=new Langue(this.langue);
  }
}


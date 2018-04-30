import { Component } from '@angular/core';
import {Globals} from "../../globalVariable/globals";
import { Report} from "../../model/Report.model";
import{POIService} from "../../service/POIService";

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  typeProb:string;
  titre:string;
  description:string;
  poiService:POIService;
  constructor(serv:POIService) {
  this.poiService=serv;
  }

  report(){
    //todo : A refaire entièrement
   /* let rep=new Report(this.titre,this.description,this.typeProb);
    var url="";
    this.poiService.report(url,rep);*/
  }
}


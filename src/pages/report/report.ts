import { Component } from '@angular/core';
import {Globals} from "../../globalVariable/globals";
import { Report} from "../../model/Report.model";
import { User} from "../../model/user.model";
import{POIService} from "../../service/POIService";
import {PointOfInterest} from "../../model/PointOfInterest.model";

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  typeProb:Cause;
  titre:string;
  global:Globals;
  description:string;
  poiService:POIService;
  poi:PointOfInterest;
  constructor(serv:POIService,g:Globals) {
    this.global=g;
  this.poiService=serv;

  }

  reportService(){
    let user=new User(this.global.userExtended.firstName,this.global.userExtended.lastName,this.global.userExtended.email,this.global.userExtended.hashPassword,this.global.userExtended.biography,this.global.userExtended.profilePicture);
    //get POI
    let report=new Report(user,this.poi,this.typeProb);//todo get POI
    var url:string="";//todo
  this.poiService.reportBack(url,report);
  }
}


import {Component} from "@angular/core";
import {POIService} from "../../service/POIService";
import {Globals} from "../../globalVariable/globals";

@Component({
  selector: 'PageStat',
  templateUrl: 'PageStat.html',
})

export class PageStat {
  pointsSoumis:number;
  pointsAcceptes:number;
  poiService:POIService;
  global:Globals;
  constructor(serv:POIService,g:Globals){
  this.poiService=serv;
  this.global=g;
  this.getUserNumberSubPoints();
  this.getUserNumberValPoints();
  }
  getUserNumberSubPoints(){
    var url:string="http://localhost:8080/poi/getNumberUserPoi?mailUser="+this.global.userExtended.email;
    this.poiService.getNumberSubPoint(url,this.global.userExtended.token).then(data => {
      this.pointsSoumis = data;
    }).catch(err =>{
    });
  }

  getUserNumberValPoints(){
    var url:string="http://localhost:8080/poi/getNumberValidatedUserPoi?mailUser="+this.global.userExtended.email;
    this.poiService.getNumberValPoint(url,this.global.userExtended.token).then(data => {
      this.pointsAcceptes = data;
    }).catch(err =>{
    });
  }
}

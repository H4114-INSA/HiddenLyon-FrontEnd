import {POI} from "../model/POI.model";
import {Injectable} from "@angular/core";
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'

@Injectable()
export class POIService {

  constructor(protected http:HttpClient) {
  }
  getPOI() {
    return this.http.get('/poi/all');
  }
  getNextPointToValidate(){
    //todo
    // todo return this.http.get("todo");
  }
  voteOui(){
    //todo
  }
  voteNon(){
    //todo
  }

}

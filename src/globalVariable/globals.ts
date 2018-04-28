import {Injectable} from "@angular/core";
import {UserExtended} from "../model/userExtended.model";

@Injectable()
export class Globals{
  userExtended: UserExtended;
  constructor(){
    this.userExtended=new UserExtended("a","a","a","a","a","../../assets/imgs/bb.jpg","tok");
  }

}

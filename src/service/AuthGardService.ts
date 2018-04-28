import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import{Globals} from "../globalVariable/globals";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public globals:Globals) {}

  canActivate(): boolean {
    if (!this.globals.userExtended.firstName) {
      console.log("nop");
      return false;
    }
    console.log("success");
    return true;
  }

}

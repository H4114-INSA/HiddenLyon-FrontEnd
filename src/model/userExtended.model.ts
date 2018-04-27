import {User} from "./user.model";

export class UserExtended extends User {
  token: string;

  constructor(fnam:string,lnam:string,mai:string,passwor:string,bi:string, tok: string){
    super(fnam,lnam,mai,passwor,bi);
    this.token = tok;
  }
}

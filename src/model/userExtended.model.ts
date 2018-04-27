import {User} from "./user.model";

export class UserExtended extends User {
  token: string;

  constructor(fnam:string,lnam:string,mai:string,passwor:string,bi:string,path:string, tok: string){
    super(fnam,lnam,mai,passwor,bi,path);
    this.token = tok;
  }
}

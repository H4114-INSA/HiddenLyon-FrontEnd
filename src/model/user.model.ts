export class User {
  fname: string;
  lname: string;
  mail:string;
  password:string;
  bio:string;
  public User(fnam:string,lnam:string,mai:string,passwor:string,bi:string){
    this.fname=fnam;
    this.lname=lnam;
    this.mail=mai;
    this.password=passwor;
    this.bio=bi;
  }
}

export class POI {
  IdPOI: number;
  title: string;
  description:string;
  pathToPicture: string;
  cat1:boolean;
  cat2:boolean;
  cat3:boolean;
  cat4:boolean;
  cat5:boolean;
  cat6:boolean;

  constructor(tit:string,descr:string,path:string,c1:boolean,c2:boolean,c3:boolean,c4:boolean,c5:boolean,c6:boolean){
    this.title=tit;
    this.description=descr;
    this.pathToPicture=path;
    this.cat1=c1;
    this.cat2=c2;
    this.cat3=c3;
    this.cat4=c4;
    this.cat5=c5;
    this.cat6=c6;

  }
}

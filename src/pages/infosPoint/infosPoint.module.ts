import {InfosPointPage} from "./infosPoint";
import {  NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';

@NgModule({
  declarations: [
    InfosPointPage
  ],
  imports: [
    IonicPageModule.forChild(InfosPointPage)
  ],
  entryComponents: [
    InfosPointPage
  ]
})

export class InfosPointModule {}

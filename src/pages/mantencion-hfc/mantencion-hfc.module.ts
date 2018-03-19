import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MantencionHfcPage } from './mantencion-hfc';

@NgModule({
  declarations: [
    MantencionHfcPage,
  ],
  imports: [
    IonicPageModule.forChild(MantencionHfcPage),
  ],
})
export class MantencionHfcPageModule {}

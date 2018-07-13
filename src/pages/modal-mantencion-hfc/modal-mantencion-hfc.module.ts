import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMantencionHfcPage } from './modal-mantencion-hfc';

@NgModule({
  declarations: [
    ModalMantencionHfcPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMantencionHfcPage),
  ],
})
export class ModalMantencionHfcPageModule {}

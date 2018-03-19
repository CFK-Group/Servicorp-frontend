import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MantencionPage } from './mantencion';

@NgModule({
  declarations: [
    MantencionPage,
  ],
  imports: [
    IonicPageModule.forChild(MantencionPage),
  ],
})
export class MantencionPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MantencionDthPage } from "../mantencion-dth/mantencion-dth";
import { MantencionHfcPage } from "../mantencion-hfc/mantencion-hfc";
import {InstalacionesDthPage} from "../instalaciones-dth/instalaciones-dth";
import {InstalacionesHfcPage} from "../instalaciones-hfc/instalaciones-hfc";

/**
 * Generated class for the MantencionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantencion',
  templateUrl: 'mantencion.html',
})
export class MantencionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantencionPage');
  }

  goToDth(){
    this.navCtrl.push(MantencionDthPage);
  }

  goToHfc(){
    this.navCtrl.push(MantencionHfcPage);
  }

}

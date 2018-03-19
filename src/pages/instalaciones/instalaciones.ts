import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstalacionesDthPage } from "../instalaciones-dth/instalaciones-dth";
import { InstalacionesHfcPage } from "../instalaciones-hfc/instalaciones-hfc";

/**
 * Generated class for the InstalacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instalaciones',
  templateUrl: 'instalaciones.html',
})
export class InstalacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesPage');
  }

  goToDth(){
    this.navCtrl.push(InstalacionesDthPage);
  }

  goToHfc(){
    this.navCtrl.push(InstalacionesHfcPage);
  }

}

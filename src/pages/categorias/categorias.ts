import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InstalacionesDthPage } from "../instalaciones-dth/instalaciones-dth";
import { InstalacionesHfcPage } from "../instalaciones-hfc/instalaciones-hfc";
import { MantencionHfcPage } from "../mantencion-hfc/mantencion-hfc";
import { MantencionDthPage } from "../mantencion-dth/mantencion-dth";
import { DesconexionPage } from "../desconexion/desconexion";

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  goToInstalacionesHfc(){
    this.navCtrl.push(InstalacionesHfcPage);
  }

  goToInstalacionesDth(){
    this.navCtrl.push(InstalacionesDthPage);
  }

  goToMantencionHfc(){
    this.navCtrl.push(MantencionHfcPage);
  }

  goToMantencionDth(){
    this.navCtrl.push(MantencionDthPage);
  }

  goToDesconexion(){
    this.navCtrl.push(DesconexionPage);
  }

}

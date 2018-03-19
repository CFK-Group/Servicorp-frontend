import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { ModalController } from "ionic-angular";
import { ModalInstalacionesHfcPage } from "../modal-instalaciones-hfc/modal-instalaciones-hfc";

/**
 * Generated class for the InstalacionesHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instalaciones-hfc',
  templateUrl: 'instalaciones-hfc.html',
})
export class InstalacionesHfcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesHfcPage');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesHfcPage);
    modal.present();
  }


}

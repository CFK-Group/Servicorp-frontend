import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ModalMantencionHfcPage } from "../modal-mantencion-hfc/modal-mantencion-hfc";

/**
 * Generated class for the MantencionHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantencion-hfc',
  templateUrl: 'mantencion-hfc.html',
})
export class MantencionHfcPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantencionHfcPage');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalMantencionHfcPage);
    modal.present();
  }

}

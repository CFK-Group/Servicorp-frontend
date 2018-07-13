import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { ModalDesconexionPage } from "../modal-desconexion/modal-desconexion";

/**
 * Generated class for the DesconexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desconexion',
  templateUrl: 'desconexion.html',
})
export class DesconexionPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesconexionPage');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalDesconexionPage);
    modal.present();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from "ionic-angular";
import {ModalInstalacionesDthPage} from "../modal-instalaciones-dth/modal-instalaciones-dth";

/**
 * Generated class for the InstalacionesDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instalaciones-dth',
  templateUrl: 'instalaciones-dth.html',
})
export class InstalacionesDthPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesDthPage');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesDthPage);
    modal.present();
  }

}

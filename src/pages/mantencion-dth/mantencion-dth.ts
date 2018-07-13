import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ModalMantencionDthPage } from "../modal-mantencion-dth/modal-mantencion-dth";

/**
 * Generated class for the MantencionDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantencion-dth',
  templateUrl: 'mantencion-dth.html',
})
export class MantencionDthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantencionDthPage');
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalMantencionDthPage);
    modal.present();
  }

}

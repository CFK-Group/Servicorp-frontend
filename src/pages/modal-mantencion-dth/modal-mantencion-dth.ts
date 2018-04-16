import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalMantencionDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-mantencion-dth',
  templateUrl: 'modal-mantencion-dth.html',
})
export class ModalMantencionDthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMantencionDthPage');
  }

  closeModal() {
    this.view.dismiss();
  }

}

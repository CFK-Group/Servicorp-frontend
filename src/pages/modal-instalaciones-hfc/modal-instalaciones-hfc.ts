import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalInstalacionesHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-instalaciones-hfc',
  templateUrl: 'modal-instalaciones-hfc.html',
})
export class ModalInstalacionesHfcPage {

  constructor(private navParams: NavParams, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInstalacionesHfcPage');
  }

  closeModal() {
    this.view.dismiss();
  }

}

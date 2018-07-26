import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { ModalController } from "ionic-angular"
import { ModalInstalacionesDthPage } from "../modal-instalaciones-dth/modal-instalaciones-dth"
import { ApiServiceProvider } from "../../providers/api-service/api-service"

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

  formularios = []

  data = {
    tipoFormulario: 'instalacion',
    subtipoFormulario: 'dth',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesDthPage')
    this.api.getFormulario(this.data)
      .then((res:any) => {
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesDthPage)
    modal.present()
  }

}

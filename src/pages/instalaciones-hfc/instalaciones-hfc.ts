import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { ModalController } from "ionic-angular"
import { ModalInstalacionesHfcPage } from "../modal-instalaciones-hfc/modal-instalaciones-hfc"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"

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

  formularios = []

  data = {
    tipoFormulario: 'instalacion',
    subtipoFormulario: 'hfc',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private api: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesHfcPage')
    this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesHFC', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesHFC'))
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesHfcPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesHFC', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesHFC'))
      })
    })
  }

  detail(formData){
    let modal = this.modalCtrl.create(FormDetailPage, {formData: formData})
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesHFC', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesHFC'))
      })
    })
  }

}

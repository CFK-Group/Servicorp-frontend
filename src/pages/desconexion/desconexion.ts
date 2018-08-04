import { Component } from '@angular/core'
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular'
import { ModalDesconexionPage } from "../modal-desconexion/modal-desconexion"
import { FormDetailPage } from "../form-detail/form-detail"
import { ApiServiceProvider } from "../../providers/api-service/api-service"

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

  formularios = []

  data = {
    tipoFormulario: 'desconexion',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesconexionPage')
    this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosDesconexiones', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosDesconexiones'))
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalDesconexionPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosDesconexiones', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosDesconexiones'))
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
        localStorage.setItem('FormulariosDesconexiones', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosDesconexiones'))
      })
    })
  }

}

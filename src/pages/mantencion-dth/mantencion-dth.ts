import { Component } from '@angular/core'
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular'
import { ModalMantencionDthPage } from "../modal-mantencion-dth/modal-mantencion-dth"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"

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

  formularios = []

  data = {
    tipoFormulario: 'mantencion',
    subtipoFormulario: 'dth',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private api: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantencionDthPage')
    this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosMantencionesDTH', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesDTH'))
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalMantencionDthPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosMantencionesDTH', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesDTH'))
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
        localStorage.setItem('FormulariosMantencionesDTH', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesDTH'))
      })
    })
  }

}

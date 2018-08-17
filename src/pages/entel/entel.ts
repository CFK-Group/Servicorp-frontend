import { Component } from '@angular/core'
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular'
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"
import { ModalEntelPage } from "../modal-entel/modal-entel"
import { LoginPage } from "../../pages/login/login"

/**
 * Generated class for the MantencionDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entel',
  templateUrl: 'entel.html',
})
export class EntelPage {

  formularios = []

  data = {
    tipoFormulario: 'entel',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private api: ApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntelPage')
    this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosEntel'))
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalEntelPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data)
      .then((res:any) => {
        localStorage.setItem('FormulariosEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosEntel'))
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
        localStorage.setItem('FormulariosEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosEntel'))
      })
    })
  }

  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('empresa')
    this.navCtrl.setRoot(LoginPage)
    this.navCtrl.popToRoot()
  }

}

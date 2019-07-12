import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ModalDuoEntelPage } from "../modal-duo-entel/modal-duo-entel"
import { FormDetailPage } from "../form-detail/form-detail"
import { ApiServiceProvider } from "../../providers/api-service/api-service"

/**
 * Generated class for the DuoEntelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duo-entel',
  templateUrl: 'duo-entel.html',
})
export class DuoEntelPage {

  formularios = []

  data = {
    tipoFormulario: 'duo',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuoEntelPage');
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormularios(this.data, 'entel')
      .then((res: any) => {
        localStorage.setItem('FormulariosDuoEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
        loading.dismiss()
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosDuoEntel'))
        loading.dismiss()
      })
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalDuoEntelPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      let loading = this.loadingCtrl.create({
        content: 'Cargando Formularios'
      })
      loading.present()
      this.api.getFormularios(this.data, 'entel')
        .then((res: any) => {
          localStorage.setItem('FormulariosDuoEntel', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
          loading.dismiss()
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosDuoEntel'))
          loading.dismiss()
        })
    })
  }

  detail(formData) {
    let modal = this.modalCtrl.create(FormDetailPage, { formData: formData })
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data, 'entel')
        .then((res: any) => {
          localStorage.setItem('FormulariosDuoEntel', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosDuoEntel'))
        })
    })
  }

}

import { Component } from '@angular/core'
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular'
import { ModalMantencionHfcPage } from "../modal-mantencion-hfc/modal-mantencion-hfc"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"

/**
 * Generated class for the MantencionHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantencion-hfc',
  templateUrl: 'mantencion-hfc.html',
})
export class MantencionHfcPage {

  formularios = []

  data = {
    tipoFormulario: 'mantencion',
    subtipoFormulario: 'hfc',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private api: ApiServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantencionHfcPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormularios(this.data, 'claro')
      .then((res:any) => {
        localStorage.setItem('FormulariosMantencionesHFC', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
        loading.dismiss()
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesHFC'))
        loading.dismiss()
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalMantencionHfcPage)
    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    })
    loading.present().then(() => {
      modal.present().then(() => {
        loading.dismiss()
      })
    })
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      let loading = this.loadingCtrl.create({
        content: 'Cargando Formularios'
      })
      loading.present()
      this.api.getFormularios(this.data, 'claro')
        .then((res:any) => {
          localStorage.setItem('FormulariosMantencionesHFC', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
          loading.dismiss()
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesHFC'))
          loading.dismiss()
        })
    })
  }

  detail(formData){
    let modal = this.modalCtrl.create(FormDetailPage, {formData: formData})
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data, 'claro')
      .then((res:any) => {
        localStorage.setItem('FormulariosMantencionesHFC', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosMantencionesHFC'))
      })
    })
  }

}

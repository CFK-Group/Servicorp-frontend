import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { ModalController } from "ionic-angular"
import { ModalInstalacionesDthPage } from "../modal-instalaciones-dth/modal-instalaciones-dth"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstalacionesDthPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormularios(this.data, 'claro')
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesDTH', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
        loading.dismiss()
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTH'))
        loading.dismiss()
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesDthPage)
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
          localStorage.setItem('FormulariosInstalacionesDTH', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
          loading.dismiss()
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTH'))
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
        localStorage.setItem('FormulariosInstalacionesDTH', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTH'))
      })
    })
  }

}

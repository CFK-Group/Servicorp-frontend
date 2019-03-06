import { Component } from '@angular/core'
import { IonicPage, ModalController, NavController, NavParams, LoadingController } from 'ionic-angular'
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { FormDetailPage } from "../form-detail/form-detail"
import { ModalInstalacionesDthEntelPage } from "../modal-instalaciones-dth-entel/modal-instalaciones-dth-entel"
import { LoginPage } from "../../pages/login/login"

/**
 * Generated class for the MantencionDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instalaciones-dth-entel',
  templateUrl: 'instalaciones-dth-entel.html',
})
export class InstalacionesDthEntelPage {

  formularios = []

  data = {
    tipoFormulario: 'instalacion',
    subtipoFormulario: 'dth',
    userToken: localStorage.getItem('userToken')
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private api: ApiServiceProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntelPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormularios(this.data, 'entel')
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesDTHEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
        loading.dismiss()
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTHEntel'))
        loading.dismiss()
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalInstalacionesDthEntelPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      let loading = this.loadingCtrl.create({
        content: 'Cargando Formularios'
      })
      loading.present()
      this.api.getFormularios(this.data, 'entel')
        .then((res:any) => {
          localStorage.setItem('FormulariosInstalacionesDTHEntel', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
          loading.dismiss()
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTHEntel'))
          loading.dismiss()
        })
    })
  }

  detail(formData){
    let modal = this.modalCtrl.create(FormDetailPage, {formData: formData})
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      this.api.getFormularios(this.data, 'entel')
      .then((res:any) => {
        localStorage.setItem('FormulariosInstalacionesDTHEntel', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosInstalacionesDTHEntel'))
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

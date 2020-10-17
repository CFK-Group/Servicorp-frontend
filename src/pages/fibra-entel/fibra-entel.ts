import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { FormDetailPage } from '../form-detail/form-detail';
import { ModalFibraEntelPage } from '../modal-fibra-entel/modal-fibra-entel';

/**
 * Generated class for the FibraEntelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fibra-entel',
  templateUrl: 'fibra-entel.html',
})
export class FibraEntelPage {

  formularios = []

  data = {
    tipoFormulario: 'fibra',
    userToken: localStorage.getItem('userToken')
  }

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: ApiServiceProvider,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormulariosFibraEntelPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormularios(this.data,'entel')
      .then((res:any) => {
        localStorage.setItem('FormulariosFibra', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
        loading.dismiss()
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosFibra'))
        loading.dismiss()
      })
  }

  openModal(){
    let modal = this.modalCtrl.create(ModalFibraEntelPage)
    modal.present()
    modal.onDidDismiss(data => {
      console.log('modal cerrado')
      let loading = this.loadingCtrl.create({
        content: 'Cargando Formularios'
      })
      loading.present()
      this.api.getFormularios(this.data,'entel')
        .then((res:any) => {
          localStorage.setItem('FormulariosFibra', JSON.stringify(res.data))
          this.formularios = res.data
          console.table(this.formularios)
          loading.dismiss()
        })
        .catch((err) => {
          console.error('Error: ' + err.message)
          this.formularios = JSON.parse(localStorage.getItem('FormulariosFibra'))
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
        localStorage.setItem('FormulariosFibra', JSON.stringify(res.data))
        this.formularios = res.data
        console.table(this.formularios)
      })
      .catch((err) => {
        console.error('Error: ' + err.message)
        this.formularios = JSON.parse(localStorage.getItem('FormulariosFibra'))
      })
    })
  }

}

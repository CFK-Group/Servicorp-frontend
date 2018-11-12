import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular'
import { ApiServiceProvider } from '../../providers/api-service/api-service'

/**
 * Generated class for the FormDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-detail',
  templateUrl: 'form-detail.html',
})
export class FormDetailPage {

  formulario = []
  imagenes = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private view: ViewController, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDetailPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormQuestions(this.navParams.get('formData').id)
    .then((res:any) => {
      this.formulario = res.data
      console.log(this.formulario)
    })
    .catch((err) => {
      console.error('Error al traer preguntas: ' + err.message)
      loading.dismiss()
    })
    this.api.getFormImgs(this.navParams.get('formData').id)
    .then((res:any) => {
      this.imagenes = res.data
      loading.dismiss()
    })
    .catch((err) => {
      console.error('Error al traer imágenes: ' + err.message)
      loading.dismiss()
    })
  }

  closeModal() {
    this.view.dismiss()
  }

}

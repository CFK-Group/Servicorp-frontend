import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular'
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

  respuestas = []
  preguntas = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private view: ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDetailPage')
    this.api.getFormResponses(this.navParams.get('formData').id)
      .then((res:any) => {
        this.respuestas = res.data
      })
      .catch((err) => {
        console.error('Error al traer respuestas: ' + err.message)
      })
    this.api.getFormQuestions(this.navParams.get('formData').id)
      .then((res:any) => {
        this.preguntas = res.data
      })
      .catch((err) => {
        console.error('Error al traer preguntas: ' + err.message)
      })
  }

  closeModal() {
    this.view.dismiss()
  }

}

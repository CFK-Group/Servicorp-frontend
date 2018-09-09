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

  respuestas = []
  preguntas = []
  formulario = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private view: ViewController, public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDetailPage')
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formularios'
    })
    loading.present()
    this.api.getFormResponses(this.navParams.get('formData').id)
      .then((res:any) => {
        this.respuestas = res.data
        this.api.getFormQuestions(this.navParams.get('formData').id)
          .then((res:any) => {
            this.preguntas = res.data
            
            //creando listado de pregunta/respuesta
            for(let i = 0; i < this.respuestas.length; i++){
              this.formulario.push({
                glosa: this.preguntas[i].glosa,
                respuesta: this.respuestas[i].respuesta
              })
            }
            loading.dismiss()
          })
          .catch((err) => {
            console.error('Error al traer preguntas: ' + err.message)
            loading.dismiss()
          })
      })
      .catch((err) => {
        console.error('Error al traer respuestas: ' + err.message)
        loading.dismiss()
      })

  }

  closeModal() {
    this.view.dismiss()
  }

}

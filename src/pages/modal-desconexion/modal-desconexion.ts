import { Component } from '@angular/core'
import { IonicPage, NavParams, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'
import { DomSanitizer } from '@angular/platform-browser'

/**
 * Generated class for the ModalDesconexionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-desconexion',
  templateUrl: 'modal-desconexion.html',
})
export class ModalDesconexionPage {
  desconexionForm: FormGroup

  image: string = null
  images = []

  constructor(public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, private navParams: NavParams, public formBuilder: FormBuilder, private view: ViewController) {
    this.desconexionForm = this.createDesconexionForm()
    try{
      console.log(navParams.get('formData'))
    }catch(err){
      console.log('Error al leer parámetros')
    }
  }

  private createDesconexionForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null, Validators.required],
      folio_servicio: [null, Validators.required],
      resp_1: [null, Validators.required],
      resp_2: [null, Validators.required],
      resp_3: [null, Validators.required],
      resp_4: [null, Validators.required],
      resp_5: [null, Validators.required],
      resp_6: [null, Validators.required],
      resp_7: [null, Validators.required],
      resp_8: [null],
      imagen_1: this.images[0],
      imagen_2: this.images[1],
      imagen_3: this.images[2],
      imagen_4: this.images[3]
    })
  }

  enviar(nombreFormulario:string){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present()
    if(this.images.length > 0){
      console.log('Guardando imagenes en el dispositivo...')
      for(let i = 0; i < this.images.length; i++){
        this.savePicture(this.images[i], this.desconexionForm.value.ot_servicorp)
      }
      console.log('Imagenes guardadas.')
    }
    this.desconexionForm.value.imagen_1 = this.images[0]
    this.desconexionForm.value.imagen_2 = this.images[1]
    this.desconexionForm.value.imagen_3 = this.images[2]
    this.desconexionForm.value.imagen_4 = this.images[3]
    this.api.enviarFormularioDesconexion(this.desconexionForm.value)
    .then( (res: any) => {
      loading.dismiss()
      if(res.success === true){
        let alert = this.alertCtrl.create({
          title: 'Formulario enviado',
          subTitle: 'Formulario de Desconexión enviado correctamente',
          buttons: ['OK']
        })
        alert.present()
        this.closeModal()
      }else{
        let alert = this.alertCtrl.create({
          title: 'Error (500) en el servidor',
          subTitle: 'Vuelva a intentarlo más tarde.',
          buttons: ['OK']
        })
        alert.present()        
      }
    })
    .catch( err => {
      loading.dismiss()
      let alert = this.alertCtrl.create({
        title: 'Error al enviar formulario',
        subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
        buttons: ['OK']
      })
      alert.present()
    })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModalDesconexionPage')
  }

  closeModal() {
    this.view.dismiss()
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true
    }
    this.camera.getPicture( options )
      .then(imageData => {
        this.images.push(imageData)
      })
      .catch(error =>{
        console.error( error )
      })
  }

  savePicture(pictureBase64:string, prefix:string){
    this.base64ToGallery.base64ToGallery(
      pictureBase64, 
      { 
        prefix: `${prefix}_`,
        mediaScanner: true
      }
    )
    .then(
      (res) => console.log('Saved image to gallery ', res),
      (err) => console.log('Error saving image to gallery ', err)
    )
  }

}

import { Component } from '@angular/core'
import { IonicPage, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'
import { DomSanitizer } from '@angular/platform-browser'
import { Geolocation } from '@ionic-native/geolocation'
import { Diagnostic } from '@ionic-native/diagnostic'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

/**
 * Generated class for the ModalBafiEntelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-bafi-entel',
  templateUrl: 'modal-bafi-entel.html',
})
export class ModalBafiEntelPage {

  bafiForm: FormGroup
  image: string = null
  images = []
  cod_decodificador = ''
  loading

  constructor(private diagnostic: Diagnostic, private barcodeScanner: BarcodeScanner, private geolocation: Geolocation, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController) {
    this.bafiForm = this.createBafiForm()
  }

  private createBafiForm() {
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
      resp_8: [null, Validators.required],
      resp_9: [null, Validators.required],
      resp_10: [null, Validators.required],
      resp_11: [null, Validators.required],
      resp_12: [null, Validators.required],
      resp_13: [null, Validators.required],
      resp_14: [null, Validators.required],
      resp_15: [null, Validators.required],
      resp_16: [null, Validators.required],
      resp_17: [null, Validators.required],
      resp_18: [null, Validators.required],
      resp_19: [null, Validators.required],
      resp_20: [null, Validators.required],
      resp_21: [null, Validators.required],
      resp_22: [null, Validators.required],
      resp_23: [null, Validators.required],
      resp_24: [null, Validators.required],
      resp_25: [null, Validators.required],
      resp_26: [null, Validators.required],
      resp_27: [null, Validators.required],
      resp_28: [null, Validators.required],
      imagen_1: this.images[0],
      imagen_2: this.images[1],
      imagen_3: this.images[2],
      imagen_4: this.images[3],
      imagen_5: this.images[4],
      imagen_6: this.images[5],
      imagen_7: this.images[6],
      imagen_8: this.images[7],
      imagen_9: this.images[8],
      imagen_10: this.images[9],
      cod_decodificador: [null]
    })
  }

  enviar() {
    this.loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    this.loading.present()
      .then(() => {
        this.diagnostic.isLocationEnabled()
          .then((res: any) => {
            console.log('GPS COMMUNICATION SUCCESSFULL')
            if (res) {
              console.log('GPS ENABLED')
              if (this.images[0] == null) {
                const confirm = this.alertCtrl.create({
                  title: 'Formulario sin imágenes',
                  message: '¿Desea enviar el formulario sin imágenes?',
                  buttons: [
                    {
                      text: 'Cancelar',
                      handler: () => {
                        console.log('se canceló')
                        this.loading.dismiss()
                      }
                    },
                    {
                      text: 'OK',
                      handler: () => {
                        this.enviarFormulario()
                      }
                    }
                  ]
                })
                confirm.present()
              } else {
                this.enviarFormulario()
              }
            } else {
              console.log('GPS DISABLED')
              this.loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Necesitas activar tu GPS',
                buttons: ['OK']
              })
              alert.present()
            }
          })
          .catch(error => {
            console.log('Falla de comunicacion con el GPS')
            console.log('Error:', error)
            this.loading.dismiss()
            const alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: JSON.stringify(error),
              buttons: ['OK']
            })
            alert.present()
          })
      })
  }

  enviarFormulario() {
    if (this.images.length > 0) {
      console.log('Guardando imagenes en el dispositivo...')
      for (let i = 0; i < this.images.length; i++) {
        this.savePicture(this.images[i], this.bafiForm.value.folio_servicio + '_entel_' + (i+1))
      }
      console.log('Imagenes guardadas.')
    }
    this.bafiForm.value.imagen_1 = this.images[0]
    this.bafiForm.value.imagen_2 = this.images[1]
    this.bafiForm.value.imagen_3 = this.images[2]
    this.bafiForm.value.imagen_4 = this.images[3]
    this.bafiForm.value.imagen_5 = this.images[4]
    this.bafiForm.value.imagen_6 = this.images[5]
    this.bafiForm.value.imagen_7 = this.images[6]
    this.bafiForm.value.imagen_8 = this.images[7]
    this.bafiForm.value.imagen_9 = this.images[8]
    this.bafiForm.value.imagen_10 = this.images[9]
    this.bafiForm.value.cod_decodificador = this.cod_decodificador
    console.log('iniciando toma de coordenadas')
    // capturando posicion gps
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options)
      .then((resp) => {
        console.log('tomando coordenadas')
        console.log(resp)
        this.bafiForm.value.latitud = resp.coords.latitude || 'e'
        this.bafiForm.value.longitud = resp.coords.longitude || 'eclear'
        this.api.enviarFormularioBafiEntel(this.bafiForm.value)
          .then((res: any) => {
            console.log('formulario enviado')
            if (res.success === true) {
              this.loading.dismiss()
              let alert = this.alertCtrl.create({
                title: 'Formulario enviado',
                subTitle: 'Formulario enviado correctamente',
                buttons: ['OK']
              })
              alert.present()
              this.closeModal()
            } else {
              this.loading.dismiss()
              let alert = this.alertCtrl.create({
                title: 'Error (500) en el servidor',
                subTitle: 'Vuelva a intentarlo más tarde.',
                buttons: ['OK']
              })
              alert.present()
            }
          })
          .catch(err => {
            this.loading.dismiss()
            console.log('formulario NO enviado')
            let alert = this.alertCtrl.create({
              title: 'Error al enviar formulario',
              subTitle: `Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde. ${err.message}`,
              buttons: ['OK']
            })
            alert.present()
          })
      }).catch((error) => {
        console.log('Error getting location', error.message)
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModalDesconexionPage')
    console.log(this.images[0] == undefined)
  }

  closeModal() {
    this.view.dismiss()
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.images.push(imageData)
      })
      .catch(error => {
        console.error(error)
      })
  }

  getCodigoVerificador() {
    this.barcodeScanner.scan({ 'showTorchButton': true })
      .then(barcodeData => {
        console.log('Barcode data', barcodeData)
        this.cod_decodificador = barcodeData.text
      })
      .catch(err => {
        console.log('Error', err)
      })
  }

  savePicture(pictureBase64: string, prefix: string) {
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

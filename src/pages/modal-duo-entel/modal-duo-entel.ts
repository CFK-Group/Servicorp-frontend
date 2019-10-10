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
import { CanGoBackProvider } from '../../providers/can-go-back/can-go-back';

/**
 * Generated class for the ModalDuoEntelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-duo-entel',
  templateUrl: 'modal-duo-entel.html',
})
export class ModalDuoEntelPage {
  duoEntelForm: FormGroup
  images = []
  cod_decodificador = ''
  loading

  constructor(private diagnostic: Diagnostic, private barcodeScanner: BarcodeScanner, private geolocation: Geolocation, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController, public canGoBack: CanGoBackProvider) {
    this.duoEntelForm = this.createDuoEntelForm()
  }

  ionViewCanLeave() {
    let canGoBack = this.canGoBack.getValue();
    this.canGoBack.setValue(true);
    return canGoBack;
  }

  private createDuoEntelForm() {
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
      resp_29: [null, Validators.required],
      resp_30: [null, Validators.required],
      resp_31: [null, Validators.required],
      resp_32: [null, Validators.required],
      resp_33: [null, Validators.required],
      resp_34: [null, Validators.required],
      resp_35: [null, Validators.required],
      resp_36: [null, Validators.required],
      resp_37: [null, Validators.required],
      resp_38: [null, Validators.required],
      resp_39: [null, Validators.required],
      resp_40: [null, Validators.required],
      resp_41: [null, Validators.required],
      resp_42: [null, Validators.required],
      resp_43: [null, Validators.required],
      resp_44: [null, Validators.required],
      resp_45: [null, Validators.required],
      resp_46: [null, Validators.required],
      resp_47: [null, Validators.required],
      resp_48: [null],
      resp_49: [null],
      resp_50: [null],
      resp_51: [null],
      resp_52: [null],
      resp_53: [null],
      resp_54: [null],
      resp_55: [null],
      resp_56: [null],
      resp_57: [null, Validators.required],
      resp_58: [null],
      resp_59: [null],
      resp_60: [null],
      resp_61: [null],
      resp_62: [null],
      resp_63: [null],
      resp_64: [null],
      resp_65: [null],
      resp_66: [null],
      resp_67: [null],
      resp_68: [null],
      resp_69: [null],
      resp_70: [null],
      resp_71: [null],
      resp_72: [null],
      resp_73: [null],
      resp_74: [null],
      resp_75: [null],
      resp_76: [null],
      resp_77: [null],
      resp_78: [null],
      resp_79: [null],
      resp_80: [null],
      resp_81: [null],
      resp_82: [null],
      resp_83: [null],
      resp_84: [null, Validators.required],
      resp_85: [null, Validators.required],
      resp_86: [null, Validators.required],
      resp_87: [null, Validators.required],
      resp_88: [null, Validators.required],
      resp_89: [null, Validators.required],
      resp_90: [null, Validators.required],
      resp_91: [null, Validators.required],
      resp_92: [null, Validators.required],
      resp_93: [null, Validators.required],
      resp_94: [null, Validators.required],
      resp_95: [null, Validators.required],
      resp_96: [null, Validators.required],
      resp_97: [null, Validators.required],
      resp_98: [null, Validators.required],
      resp_99: [null, Validators.required],
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
    console.log(this.duoEntelForm.value)
    let date =  new Date()
    if (this.images.length > 0) {
      console.log('Guardando imagenes en el dispositivo...')
      for (let i = 0; i < this.images.length; i++) {
        this.savePicture(this.images[i], this.duoEntelForm.value.ot_servicorp + '_entel_' + date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + (i+1))
      }
      console.log('Imagenes guardadas.')
    }
    this.duoEntelForm.value.imagen_1 = this.images[0]
    this.duoEntelForm.value.imagen_2 = this.images[1]
    this.duoEntelForm.value.imagen_3 = this.images[2]
    this.duoEntelForm.value.imagen_4 = this.images[3]
    this.duoEntelForm.value.imagen_5 = this.images[4]
    this.duoEntelForm.value.imagen_6 = this.images[5]
    this.duoEntelForm.value.imagen_7 = this.images[6]
    this.duoEntelForm.value.imagen_8 = this.images[7]
    this.duoEntelForm.value.imagen_9 = this.images[8]
    this.duoEntelForm.value.imagen_10 = this.images[9]
    this.duoEntelForm.value.cod_decodificador = this.cod_decodificador
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
        this.duoEntelForm.value.latitud = resp.coords.latitude || 'e'
        this.duoEntelForm.value.longitud = resp.coords.longitude || 'eclear'
        console.log('Coordenadas: ' + this.duoEntelForm.value.latitud + ',' + this.duoEntelForm.value.longitud)
        console.log('Enviando Formulario')
        this.api.enviarFormularioDuoEntel(this.duoEntelForm.value)
          .then((res: any) => {
            this.loading.dismiss()
            console.log('formulario enviado')
            if (res.success === true) {
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
        if (barcodeData.cancelled) {
          console.log('Scan Cancelled');
          this.canGoBack.setValue(false);
        } else if (!barcodeData.cancelled) {
          this.canGoBack.setValue(true)
          console.log('Barcode data', barcodeData)
          this.cod_decodificador = barcodeData.text
        }
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

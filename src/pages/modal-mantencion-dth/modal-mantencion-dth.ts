import { Component } from '@angular/core'
import { IonicPage, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'
import { DomSanitizer } from '@angular/platform-browser'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Geolocation } from '@ionic-native/geolocation'
import { Diagnostic } from '@ionic-native/diagnostic'
import { CanGoBackProvider } from '../../providers/can-go-back/can-go-back';

/**
 * Generated class for the ModalMantencionDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-mantencion-dth',
  templateUrl: 'modal-mantencion-dth.html',
})
export class ModalMantencionDthPage {

  mantencionesDth: FormGroup
  images = []
  cod_decodificador = ''
  loading

  constructor(private diagnostic: Diagnostic, private geolocation: Geolocation, private barcodeScanner: BarcodeScanner, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController, public canGoBack: CanGoBackProvider) {
    this.mantencionesDth = this.createMantencionesDthForm()
    this.mantencionesDth.controls['resp_8'].disable()
    this.mantencionesDth.controls['resp_12'].disable()
    this.mantencionesDth.controls['resp_15'].disable()
    this.mantencionesDth.controls['resp_16'].disable()
    this.mantencionesDth.controls['resp_18'].disable()
    this.mantencionesDth.controls['resp_23'].disable()
    this.mantencionesDth.controls['resp_24'].disable()
    this.mantencionesDth.controls['resp_25'].disable()
    this.mantencionesDth.controls['resp_28'].disable()
    this.mantencionesDth.controls['resp_64'].disable()
    this.mantencionesDth.controls['resp_65'].disable()
    this.mantencionesDth.controls['resp_66'].disable()
  }

  ionViewCanLeave() {
    let canGoBack = this.canGoBack.getValue();
    this.canGoBack.setValue(true);
    return canGoBack;
  }

  private createMantencionesDthForm() {
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
      resp_8: ['N/A'],
      resp_9: [null, Validators.required],
      resp_10: [null, Validators.required],
      resp_11: [null, Validators.required],
      resp_12: ['N/A'],
      resp_13: [null, Validators.required],
      resp_14: [null, Validators.required],
      resp_15: ['N/A'],
      resp_16: ['N/A'],
      resp_17: [null, Validators.required],
      resp_18: ['N/A'],
      resp_19: [null, Validators.required],
      resp_20: [null, Validators.required],
      resp_21: [null, Validators.required],
      resp_22: [null, Validators.required],
      resp_23: ['N/A'],
      resp_24: ['N/A'],
      resp_25: ['N/A'],
      resp_26: [null, Validators.required],
      resp_27: [null, Validators.required],
      resp_28: ['N/A'],
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
      resp_46: [null],
      resp_47: [null],
      resp_48: [null],
      resp_49: [null],
      resp_50: [null],
      resp_51: [null],
      resp_52: [null],
      resp_53: [null],
      resp_54: [null],
      resp_55: [null],
      resp_56: [null],
      resp_57: [null],
      resp_58: [null, Validators.required],
      resp_59: [null, Validators.required],
      resp_60: [null, Validators.required],
      resp_61: [null, Validators.required],
      resp_62: [null, Validators.required],
      resp_63: [null, Validators.required],
      resp_64: ['N/A'],
      resp_65: ['N/A'],
      resp_66: ['N/A'],
      resp_67: [null, Validators.required],
      resp_68: [null, Validators.required],
      resp_69: [null, Validators.required],
      resp_70: [null, Validators.required],
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
      resp_84: [null],
      resp_85: [null],
      resp_86: [null],
      resp_87: [null],
      resp_88: [null],
      resp_89: [null],
      resp_90: [null],
      resp_91: [null],
      resp_92: [null],
      resp_93: [null],
      resp_94: [null],
      resp_95: [null],
      resp_96: [null],
      resp_97: [null],
      resp_98: [null],
      resp_99: [null],
      resp_100: [null],
      resp_101: [null],
      resp_102: [null],
      resp_103: [null],
      resp_104: [null],
      resp_105: [null, Validators.required],
      resp_106: [null, Validators.required],
      resp_107: [null, Validators.required],
      resp_108: [null, Validators.required],
      resp_109: [null, Validators.required],
      resp_110: [null, Validators.required],
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

  enviarFormulario(){
    this.mantencionesDth.controls['resp_8'].enable()
    this.mantencionesDth.controls['resp_12'].enable()
    this.mantencionesDth.controls['resp_15'].enable()
    this.mantencionesDth.controls['resp_16'].enable()
    this.mantencionesDth.controls['resp_18'].enable()
    this.mantencionesDth.controls['resp_23'].enable()
    this.mantencionesDth.controls['resp_24'].enable()
    this.mantencionesDth.controls['resp_25'].enable()
    this.mantencionesDth.controls['resp_28'].enable()
    this.mantencionesDth.controls['resp_64'].enable()
    this.mantencionesDth.controls['resp_65'].enable()
    this.mantencionesDth.controls['resp_66'].enable()
    console.log(this.mantencionesDth.value)
    
    let date =  new Date()
    if (this.images.length > 0) {
      console.log('Guardando imagenes en el dispositivo...')
      for (let i = 0; i < this.images.length; i++) {
        this.savePicture(this.images[i], this.mantencionesDth.value.ot_servicorp + '_claro_' + date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + (i+1))
      }
      console.log('Imagenes guardadas.')
    }
    if (this.cod_decodificador != '') {
      console.log('Guardando código decodificador en el dispositivo...')
      this.savePicture(this.cod_decodificador, `cod_${this.mantencionesDth.value.ot_servicorp}`)
      console.log('Código decodificador guardado.')
    }
    this.mantencionesDth.value.imagen_1 = this.images[0]
    this.mantencionesDth.value.imagen_2 = this.images[1]
    this.mantencionesDth.value.imagen_3 = this.images[2]
    this.mantencionesDth.value.imagen_4 = this.images[3]
    this.mantencionesDth.value.imagen_5 = this.images[4]
    this.mantencionesDth.value.imagen_6 = this.images[5]
    this.mantencionesDth.value.imagen_7 = this.images[6]
    this.mantencionesDth.value.imagen_8 = this.images[7]
    this.mantencionesDth.value.imagen_9 = this.images[8]
    this.mantencionesDth.value.imagen_10 = this.images[9]
    this.mantencionesDth.value.cod_decodificador = this.cod_decodificador

    // capturando posicion gps
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.mantencionesDth.value.latitud = resp.coords.latitude || 'e'
      this.mantencionesDth.value.longitud = resp.coords.longitude || 'eclear'
      this.api.enviarFormularioMantencionDTH(this.mantencionesDth.value)
        .then((res: any) => {
          console.log(this.mantencionesDth.value)
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
              title: 'Error al enviar formulario',
              subTitle: res.message,
              buttons: ['OK']
            })
            alert.present()
          }
        })
        .catch((reason: any) => {
          this.loading.dismiss()
          let alert = this.alertCtrl.create({
            title: 'Error al enviar formulario',
            subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
            buttons: ['OK']
          })
          alert.present()
        })
    }).catch((error) => {
      console.log('Error getting location', error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMantencionDthPage')
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

  send(loading) {
    this.api.enviarFormularioMantencionDTH(this.mantencionesDth.value)
      .then((res: any) => {
        console.log(this.mantencionesDth.value)
        if (res.success === true) {
          let alert = this.alertCtrl.create({
            title: 'Formulario enviado',
            subTitle: 'Formulario enviado correctamente',
            buttons: ['OK']
          })
          alert.present()
          this.closeModal()
        } else {
          let alert = this.alertCtrl.create({
            title: 'Error al enviar formulario',
            subTitle: res.message,
            buttons: ['OK']
          })
          alert.present()
        }
      })
      .catch((reason: any) => {
        let alert = this.alertCtrl.create({
          title: 'Error al enviar formulario',
          subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
          buttons: ['OK']
        })
        alert.present()
      })
  }
}

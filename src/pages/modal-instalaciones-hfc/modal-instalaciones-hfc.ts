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
 * Generated class for the ModalInstalacionesHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-instalaciones-hfc',
  templateUrl: 'modal-instalaciones-hfc.html',
})
export class ModalInstalacionesHfcPage {

  instalacionesHfc: FormGroup
  images = []
  cod_decodificador = ''
  loading

  constructor(private diagnostic: Diagnostic, private geolocation: Geolocation, private barcodeScanner: BarcodeScanner, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController, public canGoBack: CanGoBackProvider) {
    this.instalacionesHfc = this.createInstalacionesHfcForm()
    this.instalacionesHfc.controls['resp_11'].disable()
    this.instalacionesHfc.controls['resp_12'].disable()
    this.instalacionesHfc.controls['resp_13'].disable()
    this.instalacionesHfc.controls['resp_38'].disable()
    this.instalacionesHfc.controls['resp_39'].disable()
    this.instalacionesHfc.controls['resp_40'].disable()
    this.instalacionesHfc.controls['resp_41'].disable()
    this.instalacionesHfc.controls['resp_42'].disable()
    this.instalacionesHfc.controls['resp_43'].disable()
    this.instalacionesHfc.controls['resp_44'].disable()
    this.instalacionesHfc.controls['resp_45'].disable()
    this.instalacionesHfc.controls['resp_46'].disable()
    this.instalacionesHfc.controls['resp_47'].disable()
    this.instalacionesHfc.controls['resp_48'].disable()
    this.instalacionesHfc.controls['resp_49'].disable()
    this.instalacionesHfc.controls['resp_50'].disable()
    this.instalacionesHfc.controls['resp_51'].disable()
    this.instalacionesHfc.controls['resp_52'].disable()
    this.instalacionesHfc.controls['resp_53'].disable()
    this.instalacionesHfc.controls['resp_54'].disable()
    this.instalacionesHfc.controls['resp_55'].disable()
    this.instalacionesHfc.controls['resp_56'].disable()
    this.instalacionesHfc.controls['resp_57'].disable()
    this.instalacionesHfc.controls['resp_58'].disable()
    this.instalacionesHfc.controls['resp_59'].disable()
    this.instalacionesHfc.controls['resp_60'].disable()
    this.instalacionesHfc.controls['resp_61'].disable()
  }

  ionViewCanLeave() {
    let canGoBack = this.canGoBack.getValue();
    this.canGoBack.setValue(true);
    return canGoBack;
  }

  private createInstalacionesHfcForm() {
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
      resp_11: ['N/A'],
      resp_12: ['N/A'],
      resp_13: ['N/A'],
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
      resp_38: ['N/A'],
      resp_39: ['N/A'],
      resp_40: ['N/A'],
      resp_41: ['N/A'],
      resp_42: ['N/A'],
      resp_43: ['N/A'],
      resp_44: ['N/A'],
      resp_45: ['N/A'],
      resp_46: ['N/A'],
      resp_47: ['N/A'],
      resp_48: ['N/A'],
      resp_49: ['N/A'],
      resp_50: ['N/A'],
      resp_51: ['N/A'],
      resp_52: ['N/A'],
      resp_53: ['N/A'],
      resp_54: ['N/A'],
      resp_55: ['N/A'],
      resp_56: ['N/A'],
      resp_57: ['N/A'],
      resp_58: ['N/A'],
      resp_59: ['N/A'],
      resp_60: ['N/A'],
      resp_61: ['N/A'],
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
      resp_103: [null, Validators.required],
      resp_104: [null, Validators.required],
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
            console.table(this.instalacionesHfc.value)
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
    this.instalacionesHfc.controls['resp_11'].enable()
    this.instalacionesHfc.controls['resp_12'].enable()
    this.instalacionesHfc.controls['resp_13'].enable()
    this.instalacionesHfc.controls['resp_38'].enable()
    this.instalacionesHfc.controls['resp_39'].enable()
    this.instalacionesHfc.controls['resp_40'].enable()
    this.instalacionesHfc.controls['resp_41'].enable()
    this.instalacionesHfc.controls['resp_42'].enable()
    this.instalacionesHfc.controls['resp_43'].enable()
    this.instalacionesHfc.controls['resp_44'].enable()
    this.instalacionesHfc.controls['resp_45'].enable()
    this.instalacionesHfc.controls['resp_46'].enable()
    this.instalacionesHfc.controls['resp_47'].enable()
    this.instalacionesHfc.controls['resp_48'].enable()
    this.instalacionesHfc.controls['resp_49'].enable()
    this.instalacionesHfc.controls['resp_50'].enable()
    this.instalacionesHfc.controls['resp_51'].enable()
    this.instalacionesHfc.controls['resp_52'].enable()
    this.instalacionesHfc.controls['resp_53'].enable()
    this.instalacionesHfc.controls['resp_54'].enable()
    this.instalacionesHfc.controls['resp_55'].enable()
    this.instalacionesHfc.controls['resp_56'].enable()
    this.instalacionesHfc.controls['resp_57'].enable()
    this.instalacionesHfc.controls['resp_58'].enable()
    this.instalacionesHfc.controls['resp_59'].enable()
    this.instalacionesHfc.controls['resp_60'].enable()
    this.instalacionesHfc.controls['resp_61'].enable()
    let date =  new Date()
    if (this.images.length > 0) {
      console.log('Guardando imagenes en el dispositivo...')
      for (let i = 0; i < this.images.length; i++) {
        this.savePicture(this.images[i], this.instalacionesHfc.value.ot_servicorp + '_claro_' + date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear() + (i+1))
      }
      console.log('Imagenes guardadas.')
    }
    this.instalacionesHfc.value.imagen_1 = this.images[0]
    this.instalacionesHfc.value.imagen_2 = this.images[1]
    this.instalacionesHfc.value.imagen_3 = this.images[2]
    this.instalacionesHfc.value.imagen_4 = this.images[3]
    this.instalacionesHfc.value.imagen_5 = this.images[4]
    this.instalacionesHfc.value.imagen_6 = this.images[5]
    this.instalacionesHfc.value.imagen_7 = this.images[6]
    this.instalacionesHfc.value.imagen_8 = this.images[7]
    this.instalacionesHfc.value.imagen_9 = this.images[8]
    this.instalacionesHfc.value.imagen_10 = this.images[9]
    this.instalacionesHfc.value.cod_decodificador = this.cod_decodificador

    // capturando posicion gps
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.instalacionesHfc.value.latitud = resp.coords.latitude || 'e'
      this.instalacionesHfc.value.longitud = resp.coords.longitude || 'eclear'
      this.api.enviarFormularioInstalacionHFC(this.instalacionesHfc.value)
        .then((res: any) => {
          console.log(this.instalacionesHfc.value)
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
        .catch((error: any) => {
          this.loading.dismiss()
          let alert = this.alertCtrl.create({
            title: 'Error al enviar formulario',
            subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
            buttons: ['OK']
          })
          alert.present()
          console.log('Error:', error)
        })
    }).catch((error) => {
      console.log('Error getting location', error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInstalacionesHfcPage')
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
    this.api.enviarFormularioInstalacionHFC(this.instalacionesHfc.value)
      .then((res: any) => {
        console.log(this.instalacionesHfc.value)
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
      .catch((error: any) => {
        let alert = this.alertCtrl.create({
          title: 'Error al enviar formulario',
          subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
          buttons: ['OK']
        })
        alert.present()
      })
  }
}

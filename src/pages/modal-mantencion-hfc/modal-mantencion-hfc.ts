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

/**
 * Generated class for the ModalMantencionHfcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-mantencion-hfc',
  templateUrl: 'modal-mantencion-hfc.html',
})
export class ModalMantencionHfcPage {

  mantencionesHfc: FormGroup
  images = []
  cod_decodificador = ''

  constructor(private diagnostic: Diagnostic, private geolocation: Geolocation, private barcodeScanner: BarcodeScanner, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController) {
    this.mantencionesHfc = this.createMantencionesHfcForm()
    this.mantencionesHfc.controls['resp_15'].disable()
    this.mantencionesHfc.controls['resp_16'].disable()
    this.mantencionesHfc.controls['resp_38'].disable()
    this.mantencionesHfc.controls['resp_39'].disable()
    this.mantencionesHfc.controls['resp_40'].disable()
    this.mantencionesHfc.controls['resp_41'].disable()
    this.mantencionesHfc.controls['resp_42'].disable()
    this.mantencionesHfc.controls['resp_43'].disable()
    this.mantencionesHfc.controls['resp_44'].disable()
    this.mantencionesHfc.controls['resp_45'].disable()
    this.mantencionesHfc.controls['resp_46'].disable()
    this.mantencionesHfc.controls['resp_47'].disable()
    this.mantencionesHfc.controls['resp_48'].disable()
    this.mantencionesHfc.controls['resp_49'].disable()
    this.mantencionesHfc.controls['resp_50'].disable()
    this.mantencionesHfc.controls['resp_51'].disable()
    this.mantencionesHfc.controls['resp_52'].disable()
    this.mantencionesHfc.controls['resp_53'].disable()
    this.mantencionesHfc.controls['resp_54'].disable()
    this.mantencionesHfc.controls['resp_55'].disable()
    this.mantencionesHfc.controls['resp_56'].disable()
    this.mantencionesHfc.controls['resp_57'].disable()
    this.mantencionesHfc.controls['resp_58'].disable()
    this.mantencionesHfc.controls['resp_59'].disable()
    this.mantencionesHfc.controls['resp_60'].disable()
    this.mantencionesHfc.controls['resp_61'].disable()
    this.mantencionesHfc.controls['resp_62'].disable()
    this.mantencionesHfc.controls['resp_63'].disable()
    this.mantencionesHfc.controls['resp_64'].disable()
  }

  private createMantencionesHfcForm(){
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
      resp_15: ['N/A'],
      resp_16: ['N/A'],
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
      resp_62: ['N/A'],
      resp_63: ['N/A'],
      resp_64: ['N/A'],
      resp_65: [null, Validators.required],
      resp_66: [null, Validators.required],
      resp_67: [null, Validators.required],
      resp_68: [null, Validators.required],
      resp_69: [null, Validators.required],
      resp_70: [null, Validators.required],
      resp_71: [null, Validators.required],
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
      resp_105: [null],
      resp_106: [null],
      resp_107: [null],
      resp_108: [null],
      imagen_1: [this.images[0]],
      imagen_2: [this.images[1]],
      imagen_3: [this.images[2]],
      imagen_4: [this.images[3]],
      imagen_5: [this.images[4]],
      imagen_6: [this.images[5]],
      imagen_7: [this.images[6]],
      imagen_8: [this.images[7]],
      imagen_9: [this.images[8]],
      imagen_10: [this.images[9]],
      cod_decodificador: [null]
    })
  }

  enviar(){
    this.diagnostic.isGpsLocationEnabled()
    .then((res:any) => {
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
      }else{
        console.log('GPS DISABLED')
        const alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Necesitas activar tu GPS',
          buttons: ['OK']
        })
        alert.present()
      }
    })
    .catch(err => {
      console.log('Falla de comunicacion con el GPS')
      console.log(err)
      const alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: JSON.stringify(err),
        buttons: ['OK']
      })
      alert.present()
    })
  }

  enviarFormulario(){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present()
    if(this.images.length > 0){
      console.log('Guardando imagenes en el dispositivo...')
      for(let i = 0; i < this.images.length; i++){
        this.savePicture(this.images[i], this.mantencionesHfc.value.ot_servicorp)
      }
      console.log('Imagenes guardadas.')
    }
    if(this.cod_decodificador != ''){
      console.log('Guardando código decodificador en el dispositivo...')
      this.savePicture(this.cod_decodificador, `cod_${this.mantencionesHfc.value.ot_servicorp}`)
      console.log('Código decodificador guardado.')
    }
    this.mantencionesHfc.value.imagen_1 = this.images[0]
    this.mantencionesHfc.value.imagen_2 = this.images[1]
    this.mantencionesHfc.value.imagen_3 = this.images[2]
    this.mantencionesHfc.value.imagen_4 = this.images[3]
    this.mantencionesHfc.value.imagen_5 = this.images[4]
    this.mantencionesHfc.value.imagen_6 = this.images[5]
    this.mantencionesHfc.value.imagen_7 = this.images[6]
    this.mantencionesHfc.value.imagen_8 = this.images[7]
    this.mantencionesHfc.value.imagen_9 = this.images[8]
    this.mantencionesHfc.value.imagen_10 = this.images[9]
    this.mantencionesHfc.value.cod_decodificador = this.cod_decodificador

    // capturando posicion gps
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mantencionesHfc.value.latitud = resp.coords.latitude || 'e'
      this.mantencionesHfc.value.longitud = resp.coords.longitude || 'eclear'
      this.api.enviarFormularioMantencionHFC(this.mantencionesHfc.value)
      .then( (res: any) => {
        loading.dismiss()
        if(res.success === true){
          let alert = this.alertCtrl.create({
            title: 'Formulario enviado',
            subTitle: 'Formulario enviado correctamente',
            buttons: ['OK']
          })
          alert.present()
          this.closeModal()
        }else{
          let alert = this.alertCtrl.create({
            title: 'Error al enviar formulario',
            subTitle: res.message,
            buttons: ['OK']
          })
          alert.present()
        }
      })
      .catch( (reason:any) => {
        loading.dismiss()
        let alert = this.alertCtrl.create({
          title: 'Error al enviar formulario',
          subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
          buttons: ['OK']
        })
        alert.present()
      })
    }).catch((error) => {
      loading.dismiss()
      console.log('Error getting location', error)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMantencionHfcPage')
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

  getCodigoVerificador(){
    this.barcodeScanner.scan({'showTorchButton': true})
    .then(barcodeData => {
      console.log('Barcode data', barcodeData)
      this.cod_decodificador = barcodeData.text
    })
    .catch(err => {
      console.log('Error', err)
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

  send(loading){
    this.api.enviarFormularioMantencionHFC(this.mantencionesHfc.value)
      .then( (res: any) => {
        loading.dismiss()
        if(res.success === true){
          let alert = this.alertCtrl.create({
            title: 'Formulario enviado',
            subTitle: 'Formulario enviado correctamente',
            buttons: ['OK']
          })
          alert.present()
          this.closeModal()
        }else{
          let alert = this.alertCtrl.create({
            title: 'Error al enviar formulario',
            subTitle: res.message,
            buttons: ['OK']
          })
          alert.present()
        }
      })
      .catch( (reason:any) => {
        loading.dismiss()
        let alert = this.alertCtrl.create({
          title: 'Error al enviar formulario',
          subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
          buttons: ['OK']
        })
        alert.present()
      })
  }
}

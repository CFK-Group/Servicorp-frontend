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

  constructor(private diagnostic: Diagnostic, private geolocation: Geolocation, private barcodeScanner: BarcodeScanner, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private view: ViewController) {
    this.mantencionesDth = this.createMantencionesDthForm()
  }

  private createMantencionesDthForm(){
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
      resp_13: ['N/A', Validators.required],
      resp_14: [null, Validators.required],
      resp_15: [null, Validators.required],
      resp_16: [null, Validators.required],
      resp_17: ['N/A'],
      resp_18: ['N/A'],
      resp_19: [null, Validators.required],
      resp_20: ['N/A'],
      resp_21: [null, Validators.required],
      resp_22: [null, Validators.required],
      resp_23: ['N/A'],
      resp_24: ['N/A'],
      resp_25: ['N/A'],
      resp_26: [null, Validators.required],
      resp_27: [null, Validators.required],
      resp_28: [null, Validators.required],
      resp_29: [null, Validators.required],
      resp_30: ['N/A'],
      resp_31: ['N/A'],
      resp_32: [null, Validators.required],
      resp_33: [null, Validators.required],
      resp_34: [null, Validators.required],
      resp_35: [null, Validators.required],
      resp_36: [null],
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
      resp_47: ['N/A'],
      resp_48: ['N/A'],
      resp_49: ['N/A'],
      resp_50: [null, Validators.required],
      resp_51: [null, Validators.required],
      resp_52: [null, Validators.required],
      resp_53: [null, Validators.required],
      resp_54: [null],
      resp_55: [null],
      resp_56: [null],
      resp_57: [null],
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
      resp_84: [null],
      resp_85: [null],
      resp_86: [null],
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

  enviar(){
    this.diagnostic.isLocationEnabled()
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
        this.savePicture(this.images[i], this.mantencionesDth.value.ot_servicorp)
      }
      console.log('Imagenes guardadas.')
    }
    if(this.cod_decodificador != ''){
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
      .then( (res: any) => {
        console.log(this.mantencionesDth.value)
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
    console.log('ionViewDidLoad ModalMantencionDthPage')
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
    this.api.enviarFormularioMantencionDTH(this.mantencionesDth.value)
      .then( (res: any) => {
        console.log(this.mantencionesDth.value)
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

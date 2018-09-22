import { Component } from '@angular/core'
import { IonicPage, NavParams, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'
import { DomSanitizer } from '@angular/platform-browser'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Geolocation } from '@ionic-native/geolocation'

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

  constructor(private geolocation: Geolocation, private barcodeScanner: BarcodeScanner, public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, private navParams: NavParams, public formBuilder: FormBuilder, private view: ViewController) {
    this.instalacionesHfc = this.createInstalacionesHfcForm()
  }

  private createInstalacionesHfcForm(){
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
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
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
      resp_48: [null, Validators.required],
      resp_49: [null, Validators.required],
      resp_50: [null, Validators.required],
      resp_51: [null, Validators.required],
      resp_52: [null, Validators.required],
      resp_53: [null, Validators.required],
      resp_54: [null, Validators.required],
      resp_55: [null, Validators.required],
      resp_56: [null, Validators.required],
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
      resp_87: [null],
      resp_88: [null],
      resp_89: [null],
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

  enviar(nombreFormulario:string){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present()
    if(this.images.length > 0){
      console.log('Guardando imagenes en el dispositivo...')
      for(let i = 0; i < this.images.length; i++){
        this.savePicture(this.images[i], this.instalacionesHfc.value.ot_servicorp)
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
    this.geolocation.getCurrentPosition().then((resp) => {
      this.instalacionesHfc.value.latitud = resp.coords.latitude
      this.instalacionesHfc.value.longitud = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error)
    })

    this.api.enviarFormularioInstalacionHFC(this.instalacionesHfc.value)
    .then( (res: any) => {
      console.log(this.instalacionesHfc.value)
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInstalacionesHfcPage')
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
    this.barcodeScanner.scan()
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

}

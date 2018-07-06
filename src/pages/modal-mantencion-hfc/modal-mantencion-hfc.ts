import { Component } from '@angular/core'
import { IonicPage, NavParams, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'
import { DomSanitizer } from '@angular/platform-browser'

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

  constructor(public DomSanitizer: DomSanitizer, private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, private navParams: NavParams, public formBuilder: FormBuilder, private view: ViewController) {
    this.mantencionesHfc = this.createMantencionesHfcForm()
  }

  private createMantencionesHfcForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [''],
      folio_servicio: [''],
      resp_1: [''],
      resp_2: [''],
      resp_3: [''],
      resp_4: [''],
      resp_5: [''],
      resp_6: [''],
      resp_7: [''],
      resp_8: [''],
      resp_9: [''],
      resp_10: [''],
      resp_11: [''],
      resp_12: [''],
      resp_13: [''],
      resp_14: [''],
      resp_15: [''],
      resp_16: [''],
      resp_17: [''],
      resp_18: [''],
      resp_19: [''],
      resp_20: [''],
      resp_21: [''],
      resp_22: [''],
      resp_23: [''],
      resp_24: [''],
      resp_25: [''],
      resp_26: [''],
      resp_27: [''],
      resp_28: [''],
      resp_29: [''],
      resp_30: [''],
      resp_31: [''],
      resp_32: [''],
      resp_33: [''],
      resp_34: [''],
      resp_35: [''],
      resp_36: [''],
      resp_37: [''],
      resp_38: [''],
      resp_39: [''],
      resp_40: [''],
      resp_41: [''],
      resp_42: [''],
      resp_43: [''],
      resp_44: [''],
      resp_45: [''],
      resp_46: [''],
      resp_47: [''],
      resp_48: [''],
      resp_49: [''],
      resp_50: [''],
      resp_51: [''],
      resp_52: [''],
      resp_53: [''],
      resp_54: [''],
      resp_55: [''],
      resp_56: [''],
      resp_57: [''],
      resp_58: [''],
      resp_59: [''],
      resp_60: [''],
      resp_61: [''],
      resp_62: [''],
      resp_63: [''],
      resp_64: [''],
      resp_65: [''],
      resp_66: [''],
      resp_67: [''],
      resp_68: [''],
      resp_69: [''],
      resp_70: [''],
      resp_71: [''],
      resp_72: [''],
      resp_73: [''],
      resp_74: [''],
      resp_75: [''],
      resp_76: [''],
      resp_77: [''],
      resp_78: [''],
      resp_79: [''],
      resp_80: [''],
      resp_81: [''],
      resp_82: [''],
      resp_83: [''],
      resp_84: [''],
      resp_85: [''],
      resp_86: [''],
      resp_87: [''],
      resp_88: [''],
      imagen_1: [''],
      imagen_2: [''],
      imagen_3: [''],
      imagen_4: [''],
      cod_decodificador: [null]
    }) // return para test


    // return this.formBuilder.group({
    //   latitud: 0,
    //   longitud: 0,
    //   usuario_id: localStorage.getItem('userId'),
    //   token: localStorage.getItem('userToken'),
    //   ot_servicorp: ['', Validators.required],
    //   folio_servicio: ['', Validators.required],
    //   resp_1: ['', Validators.required],
    //   resp_2: ['', Validators.required],
    //   resp_3: ['', Validators.required],
    //   resp_4: ['', Validators.required],
    //   resp_5: ['', Validators.required],
    //   resp_6: ['', Validators.required],
    //   resp_7: ['', Validators.required],
    //   resp_8: ['', Validators.required],
    //   resp_9: ['', Validators.required],
    //   resp_10: ['', Validators.required],
    //   resp_11: ['', Validators.required],
    //   resp_12: ['', Validators.required],
    //   resp_13: ['', Validators.required],
    //   resp_14: ['', Validators.required],
    //   resp_15: [''],
    //   resp_16: [''],
    //   resp_17: ['', Validators.required],
    //   resp_18: ['', Validators.required],
    //   resp_19: ['', Validators.required],
    //   resp_20: ['', Validators.required],
    //   resp_21: ['', Validators.required],
    //   resp_22: ['', Validators.required],
    //   resp_23: ['', Validators.required],
    //   resp_24: ['', Validators.required],
    //   resp_25: ['', Validators.required],
    //   resp_26: ['', Validators.required],
    //   resp_27: ['', Validators.required],
    //   resp_28: ['', Validators.required],
    //   resp_29: ['', Validators.required],
    //   resp_30: ['', Validators.required],
    //   resp_31: ['', Validators.required],
    //   resp_32: ['', Validators.required],
    //   resp_33: ['', Validators.required],
    //   resp_34: ['', Validators.required],
    //   resp_35: ['', Validators.required],
    //   resp_36: ['', Validators.required],
    //   resp_37: ['', Validators.required],
    //   resp_38: [''],
    //   resp_39: ['', Validators.required],
    //   resp_40: ['', Validators.required],
    //   resp_41: ['', Validators.required],
    //   resp_42: ['', Validators.required],
    //   resp_43: [''],
    //   resp_44: [''],
    //   resp_45: [''],
    //   resp_46: [''],
    //   resp_47: [''],
    //   resp_48: [''],
    //   resp_49: ['', Validators.required],
    //   resp_50: ['', Validators.required],
    //   resp_51: ['', Validators.required],
    //   resp_52: ['', Validators.required],
    //   resp_53: ['', Validators.required],
    //   resp_54: ['', Validators.required],
    //   resp_55: ['', Validators.required],
    //   resp_56: [''],
    //   resp_57: [''],
    //   resp_58: [''],
    //   resp_59: [''],
    //   resp_60: [''],
    //   resp_61: [''],
    //   resp_62: [''],
    //   resp_63: [''],
    //   resp_64: [''],
    //   resp_65: [''],
    //   resp_66: [''],
    //   resp_67: [''],
    //   resp_68: [''],
    //   resp_69: [''],
    //   resp_70: [''],
    //   resp_71: [''],
    //   resp_72: [''],
    //   resp_73: [''],
    //   resp_74: [''],
    //   resp_75: [''],
    //   resp_76: [''],
    //   resp_77: [''],
    //   resp_78: [''],
    //   resp_79: [''],
    //   resp_80: [''],
    //   resp_81: [''],
    //   resp_82: [''],
    //   resp_83: [''],
    //   resp_84: [''],
    //   resp_85: [''],
    //   resp_86: [''],
    //   resp_87: [''],
    //   resp_88: [''],
    //   imagen_1: [this.images[0]],
    //   imagen_2: [this.images[1]],
    //   imagen_3: [this.images[2]],
    //   imagen_4: [this.images[3]],
    //   cod_decodificador: [this.cod_decodificador]
    // })
  }

  enviar(nombreFormulario:string){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present()
    console.log(this.mantencionesHfc.value)
    if(this.images.length > 0){
      console.log('Guardando imagenes en el dispositivo...')
      for(let i = 0; i < this.images.length; i++){
        this.savePicture(this.images[i], nombreFormulario)
      }
      console.log('Imagenes guardadas.')
    }
    if(this.cod_decodificador != ''){
      console.log('Guardando código decodificador en el dispositivo...')
      this.savePicture(this.cod_decodificador, `cod_${nombreFormulario}`)
      console.log('Código decodificador guardado.')
    }
    this.mantencionesHfc.value.imagen_1 = this.images[0]
    this.mantencionesHfc.value.imagen_2 = this.images[1]
    this.mantencionesHfc.value.imagen_3 = this.images[2]
    this.mantencionesHfc.value.imagen_4 = this.images[3]
    this.mantencionesHfc.value.cod_decodificador = this.cod_decodificador
    console.log(this.mantencionesHfc.value.imagen_1 + 'imagen 1')
    this.api.enviarFormularioMantencionHFC(this.mantencionesHfc.value)
    .then( (res: any) => {
      console.log(this.mantencionesHfc.value)
      loading.dismiss()
      if(res.success === true){
        let alert = this.alertCtrl.create({
          title: 'Formulario enviado',
          subTitle: 'Formulario enviado correctamente',
          buttons: ['OK']
        })
        alert.present()
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
        subTitle: reason.message,
        buttons: ['OK']
      })
      alert.present()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMantencionHfcPage');
  }

  closeModal() {
    this.view.dismiss();
  }

  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true
    };
    this.camera.getPicture( options )
    .then(imageData => {
      this.images.push(imageData)
      console.log(imageData)
    })
    .catch(error =>{
      console.error( error )
    });
  }

  getCodigoVerificador(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true
    };
    this.camera.getPicture( options )
    .then(imageData => {
      this.cod_decodificador = imageData
      console.log(this.cod_decodificador)
    })
    .catch(error =>{
      console.error( error )
    });
  }

  savePicture(pictureBase64:string, prefix:string){
    this.base64ToGallery.base64ToGallery(pictureBase64, { prefix: `${prefix}_` })
    .then(
      (res) => console.log('Saved image to gallery ', res),
      (err) => console.log('Error saving image to gallery ', err)
    );
  }

}
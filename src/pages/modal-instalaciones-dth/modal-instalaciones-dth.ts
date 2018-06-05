import { Component } from '@angular/core'
import { IonicPage, NavParams, LoadingController, ViewController } from 'ionic-angular'
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { AlertController } from 'ionic-angular'
import { Camera, CameraOptions } from '@ionic-native/camera'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery'

/**
 * Generated class for the ModalInstalacionesDthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-instalaciones-dth',
  templateUrl: 'modal-instalaciones-dth.html',
})
export class ModalInstalacionesDthPage {

  instalacionesDth: FormGroup
  images = [];
  
  constructor(private base64ToGallery: Base64ToGallery, private camera: Camera, public alertCtrl: AlertController, private api: ApiServiceProvider, public loadingCtrl: LoadingController, private navParams: NavParams, public formBuilder: FormBuilder, private view: ViewController) {
    this.instalacionesDth = this.createInstalacionesDthForm()
  }
  
  private createInstalacionesDthForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: ['', Validators.required],
      folio_servicio: ['', Validators.required],
      resp_1: ['', Validators.required],
      resp_2: ['', Validators.required],
      resp_3: ['', Validators.required],
      resp_4: ['', Validators.required],
      resp_5: ['', Validators.required],
      resp_6: ['', Validators.required],
      resp_7: ['', Validators.required],
      resp_8: ['', Validators.required],
      resp_9: ['', Validators.required],
      resp_10: ['', Validators.required],
      resp_11: ['', Validators.required],
      resp_12: ['', Validators.required],
      resp_13: ['', Validators.required],
      resp_14: ['', Validators.required],
      resp_15: ['', Validators.required],
      resp_16: ['', Validators.required],
      resp_17: ['', Validators.required],
      resp_18: [''],
      resp_19: [''],
      resp_20: [''],
      resp_21: ['', Validators.required],
      resp_22: ['', Validators.required],
      resp_23: ['', Validators.required],
      resp_24: ['', Validators.required],
      resp_25: ['', Validators.required],
      resp_26: ['', Validators.required],
      resp_27: ['', Validators.required],
      resp_28: ['', Validators.required],
      resp_29: ['', Validators.required],
      resp_30: ['', Validators.required],
      resp_31: [''],
      resp_32: ['', Validators.required],
      resp_33: [''],
      resp_34: ['', Validators.required],
      resp_35: [''],
      resp_36: [''],
      resp_37: [''],
      resp_38: ['', Validators.required],
      resp_39: [''],
      resp_40: ['', Validators.required],
      resp_41: ['', Validators.required],
      resp_42: ['', Validators.required],
      resp_43: ['', Validators.required],
      resp_44: ['', Validators.required],
      resp_45: ['', Validators.required],
      resp_46: ['', Validators.required],
      resp_47: ['', Validators.required],
      resp_48: ['', Validators.required],
      resp_49: ['', Validators.required],
      resp_50: [''],
      resp_51: [''],
      resp_52: [''],
      resp_53: ['', Validators.required],
      resp_54: ['', Validators.required],
      resp_55: ['', Validators.required],
      resp_56: ['', Validators.required],
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
      resp_89: ['']
    })
  }

  enviar(){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present();
    console.table(this.instalacionesDth.value)
    console.log('Guardando imagenes en el dispositivo...')
    for(let i = 0; i < this.images.length; i++){
      this.savePicture(this.images[i], 'form123_')
    }
    console.log('Imagenes guardadas.')
    this.api.enviarFormularioInstalacionDTH(this.instalacionesDth.value)
    .then( (res: any) => {
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
    console.log('ionViewDidLoad ModalInstalacionesDthPage')
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
    };
    this.camera.getPicture( options )
      .then(imageData => {
        this.images.push(imageData)
      })
      .catch(error =>{
        console.error( error )
      });
  }

  savePicture(pictureBase64:string, prefix:string){
    this.base64ToGallery.base64ToGallery(pictureBase64, { prefix: prefix })
    .then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

}

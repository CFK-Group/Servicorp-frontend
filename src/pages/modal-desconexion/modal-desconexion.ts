import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavParams, ViewController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiServiceProvider } from "../../providers/api-service/api-service";
import { AlertController } from 'ionic-angular';

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
  desconexionForm: FormGroup;

  image: string = null;
  images = [];
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private api: ApiServiceProvider, private navParams: NavParams, private view: ViewController, private camera: Camera, private base64ToGallery: Base64ToGallery) {
    this.desconexionForm = this.createDesconexionForm();
  }

  private createDesconexionForm(){
    return this.formBuilder.group({
      ot_servicorp: ['', Validators.required],
      folio_servicio: ['', Validators.required],
      resp_1: ['', Validators.required],
      resp_2: ['', Validators.required],
      resp_3: ['', Validators.required],
      resp_4: ['', Validators.required],
      resp_5: ['', Validators.required],
      resp_6: ['', Validators.required],
      resp_7: ['', Validators.required],
      resp_8: ['']
    })
  }

  enviar(){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    });
    loading.present();
    console.table(this.desconexionForm.value);
    this.api.enviarFormularioDesconexion(this.desconexionForm.value)
      .then( (res: any) => {
        loading.dismiss();
        if(res.success === true){
          let alert = this.alertCtrl.create({
            title: 'Formulario enviado',
            subTitle: 'Formulario de Desconexión enviado correctamente',
            buttons: ['OK']
          });
          alert.present();
          this.closeModal();
        }else{
          let alert = this.alertCtrl.create({
            title: 'Error (500) en el servidor',
            subTitle: 'Vuelva a intentarlo más tarde.',
            buttons: ['OK']
          });
          alert.present();        }
      })
      .catch( err => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error al enviar formulario',
          subTitle: 'Ha ocurrido un error al enviar el formulario. Por favor inténtelo de nuevo más tarde.',
          buttons: ['OK']
        });
        alert.present();
      })
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ModalDesconexionPage');
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
        this.image = `data:image/jpeg;base64,${imageData}`;
        this.images.push(this.image);
      })
      .catch(error =>{
        console.error( error );
      });
  }

  guardarFormulario(){
    this.guardarImg();
  }

  guardarImg(){
    this.images.forEach(function (element) {
      this.base64ToGallery.base64ToGallery(element, { prefix: '_img' }).then(
        res => console.log('Saved image to gallery ', res),
        err => console.log('Error saving image to gallery ', err)
      );
    })
  }

}

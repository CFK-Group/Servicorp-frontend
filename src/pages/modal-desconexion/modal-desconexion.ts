import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";

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

  image: string = null;
  images = [];
  constructor(private navParams: NavParams, private view: ViewController, private camera: Camera, private base64ToGallery: Base64ToGallery) {
    console.log(this.images);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDesconexionPage');
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

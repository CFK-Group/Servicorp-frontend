import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController, LoadingController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiServiceProvider} from "../../providers/api-service/api-service";

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

  mantencionesHfc: FormGroup;
  public message: any;

  constructor(public loadingCtrl: LoadingController, private api: ApiServiceProvider, private navParams: NavParams, public formBuilder: FormBuilder, private view: ViewController) {
    this.mantencionesHfc = this.createMantencionesHfcForm();
  }

  private createMantencionesHfcForm(){
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
      resp_15: [''],
      resp_16: [''],
      resp_17: ['', Validators.required],
      resp_18: ['', Validators.required],
      resp_19: ['', Validators.required],
      resp_20: ['', Validators.required],
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
      resp_31: ['', Validators.required],
      resp_32: ['', Validators.required],
      resp_33: ['', Validators.required],
      resp_34: ['', Validators.required],
      resp_35: ['', Validators.required],
      resp_36: ['', Validators.required],
      resp_37: ['', Validators.required],
      resp_38: [''],
      resp_39: ['', Validators.required],
      resp_40: ['', Validators.required],
      resp_41: ['', Validators.required],
      resp_42: ['', Validators.required],
      resp_43: [''],
      resp_44: [''],
      resp_45: [''],
      resp_46: [''],
      resp_47: [''],
      resp_48: [''],
      resp_49: ['', Validators.required],
      resp_50: ['', Validators.required],
      resp_51: ['', Validators.required],
      resp_52: ['', Validators.required],
      resp_53: ['', Validators.required],
      resp_54: ['', Validators.required],
      resp_55: ['', Validators.required],
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
      resp_88: ['']
    });
  }

  enviar(){
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    });
    loading.present();
    console.table(this.mantencionesHfc.value);
    this.api.enviarFormularioMantencionHFC(this.mantencionesHfc.value)
      .then( (res: any) => {
        loading.dismiss();
        if(res.success === true){
          alert(res.message); // cambiar por popup de confirmacion
          this.closeModal();
        }else{
          alert(`error al enviar formulario: ${res.message}`) // cambiar por popup de error
        }
      })
      .catch( err => {
        loading.dismiss();
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalMantencionHfcPage');
  }

  closeModal() {
    this.view.dismiss();
  }

}

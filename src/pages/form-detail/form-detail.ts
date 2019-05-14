import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular'
import { ApiServiceProvider } from '../../providers/api-service/api-service'
import { FormBuilder, FormGroup } from "@angular/forms"
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

/**
 * Generated class for the FormDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-detail',
  templateUrl: 'form-detail.html',
})
export class FormDetailPage {

  formulario = []
  imagenes = []
  preguntasIds = []
  tipoFormulario: string
  instalacionesHfcForm: FormGroup
  mostrarFormInstalacionesHfc: boolean = false
  instalacionesDthForm: FormGroup
  mostrarFormInstalacionesDth: boolean = false
  mantencionesHfcForm: FormGroup
  mostrarFormMantencionesHfc: boolean = false
  mantencionesDthForm: FormGroup
  mostrarFormMantencionesDth: boolean = false
  desconexionForm: FormGroup
  mostrarFormDesconexion: boolean = false
  instalacionesDthEntelForm: FormGroup
  mostrarFormInstalacionesDthEntel: boolean = false
  bafiEntelForm: FormGroup
  mostrarFormBafiEntel: boolean = false
  duoEntelForm: FormGroup
  mostrarFormDuoEntel: boolean = false
  id_ot_servicorp: string
  id_folio_servicio: string
  ot_servicorp: string
  folio_servicio: string
  resp_1: string
  resp_2: string
  resp_3: string
  resp_4: string
  resp_5: string
  resp_6: string
  resp_7: string
  resp_8: string
  resp_9: string
  resp_10: string
  resp_11: string
  resp_12: string
  resp_13: string
  resp_14: string
  resp_15: string
  resp_16: string
  resp_17: string
  resp_18: string
  resp_19: string
  resp_20: string
  resp_21: string
  resp_22: string
  resp_23: string
  resp_24: string
  resp_25: string
  resp_26: string
  resp_27: string
  resp_28: string
  resp_29: string
  resp_30: string
  resp_31: string
  resp_32: string
  resp_33: string
  resp_34: string
  resp_35: string
  resp_36: string
  resp_37: string
  resp_38: string
  resp_39: string
  resp_40: string
  resp_41: string
  resp_42: string
  resp_43: string
  resp_44: string
  resp_45: string
  resp_46: string
  resp_47: string
  resp_48: string
  resp_49: string
  resp_50: string
  resp_51: string
  resp_52: string
  resp_53: string
  resp_54: string
  resp_55: string
  resp_56: string
  resp_57: string
  resp_58: string
  resp_59: string
  resp_60: string
  resp_61: string
  resp_62: string
  resp_63: string
  resp_64: string
  resp_65: string
  resp_66: string
  resp_67: string
  resp_68: string
  resp_69: string
  resp_70: string
  resp_71: string
  resp_72: string
  resp_73: string
  resp_74: string
  resp_75: string
  resp_76: string
  resp_77: string
  resp_78: string
  resp_79: string
  resp_80: string
  resp_81: string
  resp_82: string
  resp_83: string
  resp_84: string
  resp_85: string
  resp_86: string
  resp_87: string
  resp_88: string
  resp_89: string
  resp_90: string
  resp_91: string
  resp_92: string
  resp_93: string
  resp_94: string
  resp_95: string
  resp_96: string
  resp_97: string
  resp_98: string
  resp_99: string
  resp_100: string
  resp_101: string
  resp_102: string
  resp_103: string
  resp_104: string
  resp_105: string
  resp_106: string
  resp_107: string
  resp_108: string
  resp_109: string
  resp_110: string
  id_resp_1: string
  id_resp_2: string
  id_resp_3: string
  id_resp_4: string
  id_resp_5: string
  id_resp_6: string
  id_resp_7: string
  id_resp_8: string
  id_resp_9: string
  id_resp_10: string
  id_resp_11: string
  id_resp_12: string
  id_resp_13: string
  id_resp_14: string
  id_resp_15: string
  id_resp_16: string
  id_resp_17: string
  id_resp_18: string
  id_resp_19: string
  id_resp_20: string
  id_resp_21: string
  id_resp_22: string
  id_resp_23: string
  id_resp_24: string
  id_resp_25: string
  id_resp_26: string
  id_resp_27: string
  id_resp_28: string
  id_resp_29: string
  id_resp_30: string
  id_resp_31: string
  id_resp_32: string
  id_resp_33: string
  id_resp_34: string
  id_resp_35: string
  id_resp_36: string
  id_resp_37: string
  id_resp_38: string
  id_resp_39: string
  id_resp_40: string
  id_resp_41: string
  id_resp_42: string
  id_resp_43: string
  id_resp_44: string
  id_resp_45: string
  id_resp_46: string
  id_resp_47: string
  id_resp_48: string
  id_resp_49: string
  id_resp_50: string
  id_resp_51: string
  id_resp_52: string
  id_resp_53: string
  id_resp_54: string
  id_resp_55: string
  id_resp_56: string
  id_resp_57: string
  id_resp_58: string
  id_resp_59: string
  id_resp_60: string
  id_resp_61: string
  id_resp_62: string
  id_resp_63: string
  id_resp_64: string
  id_resp_65: string
  id_resp_66: string
  id_resp_67: string
  id_resp_68: string
  id_resp_69: string
  id_resp_70: string
  id_resp_71: string
  id_resp_72: string
  id_resp_73: string
  id_resp_74: string
  id_resp_75: string
  id_resp_76: string
  id_resp_77: string
  id_resp_78: string
  id_resp_79: string
  id_resp_80: string
  id_resp_81: string
  id_resp_82: string
  id_resp_83: string
  id_resp_84: string
  id_resp_85: string
  id_resp_86: string
  id_resp_87: string
  id_resp_88: string
  id_resp_89: string
  id_resp_90: string
  id_resp_91: string
  id_resp_92: string
  id_resp_93: string
  id_resp_94: string
  id_resp_95: string
  id_resp_96: string
  id_resp_97: string
  id_resp_98: string
  id_resp_99: string
  id_resp_100: string
  id_resp_101: string
  id_resp_102: string
  id_resp_103: string
  id_resp_104: string
  id_resp_105: string
  id_resp_106: string
  id_resp_107: string
  id_resp_108: string
  id_resp_109: string
  id_resp_110: string
  id_cod_decodificador: string
  cod_decodificador: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private view: ViewController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {
    console.log('id de tipo_formulario:',this.navParams.get('formData').tipo_formulario_id)
    console.log('id de formulario:',this.navParams.get('formData').id)
    switch(this.navParams.get('formData').tipo_formulario_id){
      case 1:
        this.tipoFormulario = 'instalacion hfc'
        this.instalacionesHfcForm = this.createInstalacionesHfcForm()
      break
      case 2:
        this.tipoFormulario = 'instalacion dth'
        this.instalacionesDthForm = this.createInstalacionesDthForm()
      break
      case 3:
        this.tipoFormulario = 'mantencion hfc'
        this.mantencionesHfcForm = this.createMantencionesHfcForm()
      break
      case 4:
        this.tipoFormulario = 'mantencion dth'
        this.mantencionesDthForm = this.createMantencionDthForm()
      break
      case 5:
        this.tipoFormulario = 'desconexion'
        this.desconexionForm = this.createDesconexionForm()
      break
      case 6:
        this.tipoFormulario = 'instalacion dth entel'
        this.instalacionesDthEntelForm = this.createInstalacionesDthEntelForm()
      break
      case 7:
        this.tipoFormulario = 'bafi entel'
        this.instalacionesDthEntelForm = this.createBafiEntelForm()
      break
      case 8:
        this.tipoFormulario = 'duo entel'
        this.instalacionesDthEntelForm = this.createDuoEntelForm()
      break
    }
  }

  // Inicializamos los Formularios

  private createInstalacionesDthForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      resp_109: [null],
      resp_110: [null],
      cod_decodificador: [null]
    })
  }

  private createMantencionesHfcForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      cod_decodificador: [null]
    })
  }

  private createInstalacionesHfcForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      cod_decodificador: [null]
    })
  }

  private createMantencionDthForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      cod_decodificador: [null]
    })
  }

  private createInstalacionesDthEntelForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      cod_decodificador: [null]
    })
  }

  private createBafiEntelForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      id_ot_servicorp: [null],
      id_folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      cod_decodificador: [null]
    })
  }

  private createDuoEntelForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      id_ot_servicorp: [null],
      id_folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null],
      resp_9: [null],
      resp_10: [null],
      resp_11: [null],
      resp_12: [null],
      resp_13: [null],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: [null],
      resp_19: [null],
      resp_20: [null],
      resp_21: [null],
      resp_22: [null],
      resp_23: [null],
      resp_24: [null],
      resp_25: [null],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: [null],
      resp_31: [null],
      resp_32: [null],
      resp_33: [null],
      resp_34: [null],
      resp_35: [null],
      resp_36: [null],
      resp_37: [null],
      resp_38: [null],
      resp_39: [null],
      resp_40: [null],
      resp_41: [null],
      resp_42: [null],
      resp_43: [null],
      resp_44: [null],
      resp_45: [null],
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
      resp_90: [null],
      resp_91: [null],
      resp_92: [null],
      resp_93: [null],
      resp_94: [null],
      resp_95: [null],
      resp_96: [null],
      resp_97: [null],
      resp_98: [null],
      cod_decodificador: [null]
    })
  }

  private createDesconexionForm(){
    return this.formBuilder.group({
      latitud: 0,
      longitud: 0,
      usuario_id: localStorage.getItem('userId'),
      token: localStorage.getItem('userToken'),
      ot_servicorp: [null],
      folio_servicio: [null],
      id_ot_servicorp: [null],
      id_folio_servicio: [null],
      resp_1: [null],
      resp_2: [null],
      resp_3: [null],
      resp_4: [null],
      resp_5: [null],
      resp_6: [null],
      resp_7: [null],
      resp_8: [null]
    })
  }

  // Fin de la Inicialización de los formularios

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Cargando Formulario'
    })
    loading.present()
    this.api.getFormQuestions(this.navParams.get('formData').id)
    .then((res:any) => {
      this.formulario = res.data
      console.table(this.formulario)
      let promise = new Promise((resolve, reject) => {
        switch(this.navParams.get('formData').tipo_formulario_id){
          case 1:
            this.mostrarFormInstalacionesHfc = true
          break
          case 2:
            this.mostrarFormInstalacionesDth = true
          break
          case 3:
            this.mostrarFormMantencionesHfc = true
          break
          case 4:
            this.mostrarFormMantencionesDth = true
          break
          case 5:
            this.mostrarFormDesconexion = true
          break
          case 6:
            this.mostrarFormInstalacionesDthEntel = true
          break
          case 7:
            this.mostrarFormBafiEntel = true
          break
          case 8:
            this.mostrarFormDuoEntel = true
          break
        }
        resolve()
      })
      promise
      .then((res:any) => {
        // aqui llenamos el formulario respectivo con las respuestas obtenidas del api
        if(this.tipoFormulario == 'instalacion hfc'){
          for(let i=0; i<108; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico se identificó con Credencial ,Nombre, Apellido'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'Vestían uniforme y correctamente ordenados'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Explicaron el detalle del trabajo antes de comenzar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Respondieron sus dudas durante la actividad ejecutada'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Efectuaron capacitación del uso de los equipos'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Quedaron todos los servicios funcionando correctamente, al termino de la actividad'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Dejaron el lugar limpio al concluir la Actividad'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Técnico explico no desenchufar  equipos de electricidad (Decos-C.M.EMTA)'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Entrega clave de acceso Wifi y personalizada a Cliente'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Capacito en el uso de control remoto del decodificador'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Fijación de Antena con (4 pernos)'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Conector LNB protegido'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Antena debidamente Firme ( Sin movimientos)'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Altura Acometida en Norma (4,5Mts)'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'La acometida es Nueva ( No reutilizada)'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'Ficha de Abonado en TAP, rotulada correctamente'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'Loop de Mantención '	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Ruteo y cableado correcto ( 40 Cms distancia entre grampas)'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Fijación de Spliters'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Tiene Pasamuros exterior'	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'Tiene Loop de Goteo Bota agua'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'Los niveles están dentro de rango'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Ruteo y grampeado correctos ( 40 cm. distancia entre grampas)'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Curva  de cableado mayor o igual a  90 grados'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Conector Armado y prensado correctamente'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Uso Conector de Compresión Claro'	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Cable PIN es Nuevo'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Conectores correctamente torqueados '	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Tiene filtro HUM en instalación de TV'	:	
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Tiene cable  HDMI en Decodificador y TV  HD'	:	
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30= this.formulario[i].id	
              break
              case	'Deja equipo modo nat (CM-Emta)'	:	
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31= this.formulario[i].id	
              break
              case	'Certifica / Cambia canal de transmisión de Wifi'	:	
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32= this.formulario[i].id	
              break
              case	'Informó Número Telefónico asignado'	:	
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33= this.formulario[i].id	
              break
              case	'Dirección Correcta'	:	
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34= this.formulario[i].id	
              break
              case	'Técnico Visito Domicilio'	:	
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35= this.formulario[i].id	
              break
              case	'HFC/DTH'	:	
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36= this.formulario[i].id	
              break
              case	'Decos Std.'	:	
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37= this.formulario[i].id	
              break
              case	'Decos H.D.'	:	
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38= this.formulario[i].id	
              break
              case	'Cantidad equipos corresponde a contrato'	:	
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39= this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40= this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41= this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42= this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43= this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44= this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45= this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46= this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47= this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48= this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49= this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50= this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51= this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52= this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53= this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54= this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55= this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56= this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57= this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58= this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59= this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60= this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61= this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62= this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63= this.formulario[i].id	
              break
              case	'Tx'	:	
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64= this.formulario[i].id	
              break
              case	'Rx'	:	
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65= this.formulario[i].id	
              break
              case	'SNR'	:	
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66= this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67= this.formulario[i].id	
              break
              case	'Se genera visita técnica por Garantia'	:	
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68= this.formulario[i].id	
              break
              case	'Se Realiza Reparación menor'	:	
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69= this.formulario[i].id	
              break
              case	'Reutiliza Instalación'	:	
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70= this.formulario[i].id	
              break
              case	'1004311 - Conectores RG-06 F a compresión'	:	
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71= this.formulario[i].id	
              break
              case	'1008635 - Cable coaxial doble malla RG-6 Blanco sin mensajero (indoor)(1)'	:	
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72= this.formulario[i].id	
              break
              case	'1004177 - Acopladores Direccional Interior 1 vía 9dB'	:	
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73= this.formulario[i].id	
              break
              case	'1004178 - Acopladores Direccional Interior 1 vía 12dB'	:	
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74= this.formulario[i].id	
              break
              case	'1004271 - Grampa Blanca Telefónica N° 7 ( pin interior )'	:	
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75= this.formulario[i].id	
              break
              case	'1004174 - Splitter 3 Vías ( 7 dB )'	:	
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76= this.formulario[i].id	
              break
              case	'1004171 - Amarra Cables Nylon 4,8 x 15,6'	:	
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77= this.formulario[i].id	
              break
              case	'1004167 - Gomas para Taps'	:	
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78= this.formulario[i].id	
              break
              case	'1004179 - Grampa RG-6 Blancas'	:	
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79= this.formulario[i].id	
              break
              case	'1004180 - Grampa RG-6 Negras'	:	
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80= this.formulario[i].id	
              break
              case	'1004812 - Bloqueador de Voltaje'	:	
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81= this.formulario[i].id	
              break
              case	'1004183 - Atenuador Fam 3'	:	
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82= this.formulario[i].id	
              break
              case	'1004184 - Atenuador Fam 6'	:	
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83= this.formulario[i].id	
              break
              case	'1004185 - Atenuador Fam 8'	:	
              this.resp_84 = this.formulario[i].respuesta	
              this.id_resp_84= this.formulario[i].id	
              break
              case	'1004186 - Atenuador Fam 10'	:	
              this.resp_85 = this.formulario[i].respuesta	
              this.id_resp_85= this.formulario[i].id	
              break
              case	'1004173 - Splitter 2 Vías ( 4 dB)'	:	
              this.resp_86 = this.formulario[i].respuesta	
              this.id_resp_86= this.formulario[i].id	
              break
              case	'1003508 - Conector RJ-45'	:	
              this.resp_87 = this.formulario[i].respuesta	
              this.id_resp_87= this.formulario[i].id	
              break
              case	'1003507 - Conector RJ-11'	:	
              this.resp_88 = this.formulario[i].respuesta	
              this.id_resp_88= this.formulario[i].id	
              break
              case	'1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO'	:	
              this.resp_89 = this.formulario[i].respuesta	
              this.id_resp_89= this.formulario[i].id	
              break
              case	'1003553 - Roseta telefónica RJ-11'	:	
              this.resp_90 = this.formulario[i].respuesta	
              this.id_resp_90= this.formulario[i].id	
              break
              case	'1004181 - Conectores Ground Block'	:	
              this.resp_91 = this.formulario[i].respuesta	
              this.id_resp_91= this.formulario[i].id	
              break
              case	'1004518 - Control Remoto caja digital'	:	
              this.resp_92 = this.formulario[i].respuesta	
              this.id_resp_92= this.formulario[i].id	
              break
              case	'1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES'	:	
              this.resp_93 = this.formulario[i].respuesta	
              this.id_resp_93= this.formulario[i].id	
              break
              case	'1004409 - Pilas alcalinas AAA'	:	
              this.resp_94 = this.formulario[i].respuesta	
              this.id_resp_94= this.formulario[i].id	
              break
              case	'1004526 - Cable Video Componente 3 Conexiones'	:	
              this.resp_95 = this.formulario[i].respuesta	
              this.id_resp_95= this.formulario[i].id	
              break
              case	'1004836 - CABLE HDMI'	:	
              this.resp_96 = this.formulario[i].respuesta	
              this.id_resp_96= this.formulario[i].id	
              break
              case	'1004233 - Cable Audio video RCA'	:	
              this.resp_97 = this.formulario[i].respuesta	
              this.id_resp_97= this.formulario[i].id	
              break
              case	'1004176 - Acopladores Direccional Interior 1 vía 6dB'	:	
              this.resp_98 = this.formulario[i].respuesta	
              this.id_resp_98= this.formulario[i].id	
              break
              case	'1004288 - LNB'	:	
              this.resp_99 = this.formulario[i].respuesta	
              this.id_resp_99= this.formulario[i].id	
              break
              case	'1008635 - Cable Coaxial Blanco'	:	
              this.resp_100 = this.formulario[i].respuesta	
              this.id_resp_100= this.formulario[i].id	
              break
              case	'1004311 - Conectores'	:	
              this.resp_101 = this.formulario[i].respuesta	
              this.id_resp_101= this.formulario[i].id	
              break
              case	'1004672 - LNB Dual'	:	
              this.resp_102 = this.formulario[i].respuesta	
              this.id_resp_102= this.formulario[i].id	
              break
              case	'1004791 - LNB QUAD'	:	
              this.resp_103 = this.formulario[i].respuesta	
              this.id_resp_103= this.formulario[i].id	
              break
              case	'1004648 - Spliter'	:	
              this.resp_104 = this.formulario[i].respuesta	
              this.id_resp_104= this.formulario[i].id	
              break
              case	'Cable Negro'	:	
              this.resp_105 = this.formulario[i].respuesta	
              this.id_resp_105= this.formulario[i].id	
              break
              case	'Cable Blanco'	:	
              this.resp_106 = this.formulario[i].respuesta	
              this.id_resp_106= this.formulario[i].id	
              break
              case	'Conectores'	:	
              this.resp_107 = this.formulario[i].respuesta	
              this.id_resp_107= this.formulario[i].id	
              break
              case	'Grampas'	:	
              this.resp_108 = this.formulario[i].respuesta	
              this.id_resp_108= this.formulario[i].id	
              break
              case	'Splitter'	:	
              this.resp_109 = this.formulario[i].respuesta	
              this.id_resp_109= this.formulario[i].id	
              break
              case	'DCS'	:	
              this.resp_110 = this.formulario[i].respuesta	
              this.id_resp_110= this.formulario[i].id	
              break
              case	'Código Decodificador'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico se identificó con Credencial, Nombre, Apellido'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'Vestían uniforme y correctamente ordenados'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Explicaron el detalle del trabajo antes de comenzar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Respondieron sus dudas durante la actividad ejecutada'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Efectuaron capacitación del uso de los equipos'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Quedaron todos los servicios funcionando correctamente, al termino de la actividad.'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Dejaron el lugar limpio al concluir la Actividad'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Técnico explico no desenchufar  equipos de electricidad (Decos-C.M.EMTA)'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Entrega clave de acceso Wifi y personalizada a Cliente'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Capacito en el uso de control remoto del decodificador'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Fijación de Antena con (4 pernos).'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Conector LNB protegido'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Antena debidamente Firme ( Sin movimientos)'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Altura Acometida en Norma (4,5Mts)'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'La acometida es Nueva ( No reutilizada)'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'Ficha de Abonado en TAP, rotulada correctamente'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'Loop de Mantención '	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Ruteo y cableado correcto ( 40 Cms distancia entre grampas)'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Fijación de Spliters'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Tiene Pasamuros exterior'	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'Tiene Loop de Goteo Bota agua'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'Los niveles están dentro de rango'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Ruteo y grampeado correctos ( 40 cm. distancia entre grampas)'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Curva  de cableado mayor o igual a  90 grados'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Conector Armado y prensado correctamente'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Uso Conector de Compresión Claro'	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Cable PIN es Nuevo'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Conectores correctamente torqueados '	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Tiene filtro Hum en Instalación de TV'	:	
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Tiene cable  HDMI en Decodificador y TV  HD'	:	
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30 = this.formulario[i].id	
              break
              case	'Deja  equipo Modo Nat ( CM-Emta)'	:	
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31 = this.formulario[i].id	
              break
              case	'Certifica / Cambia canal de transmisión de Wifi'	:	
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32 = this.formulario[i].id	
              break
              case	'Informó Número Telefónico asignado'	:	
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33 = this.formulario[i].id	
              break
              case	'Dirección Correcta'	:	
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34 = this.formulario[i].id	
              break
              case	'Técnico Visito Domicilio'	:	
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35 = this.formulario[i].id	
              break
              case	'HFC/DTH'	:	
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36 = this.formulario[i].id	
              break
              case	'Decos Std.'	:	
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37 = this.formulario[i].id	
              break
              case	'Decos H.D.'	:	
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38 = this.formulario[i].id	
              break
              case	'Cantidad equipos corresponde a contrato'	:	
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63 = this.formulario[i].id	
              break
              case	'Tx'	:	
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64 = this.formulario[i].id	
              break
              case	'Rx'	:	
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65 = this.formulario[i].id	
              break
              case	'SNR'	:	
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66 = this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67 = this.formulario[i].id	
              break
              case	'Se genera visita técnica por Garantia'	:	
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68 = this.formulario[i].id	
              break
              case	'Se Realiza Reparación menor'	:	
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69 = this.formulario[i].id	
              break
              case	'Reutiliza Instalación'	:	
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70 = this.formulario[i].id	
              break
              case	'1004311 - Conectores RG-06 F a compresión'	:	
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71 = this.formulario[i].id	
              break
              case	'1008635 - Cable coaxial doble malla RG-6 Blanco sin mensajero (indoor)(1)'	:	
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72 = this.formulario[i].id	
              break
              case	'1004177 - Acopladores Direccional Interior 1 vía 9dB'	:	
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73 = this.formulario[i].id	
              break
              case	'1004178 - Acopladores Direccional Interior 1 vía 12dB'	:	
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74 = this.formulario[i].id	
              break
              case	'1004271 - Grampa Blanca Telefónica N° 7 ( pin interior )'	:	
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75 = this.formulario[i].id	
              break
              case	'1004174 - Splitter 3 Vías ( 7 dB )'	:	
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76 = this.formulario[i].id	
              break
              case	'1004171 - Amarra Cables Nylon 4,8 x 15,6'	:	
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77 = this.formulario[i].id	
              break
              case	'1004167 - Gomas para Taps'	:	
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78 = this.formulario[i].id	
              break
              case	'1004179 - Grampa RG-6 Blancas'	:	
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79 = this.formulario[i].id	
              break
              case	'1004180 - Grampa RG-6 Negras'	:	
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80 = this.formulario[i].id	
              break
              case	'1004812 - Bloqueador de Voltaje'	:	
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81 = this.formulario[i].id	
              break
              case	'1004183 - Atenuador Fam 3'	:	
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82 = this.formulario[i].id	
              break
              case	'1004184 - Atenuador Fam 6'	:	
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83 = this.formulario[i].id	
              break
              case	'1004185 - Atenuador Fam 8'	:	
              this.resp_84 = this.formulario[i].respuesta	
              this.id_resp_84 = this.formulario[i].id	
              break
              case	'1004186 - Atenuador Fam 10'	:	
              this.resp_85 = this.formulario[i].respuesta	
              this.id_resp_85 = this.formulario[i].id	
              break
              case	'1004173 - Splitter 2 Vías ( 4 dB)'	:	
              this.resp_86 = this.formulario[i].respuesta	
              this.id_resp_86 = this.formulario[i].id	
              break
              case	'1003508 - Conector RJ-45'	:	
              this.resp_87 = this.formulario[i].respuesta	
              this.id_resp_87 = this.formulario[i].id	
              break
              case	'1003507 - Conector RJ-11'	:	
              this.resp_88 = this.formulario[i].respuesta	
              this.id_resp_88 = this.formulario[i].id	
              break
              case	'1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO'	:	
              this.resp_89 = this.formulario[i].respuesta	
              this.id_resp_89 = this.formulario[i].id	
              break
              case	'1003553 - Roseta telefónica RJ-11'	:	
              this.resp_90 = this.formulario[i].respuesta	
              this.id_resp_90 = this.formulario[i].id	
              break
              case	'1004181 - Conectores Ground Block'	:	
              this.resp_91 = this.formulario[i].respuesta	
              this.id_resp_91 = this.formulario[i].id	
              break
              case	'1004518 - Control Remoto caja digital'	:	
              this.resp_92 = this.formulario[i].respuesta	
              this.id_resp_92 = this.formulario[i].id	
              break
              case	'1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES'	:	
              this.resp_93 = this.formulario[i].respuesta	
              this.id_resp_93 = this.formulario[i].id	
              break
              case	'1004409 - Pilas alcalinas AAA'	:	
              this.resp_94 = this.formulario[i].respuesta	
              this.id_resp_94 = this.formulario[i].id	
              break
              case	'1004526 - Cable Video Componente 3 Conexiones'	:	
              this.resp_95 = this.formulario[i].respuesta	
              this.id_resp_95 = this.formulario[i].id	
              break
              case	'1004836 - CABLE HDMI'	:	
              this.resp_96 = this.formulario[i].respuesta	
              this.id_resp_96 = this.formulario[i].id	
              break
              case	'1004233 - Cable Audio video RCA'	:	
              this.resp_97 = this.formulario[i].respuesta	
              this.id_resp_97 = this.formulario[i].id	
              break
              case	'1004176 - Acopladores Direccional Interior 1 vía 6dB'	:	
              this.resp_98 = this.formulario[i].respuesta	
              this.id_resp_98 = this.formulario[i].id	
              break
              case	'1004288 - LNB'	:	
              this.resp_99 = this.formulario[i].respuesta	
              this.id_resp_99 = this.formulario[i].id	
              break
              case	'1008635 - Cable Coaxial Blanco'	:	
              this.resp_100 = this.formulario[i].respuesta	
              this.id_resp_100 = this.formulario[i].id	
              break
              case	'1004311 - Conectores'	:	
              this.resp_101 = this.formulario[i].respuesta	
              this.id_resp_101 = this.formulario[i].id	
              break
              case	'1004672 - LNB Dual'	:	
              this.resp_102 = this.formulario[i].respuesta	
              this.id_resp_102 = this.formulario[i].id	
              break
              case	'1004791 - LNB QUAD'	:	
              this.resp_103 = this.formulario[i].respuesta	
              this.id_resp_103 = this.formulario[i].id	
              break
              case	'1004648 - Spliter'	:	
              this.resp_104 = this.formulario[i].respuesta	
              this.id_resp_104 = this.formulario[i].id	
              break
              case	'Cable Negro'	:	
              this.resp_105 = this.formulario[i].respuesta	
              this.id_resp_105 = this.formulario[i].id	
              break
              case	'Cable Blanco'	:	
              this.resp_106 = this.formulario[i].respuesta	
              this.id_resp_106 = this.formulario[i].id	
              break
              case	'Conectores'	:	
              this.resp_107 = this.formulario[i].respuesta	
              this.id_resp_107 = this.formulario[i].id	
              break
              case	'Grampas'	:	
              this.resp_108 = this.formulario[i].respuesta	
              this.id_resp_108 = this.formulario[i].id	
              break
              case	'Splitter'	:	
              this.resp_109 = this.formulario[i].respuesta	
              this.id_resp_109 = this.formulario[i].id	
              break
              case	'DCS'	:	
              this.resp_110 = this.formulario[i].respuesta	
              this.id_resp_110 = this.formulario[i].id	
              break
              case	'Código Decodificador'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'mantencion hfc'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico se identificó con Credencial ,Nombre, Apellido'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'Vestían uniforme y correctamente ordenados'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Explicaron el detalle del trabajo antes de comenzar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Respondieron sus dudas durante la actividad ejecutada'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Dejaron copia de orden de trabajo'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Efectuaron capacitación del uso de los equipos'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Quedaron todos los servicios funcionando correctamente, al termino de la actividad.'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Dejaron el lugar limpio al concluir la Actividad'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Entrega clave de acceso Wifi y personalizada a Cliente'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Técnico Certifica Fijación de Antena ( 4 Pernos)'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Técnico deja Antena debidamente Firme ( Sin movimiento)'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Técnico  Cambia Acometida dañada'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Ground Block'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Técnico Fija Spliter'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'Técnico Instala bloqueador de voltaje (Filtro HUM)'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Conectores'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'Técnico deja Conectores correctamente torqueados '	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Explica Importancia de Instalar o Reemplazar el Cableado por uno nuevo'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Explica como conectarse a la Red Wi - Fi'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Técnico explico no desenchufar  equipos de electricidad (Decos-C.M.EMTA)'	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Cableado Interior'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Conectores'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Cable Pin'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Roseta telefonica'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Equipo telefonico'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Técnico deja Conectores correctamente torqueados '	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Decodificador/Cmo MTA'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia canal de transmision de Wifi'	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Técnico Certifica Niveles Operaciones (CM-MTA-DECO)'	:	
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia control remoto'	:	
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Pasivos Spliter- Dc'	:	
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31 = this.formulario[i].id	
              break
              case	'Dirección Correcta'	:	
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32 = this.formulario[i].id	
              break
              case	'Técnico Visito Domicilio'	:	
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33 = this.formulario[i].id	
              break
              case	'HFC/DTH'	:	
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34 = this.formulario[i].id	
              break
              case	'Decos Std.'	:	
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35 = this.formulario[i].id	
              break
              case	'Decos H.D.'	:	
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36 = this.formulario[i].id	
              break
              case	'Cantidad equipos corresponde a contrato'	:	
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61 = this.formulario[i].id	
              break
              case	'Tx'	:	
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62 = this.formulario[i].id	
              break
              case	'Rx'	:	
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63 = this.formulario[i].id	
              break
              case	'SNR'	:	
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64 = this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65 = this.formulario[i].id	
              break
              case	'Se genera visita técnica por Garantia'	:	
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66 = this.formulario[i].id	
              break
              case	'Se Realiza Reparación menor'	:	
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67 = this.formulario[i].id	
              break
              case	'Reutiliza Instalación'	:	
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68 = this.formulario[i].id	
              break
              case	'1004311 - Conectores RG-06 F a compresión'	:	
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69 = this.formulario[i].id	
              break
              case	'1008635 - Cable coaxial doble malla RG-6 Blanco sin mensajero (indoor)(1)'	:	
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70 = this.formulario[i].id	
              break
              case	'1004177 - Acopladores Direccional Interior 1 vía 9dB'	:	
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71 = this.formulario[i].id	
              break
              case	'1004178 - Acopladores Direccional Interior 1 vía 12dB'	:	
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72 = this.formulario[i].id	
              break
              case	'1004271 - Grampa Blanca Telefónica N° 7 ( pin interior )'	:	
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73 = this.formulario[i].id	
              break
              case	'1004174 - Splitter 3 Vías ( 7 dB )'	:	
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74 = this.formulario[i].id	
              break
              case	'1004171 - Amarra Cables Nylon 4,8 x 15,6'	:	
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75 = this.formulario[i].id	
              break
              case	'1004167 - Gomas para Taps'	:	
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76 = this.formulario[i].id	
              break
              case	'1004179 - Grampa RG-6 Blancas'	:	
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77 = this.formulario[i].id	
              break
              case	'1004180 - Grampa RG-6 Negras'	:	
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78 = this.formulario[i].id	
              break
              case	'1004812 - Bloqueador de Voltaje'	:	
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79 = this.formulario[i].id	
              break
              case	'1004183 - Atenuador Fam 3'	:	
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80 = this.formulario[i].id	
              break
              case	'1004184 - Atenuador Fam 6'	:	
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81 = this.formulario[i].id	
              break
              case	'1004185 - Atenuador Fam 8'	:	
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82 = this.formulario[i].id	
              break
              case	'1004186 - Atenuador Fam 10'	:	
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83 = this.formulario[i].id	
              break
              case	'1004173 - Splitter 2 Vías ( 4 dB)'	:	
              this.resp_84 = this.formulario[i].respuesta	
              this.id_resp_84 = this.formulario[i].id	
              break
              case	'1003508 - Conector RJ-45'	:	
              this.resp_85 = this.formulario[i].respuesta	
              this.id_resp_85 = this.formulario[i].id	
              break
              case	'1003507 - Conector RJ-11'	:	
              this.resp_86 = this.formulario[i].respuesta	
              this.id_resp_86 = this.formulario[i].id	
              break
              case	'1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO'	:	
              this.resp_87 = this.formulario[i].respuesta	
              this.id_resp_87 = this.formulario[i].id	
              break
              case	'1003553 - Roseta telefónica RJ-11'	:	
              this.resp_88 = this.formulario[i].respuesta	
              this.id_resp_88 = this.formulario[i].id	
              break
              case	'1004181 - Conectores Ground Block'	:	
              this.resp_89 = this.formulario[i].respuesta	
              this.id_resp_89 = this.formulario[i].id	
              break
              case	'1004518 - Control Remoto caja digital'	:	
              this.resp_90 = this.formulario[i].respuesta	
              this.id_resp_90 = this.formulario[i].id	
              break
              case	'1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES'	:	
              this.resp_91 = this.formulario[i].respuesta	
              this.id_resp_91 = this.formulario[i].id	
              break
              case	'1004409 - Pilas alcalinas AAA'	:	
              this.resp_92 = this.formulario[i].respuesta	
              this.id_resp_92 = this.formulario[i].id	
              break
              case	'1004526 - Cable Video Componente 3 Conexiones'	:	
              this.resp_93 = this.formulario[i].respuesta	
              this.id_resp_93 = this.formulario[i].id	
              break
              case	'1004836 - CABLE HDMI'	:	
              this.resp_94 = this.formulario[i].respuesta	
              this.id_resp_94 = this.formulario[i].id	
              break
              case	'1004233 - Cable Audio video RCA'	:	
              this.resp_95 = this.formulario[i].respuesta	
              this.id_resp_95 = this.formulario[i].id	
              break
              case	'1004176 - Acopladores Direccional Interior 1 vía 6dB'	:	
              this.resp_96 = this.formulario[i].respuesta	
              this.id_resp_96 = this.formulario[i].id	
              break
              case	'1004288 - LNB'	:	
              this.resp_97 = this.formulario[i].respuesta	
              this.id_resp_97 = this.formulario[i].id	
              break
              case	'1008635 - Cable Coaxial Blanco'	:	
              this.resp_98 = this.formulario[i].respuesta	
              this.id_resp_98 = this.formulario[i].id	
              break
              case	'1004311 - Conectores'	:	
              this.resp_99 = this.formulario[i].respuesta	
              this.id_resp_99 = this.formulario[i].id	
              break
              case	'1004672 - LNB Dual'	:	
              this.resp_100 = this.formulario[i].respuesta	
              this.id_resp_100 = this.formulario[i].id	
              break
              case	'1004791 - LNB QUAD'	:	
              this.resp_101 = this.formulario[i].respuesta	
              this.id_resp_101 = this.formulario[i].id	
              break
              case	'1004648 - Spliter'	:	
              this.resp_102 = this.formulario[i].respuesta	
              this.id_resp_102 = this.formulario[i].id	
              break
              case	'Cable Negro'	:	
              this.resp_103 = this.formulario[i].respuesta	
              this.id_resp_103 = this.formulario[i].id	
              break
              case	'Cable Blanco'	:	
              this.resp_104 = this.formulario[i].respuesta	
              this.id_resp_104 = this.formulario[i].id	
              break
              case	'Conectores'	:	
              this.resp_105 = this.formulario[i].respuesta	
              this.id_resp_105 = this.formulario[i].id	
              break
              case	'Grampas'	:	
              this.resp_106 = this.formulario[i].respuesta	
              this.id_resp_106 = this.formulario[i].id	
              break
              case	'Splitter'	:	
              this.resp_107 = this.formulario[i].respuesta	
              this.id_resp_107 = this.formulario[i].id	
              break
              case	'Dcs'	:	
              this.resp_108 = this.formulario[i].respuesta	
              this.id_resp_108 = this.formulario[i].id	
              break
              case	'Código Decodificador'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'mantencion dth'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico se identificó con Credencial ,Nombre, Apellido'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'Vestían uniforme y correctamente ordenados'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Explicaron el detalle del trabajo antes de comenzar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Respondieron sus dudas durante la actividad ejecutada'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Dejaron copia de orden de trabajo'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Efectuaron capacitación del uso de los equipos'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Explica Importancia de Instalar o Reemplazar el Cableado por uno nuevo'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Explica como conectarse a la Red Wi - Fi'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Técnico explico no desenchufar  equipos de electricidad (Decos-C.M.EMTA)'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Quedaron todos los servicios funcionando correctamente, al termino de la actividad.'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Dejaron el lugar limpio al concluir la Actividad'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Entrega clave de acceso Wifi y personalizada a Cliente'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Técnico Certifica Fijación de Antena ( 4 Pernos)'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Técnico deja Antena debidamente Firme ( Sin movimiento)'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'Técnico  Cambia Acometida dañada'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Ground Block'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'Técnico Fija Spliter'	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Técnico Instala bloqueador de voltaje (Filtro HUM)'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Conectores'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Técnico deja Conectores correctamente torqueados '	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Cableado Interior'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Conectores'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Cable Pin'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Roseta telefonica'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Equipo telefonico'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Técnico deja Conectores correctamente torqueados '	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Decodificador/Cmo MTA'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia canal de transmision de Wifi'	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Técnico Certifica Niveles Operaciones (CM-MTA-DECO)'	:	
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia control remoto'	:	
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30 = this.formulario[i].id	
              break
              case	'Técnico Certifica o Cambia Pasivos Spliter- Dc'	:	
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31 = this.formulario[i].id	
              break
              case	'Dirección Correcta'	:	
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32 = this.formulario[i].id	
              break
              case	'Técnico Visito Domicilio'	:	
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33 = this.formulario[i].id	
              break
              case	'HFC/DTH'	:	
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34 = this.formulario[i].id	
              break
              case	'Decos Std.'	:	
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35 = this.formulario[i].id	
              break
              case	'Decos H.D.'	:	
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36 = this.formulario[i].id	
              break
              case	'Cantidad equipos corresponde a contrato'	:	
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55 = this.formulario[i].id	
              break
              case	'TP (12092) N. Señal'	:	
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56 = this.formulario[i].id	
              break
              case	'TP (12092) N. Calidad'	:	
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57 = this.formulario[i].id	
              break
              case	'TP (12092) C/N'	:	
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58 = this.formulario[i].id	
              break
              case	'TP (12172) N. Señal'	:	
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59 = this.formulario[i].id	
              break
              case	'TP (12172) N. Calidad'	:	
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60 = this.formulario[i].id	
              break
              case	'TP (12172) C/N'	:	
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61 = this.formulario[i].id	
              break
              case	'Tx'	:	
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62 = this.formulario[i].id	
              break
              case	'Rx'	:	
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63 = this.formulario[i].id	
              break
              case	'SNR'	:	
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64 = this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65 = this.formulario[i].id	
              break
              case	'Se genera visita técnica por Garantia'	:	
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66 = this.formulario[i].id	
              break
              case	'Se Realiza Reparación menor'	:	
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67 = this.formulario[i].id	
              break
              case	'Reutiliza Instalación'	:	
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68 = this.formulario[i].id	
              break
              case	'1004311 - Conectores RG-06 F a compresión'	:	
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69 = this.formulario[i].id	
              break
              case	'1008635 - Cable coaxial doble malla RG-6 Blanco sin mensajero (indoor)(1)'	:	
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70 = this.formulario[i].id	
              break
              case	'1004177 - Acopladores Direccional Interior 1 vía 9dB'	:	
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71 = this.formulario[i].id	
              break
              case	'1004178 - Acopladores Direccional Interior 1 vía 12dB'	:	
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72 = this.formulario[i].id	
              break
              case	'1004271 - Grampa Blanca Telefónica N° 7 ( pin interior )'	:	
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73 = this.formulario[i].id	
              break
              case	'1004174 - Splitter 3 Vías ( 7 dB )'	:	
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74 = this.formulario[i].id	
              break
              case	'1004171 - Amarra Cables Nylon 4,8 x 15,6'	:	
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75 = this.formulario[i].id	
              break
              case	'1004167 - Gomas para Taps'	:	
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76 = this.formulario[i].id	
              break
              case	'1004179 - Grampa RG-6 Blancas'	:	
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77 = this.formulario[i].id	
              break
              case	'1004180 - Grampa RG-6 Negras'	:	
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78 = this.formulario[i].id	
              break
              case	'1004812 - Bloqueador de Voltaje'	:	
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79 = this.formulario[i].id	
              break
              case	'1004183 - Atenuador Fam 3'	:	
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80 = this.formulario[i].id	
              break
              case	'1004184 - Atenuador Fam 6'	:	
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81 = this.formulario[i].id	
              break
              case	'1004185 - Atenuador Fam 8'	:	
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82 = this.formulario[i].id	
              break
              case	'1004186 - Atenuador Fam 10'	:	
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83 = this.formulario[i].id	
              break
              case	'1004173 - Splitter 2 Vías ( 4 dB)'	:	
              this.resp_84 = this.formulario[i].respuesta	
              this.id_resp_84 = this.formulario[i].id	
              break
              case	'1003508 - Conector RJ-45'	:	
              this.resp_85 = this.formulario[i].respuesta	
              this.id_resp_85 = this.formulario[i].id	
              break
              case	'1003507 - Conector RJ-11'	:	
              this.resp_86 = this.formulario[i].respuesta	
              this.id_resp_86 = this.formulario[i].id	
              break
              case	'1004270 - FICHA ABONADO (MARCA ACOMETIDA) ROJO'	:	
              this.resp_87 = this.formulario[i].respuesta	
              this.id_resp_87 = this.formulario[i].id	
              break
              case	'1003553 - Roseta telefónica RJ-11'	:	
              this.resp_88 = this.formulario[i].respuesta	
              this.id_resp_88 = this.formulario[i].id	
              break
              case	'1004181 - Conectores Ground Block'	:	
              this.resp_89 = this.formulario[i].respuesta	
              this.id_resp_89 = this.formulario[i].id	
              break
              case	'1004518 - Control Remoto caja digital'	:	
              this.resp_90 = this.formulario[i].respuesta	
              this.id_resp_90 = this.formulario[i].id	
              break
              case	'1008608 - CABLE TELEFONICO PLANO 4 CONDUCTORES'	:	
              this.resp_91 = this.formulario[i].respuesta	
              this.id_resp_91 = this.formulario[i].id	
              break
              case	'1004409 - Pilas alcalinas AAA'	:	
              this.resp_92 = this.formulario[i].respuesta	
              this.id_resp_92 = this.formulario[i].id	
              break
              case	'1004526 - Cable Video Componente 3 Conexiones'	:	
              this.resp_93 = this.formulario[i].respuesta	
              this.id_resp_93 = this.formulario[i].id	
              break
              case	'1004836 - CABLE HDMI'	:	
              this.resp_94 = this.formulario[i].respuesta	
              this.id_resp_94 = this.formulario[i].id	
              break
              case	'1004233 - Cable Audio video RCA'	:	
              this.resp_95 = this.formulario[i].respuesta	
              this.id_resp_95 = this.formulario[i].id	
              break
              case	'1004176 - Acopladores Direccional Interior 1 vía 6dB'	:	
              this.resp_96 = this.formulario[i].respuesta	
              this.id_resp_96 = this.formulario[i].id	
              break
              case	'1004288 - LNB'	:	
              this.resp_97 = this.formulario[i].respuesta	
              this.id_resp_97 = this.formulario[i].id	
              break
              case	'1008635 - Cable Coaxial Blanco'	:	
              this.resp_98 = this.formulario[i].respuesta	
              this.id_resp_98 = this.formulario[i].id	
              break
              case	'1004311 - Conectores'	:	
              this.resp_99 = this.formulario[i].respuesta	
              this.id_resp_99 = this.formulario[i].id	
              break
              case	'1004672 - LNB Dual'	:	
              this.resp_100 = this.formulario[i].respuesta	
              this.id_resp_100 = this.formulario[i].id	
              break
              case	'1004791 - LNB QUAD'	:	
              this.resp_101 = this.formulario[i].respuesta	
              this.id_resp_101 = this.formulario[i].id	
              break
              case	'1004648 - Spliter'	:	
              this.resp_102 = this.formulario[i].respuesta	
              this.id_resp_102 = this.formulario[i].id	
              break
              case	'Cable Negro'	:	
              this.resp_103 = this.formulario[i].respuesta	
              this.id_resp_103 = this.formulario[i].id	
              break
              case	'Cable Blanco'	:	
              this.resp_104 = this.formulario[i].respuesta	
              this.id_resp_104 = this.formulario[i].id	
              break
              case	'Conectores'	:	
              this.resp_105 = this.formulario[i].respuesta	
              this.id_resp_105 = this.formulario[i].id	
              break
              case	'Grampas'	:	
              this.resp_106 = this.formulario[i].respuesta	
              this.id_resp_106 = this.formulario[i].id	
              break
              case	'Spliter'	:	
              this.resp_107 = this.formulario[i].respuesta	
              this.id_resp_107 = this.formulario[i].id	
              break
              case	'Dcs'	:	
              this.resp_108 = this.formulario[i].respuesta	
              this.id_resp_108 = this.formulario[i].id	
              break
              case	'Código Decodificador'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'desconexion'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico corta acometida'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'Técnico retira acometida'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Desconexión OK'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Cliente activo'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Certificador desconecta'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Se corta ilegal'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'No permiten realizar corte'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'OBSERVACIONES'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth entel'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico fue amable'	:
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'La presentación del técnico era la correcta'	:
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Técnico informó el trabajo a realizar'	:
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Técnico capacitó en el uso de los equipos'	:
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Usó antena Entel'	:
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Correcta ubicación de antena Entel'	:
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Correcta fijación de antena Entel'	:
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Utilizó cables y materiales de Entel'	:
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Correcta instalación LNB Entel'	:
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Instalación de amarras plásticas'	:
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado exterior'	:
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Loop mantención'	:
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Fijación de multiswitch Entel'	:
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Posee pasamuros exterior'	:
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'Posee pasamuros interior'	:
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'En las esquinas de los muros los ángulos de los cables (ángulo de curvatura) está según norma'	:
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'Usó cableado Entel'	:
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado interior'	:
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Fijación de los cables de Entel'	:
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Conectores Entel prensados correctamente'	:
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'El o los STB se encuentran bien ubicados según norma'	:
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'El o los STB están funcionando correctamente'	:
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 1 STB'	:
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 2 STB'	:
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 3 STB'	:
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Señal pixelada'	:
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Auditor solicita visita técnica'	:
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Motivo de la baja'	:
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Cantidad decos según plan'	:
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Cantidad decos existentes en domicilio'	:
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30 = this.formulario[i].id	
              break
              case	'Cantidad multiswitch'	:
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31 = this.formulario[i].id	
              break
              case	'Tamaño antena'	:
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Principal'	:
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Principal'	:
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Principal'	:
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Principal'	:
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Principal'	:
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Principal'	:
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Principal'	:
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Principal'	:
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Principal'	:
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Principal'	:
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Principal'	:
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Princpal'	:
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Principal'	:
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Segundo'	:
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Segundo'	:
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Segundo'	:
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Segundo'	:
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Segundo'	:
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Segundo'	:
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Segundo'	:
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Segundo'	:
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Segundo'	:
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Segundo'	:
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Segundo'	:
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Segundo'	:
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Segundo'	:
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Tercero'	:
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Tercero'	:
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Tercero'	:
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Tercero'	:
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Tercero'	:
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Tercero'	:
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Tercero'	:
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Tercero'	:
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Tercero'	:
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Tercero'	:
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Tercero'	:
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Tercero'	:
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Tercero'	:
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71 = this.formulario[i].id	
              break
              case	'Observaciones'	:
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72 = this.formulario[i].id	
              break
              case	'Reutiliza material con autorización cliente'	:
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73 = this.formulario[i].id	
              break
              case	'Se realiza reparación menor'	:
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74 = this.formulario[i].id	
              break
              case	'Soluciones'	:
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75 = this.formulario[i].id	
              break
              case	'Cable Entel utilizado'	:
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76 = this.formulario[i].id	
              break
              case	'Conectores Entel prensados correctamente'	:
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77 = this.formulario[i].id	
              break
              case	'Amarras'	:
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78 = this.formulario[i].id	
              break
              case	'Pasamuros utilizados'	:
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79 = this.formulario[i].id	
              break
              case	'Tirafondos instalados'	:
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80 = this.formulario[i].id	
              break
              case	'Voltaje Fase Neutro'	:
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81 = this.formulario[i].id	
              break
              case	'Voltaje Fase Tierra'	:
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82 = this.formulario[i].id	
              break
              case	'Voltaje Neutro Tierra'	:
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83 = this.formulario[i].id	
              break
              case	'Código Decodificador'	:
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'bafi entel'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'OT SERVICORP'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'FOLIO DE SERVICIO'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico fue amable'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'La presentación del técnico era la correcta'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Técnico informó el trabajo a realizar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Técnico capacitó en el uso de los equipos'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Correcta ubicación de dispositivo ODU'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Correcta fijación de mástil de dispositivo ODU'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Correcta fijación de pasador que une dispositivo ODU al mástil'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Inclinación de mástil se encuentra entre -15º a 15º'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'ODU sellado con tapón correctamente'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Color VERDE de luz de dispositivo OUTDOOR'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Deja loop de mantención en ODU'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Utiliza pasamuros exterior'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Posee pasamuros interior'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado interior'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'Conectores RJ45 están prensados correctamente'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'IDU funcionando correctamente'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'IDU instalada donde indicó cliente'	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'IDU conectada a SmartTV'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Valor del parámetro RSPR(dBm)'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Valor del parámetro SINR(dB)'	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'Velocidad de navegación de subida'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'Velocidad de navegación de Bajada'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Utiliza material con autorización cliente'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Se realiza reparación menor'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Soluciones'	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'Código ODU'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Visita técnica'	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Motivo de la baja'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }else if(this.tipoFormulario == 'duo entel'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case	'FOLIO DE SERVICIO'	:	
              this.ot_servicorp = this.formulario[i].respuesta	
              this.id_ot_servicorp = this.formulario[i].id	
              break
              case	'OT SERVICORP'	:	
              this.folio_servicio = this.formulario[i].respuesta	
              this.id_folio_servicio = this.formulario[i].id	
              break
              case	'Técnico fue amable'	:	
              this.resp_1 = this.formulario[i].respuesta	
              this.id_resp_1 = this.formulario[i].id	
              break
              case	'La presentación del técnico era la correcta'	:	
              this.resp_2 = this.formulario[i].respuesta	
              this.id_resp_2 = this.formulario[i].id	
              break
              case	'Técnico informó el trabajo a realizar'	:	
              this.resp_3 = this.formulario[i].respuesta	
              this.id_resp_3 = this.formulario[i].id	
              break
              case	'Técnico capacitó en el uso de los equipos'	:	
              this.resp_4 = this.formulario[i].respuesta	
              this.id_resp_4 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado exterior'	:	
              this.resp_5 = this.formulario[i].respuesta	
              this.id_resp_5 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado interior'	:	
              this.resp_6 = this.formulario[i].respuesta	
              this.id_resp_6 = this.formulario[i].id	
              break
              case	'Usó antena Entel'	:	
              this.resp_7 = this.formulario[i].respuesta	
              this.id_resp_7 = this.formulario[i].id	
              break
              case	'Correcta ubicación de antena Entel'	:	
              this.resp_8 = this.formulario[i].respuesta	
              this.id_resp_8 = this.formulario[i].id	
              break
              case	'Correcta fijación de antena Entel'	:	
              this.resp_9 = this.formulario[i].respuesta	
              this.id_resp_9 = this.formulario[i].id	
              break
              case	'Utilizó cables y materiales de Entel'	:	
              this.resp_10 = this.formulario[i].respuesta	
              this.id_resp_10 = this.formulario[i].id	
              break
              case	'Correcta instalación LNB Entel'	:	
              this.resp_11 = this.formulario[i].respuesta	
              this.id_resp_11 = this.formulario[i].id	
              break
              case	'Instalación de amarras plásticas'	:	
              this.resp_12 = this.formulario[i].respuesta	
              this.id_resp_12 = this.formulario[i].id	
              break
              case	'Ruteo y grapeado interior'	:	
              this.resp_13 = this.formulario[i].respuesta	
              this.id_resp_13 = this.formulario[i].id	
              break
              case	'Loop mantención'	:	
              this.resp_14 = this.formulario[i].respuesta	
              this.id_resp_14 = this.formulario[i].id	
              break
              case	'Fijación de multiswitch Entel'	:	
              this.resp_15 = this.formulario[i].respuesta	
              this.id_resp_15 = this.formulario[i].id	
              break
              case	'Posee pasamuros interior'	:	
              this.resp_16 = this.formulario[i].respuesta	
              this.id_resp_16 = this.formulario[i].id	
              break
              case	'En las esquinas de los muros los ángulos de los cables (ángulo de curvatura) está según norma'	:	
              this.resp_17 = this.formulario[i].respuesta	
              this.id_resp_17 = this.formulario[i].id	
              break
              case	'Usó cableado Entel'	:	
              this.resp_18 = this.formulario[i].respuesta	
              this.id_resp_18 = this.formulario[i].id	
              break
              case	'Fijación de los cables de Entel'	:	
              this.resp_19 = this.formulario[i].respuesta	
              this.id_resp_19 = this.formulario[i].id	
              break
              case	'Conectores Entel prensados correctamente'	:	
              this.resp_20 = this.formulario[i].respuesta	
              this.id_resp_20 = this.formulario[i].id	
              break
              case	'El o los STB se encuentran bien ubicados según norma'	:	
              this.resp_21 = this.formulario[i].respuesta	
              this.id_resp_21 = this.formulario[i].id	
              break
              case	'El o los STB están funcionando correctamente'	:	
              this.resp_22 = this.formulario[i].respuesta	
              this.id_resp_22 = this.formulario[i].id	
              break
              case	'Correcta ubicación de dispositivo ODU'	:	
              this.resp_23 = this.formulario[i].respuesta	
              this.id_resp_23 = this.formulario[i].id	
              break
              case	'Correcta fijación de mástil de dispositivo ODU'	:	
              this.resp_24 = this.formulario[i].respuesta	
              this.id_resp_24 = this.formulario[i].id	
              break
              case	'Correcta fijación de pasador que une dispositivo ODU al mástil'	:	
              this.resp_25 = this.formulario[i].respuesta	
              this.id_resp_25 = this.formulario[i].id	
              break
              case	'Inclinación de mástil se encuentra entre -15º a 15º'	:	
              this.resp_26 = this.formulario[i].respuesta	
              this.id_resp_26 = this.formulario[i].id	
              break
              case	'ODU sellado con tapón correctamente'	:	
              this.resp_27 = this.formulario[i].respuesta	
              this.id_resp_27 = this.formulario[i].id	
              break
              case	'Color VERDE de luz de dispositivo OUTDOOR'	:	
              this.resp_28 = this.formulario[i].respuesta	
              this.id_resp_28 = this.formulario[i].id	
              break
              case	'Deja loop de mantención en ODU'	:	
              this.resp_29 = this.formulario[i].respuesta	
              this.id_resp_29 = this.formulario[i].id	
              break
              case	'Utiliza pasamuros exterior'	:	
              this.resp_30 = this.formulario[i].respuesta	
              this.id_resp_30 = this.formulario[i].id	
              break
              case	'Conectores RJ45 están prensados correctamente'	:	
              this.resp_31 = this.formulario[i].respuesta	
              this.id_resp_31 = this.formulario[i].id	
              break
              case	'IDU funcionando correctamente'	:	
              this.resp_32 = this.formulario[i].respuesta	
              this.id_resp_32 = this.formulario[i].id	
              break
              case	'IDU instalada donde indicó cliente'	:	
              this.resp_33 = this.formulario[i].respuesta	
              this.id_resp_33 = this.formulario[i].id	
              break
              case	'IDU conectada a SmartTV'	:	
              this.resp_34 = this.formulario[i].respuesta	
              this.id_resp_34 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 1 STB'	:	
              this.resp_35 = this.formulario[i].respuesta	
              this.id_resp_35 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 2 STB'	:	
              this.resp_36 = this.formulario[i].respuesta	
              this.id_resp_36 = this.formulario[i].id	
              break
              case	'Buen nivel de señal 3 STB'	:	
              this.resp_37 = this.formulario[i].respuesta	
              this.id_resp_37 = this.formulario[i].id	
              break
              case	'Señal pixelada'	:	
              this.resp_38 = this.formulario[i].respuesta	
              this.id_resp_38 = this.formulario[i].id	
              break
              case	'Auditor solicita visita técnica'	:	
              this.resp_39 = this.formulario[i].respuesta	
              this.id_resp_39 = this.formulario[i].id	
              break
              case	'Motivo de la baja'	:	
              this.resp_40 = this.formulario[i].respuesta	
              this.id_resp_40 = this.formulario[i].id	
              break
              case	'Cantidad decos según plan'	:	
              this.resp_41 = this.formulario[i].respuesta	
              this.id_resp_41 = this.formulario[i].id	
              break
              case	'Cantidad multiswitch'	:	
              this.resp_42 = this.formulario[i].respuesta	
              this.id_resp_42 = this.formulario[i].id	
              break
              case	'Tamaño antena'	:	
              this.resp_43 = this.formulario[i].respuesta	
              this.id_resp_43 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Principal'	:	
              this.resp_44 = this.formulario[i].respuesta	
              this.id_resp_44 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Principal'	:	
              this.resp_45 = this.formulario[i].respuesta	
              this.id_resp_45 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Principal'	:	
              this.resp_46 = this.formulario[i].respuesta	
              this.id_resp_46 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Principal'	:	
              this.resp_47 = this.formulario[i].respuesta	
              this.id_resp_47 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Principal'	:	
              this.resp_48 = this.formulario[i].respuesta	
              this.id_resp_48 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Principal'	:	
              this.resp_49 = this.formulario[i].respuesta	
              this.id_resp_49 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Principal'	:	
              this.resp_50 = this.formulario[i].respuesta	
              this.id_resp_50 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Principal'	:	
              this.resp_51 = this.formulario[i].respuesta	
              this.id_resp_51 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Principal'	:	
              this.resp_52 = this.formulario[i].respuesta	
              this.id_resp_52 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Principal'	:	
              this.resp_53 = this.formulario[i].respuesta	
              this.id_resp_53 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Principal'	:	
              this.resp_54 = this.formulario[i].respuesta	
              this.id_resp_54 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Princpal'	:	
              this.resp_55 = this.formulario[i].respuesta	
              this.id_resp_55 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Principal'	:	
              this.resp_56 = this.formulario[i].respuesta	
              this.id_resp_56 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Segundo'	:	
              this.resp_57 = this.formulario[i].respuesta	
              this.id_resp_57 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Segundo'	:	
              this.resp_58 = this.formulario[i].respuesta	
              this.id_resp_58 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Segundo'	:	
              this.resp_59 = this.formulario[i].respuesta	
              this.id_resp_59 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Segundo'	:	
              this.resp_60 = this.formulario[i].respuesta	
              this.id_resp_60 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Segundo'	:	
              this.resp_61 = this.formulario[i].respuesta	
              this.id_resp_61 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Segundo'	:	
              this.resp_62 = this.formulario[i].respuesta	
              this.id_resp_62 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Segundo'	:	
              this.resp_63 = this.formulario[i].respuesta	
              this.id_resp_63 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Segundo'	:	
              this.resp_64 = this.formulario[i].respuesta	
              this.id_resp_64 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Segundo'	:	
              this.resp_65 = this.formulario[i].respuesta	
              this.id_resp_65 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Segundo'	:	
              this.resp_66 = this.formulario[i].respuesta	
              this.id_resp_66 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Segundo'	:	
              this.resp_67 = this.formulario[i].respuesta	
              this.id_resp_67 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Segundo'	:	
              this.resp_68 = this.formulario[i].respuesta	
              this.id_resp_68 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Segundo'	:	
              this.resp_69 = this.formulario[i].respuesta	
              this.id_resp_69 = this.formulario[i].id	
              break
              case	'T1 (10728 H) Tercero'	:	
              this.resp_70 = this.formulario[i].respuesta	
              this.id_resp_70 = this.formulario[i].id	
              break
              case	'T2 (10768 H) Tercero'	:	
              this.resp_71 = this.formulario[i].respuesta	
              this.id_resp_71 = this.formulario[i].id	
              break
              case	'T3 (10808 H) Tercero'	:	
              this.resp_72 = this.formulario[i].respuesta	
              this.id_resp_72 = this.formulario[i].id	
              break
              case	'T4 (10808 H) Tercero'	:	
              this.resp_73 = this.formulario[i].respuesta	
              this.id_resp_73 = this.formulario[i].id	
              break
              case	'T5 (10888 H) Tercero'	:	
              this.resp_74 = this.formulario[i].respuesta	
              this.id_resp_74 = this.formulario[i].id	
              break
              case	'T6 (10928 H) Tercero'	:	
              this.resp_75 = this.formulario[i].respuesta	
              this.id_resp_75 = this.formulario[i].id	
              break
              case	'T7 (11222 H) Tercero'	:	
              this.resp_76 = this.formulario[i].respuesta	
              this.id_resp_76 = this.formulario[i].id	
              break
              case	'T8 (11262 H) Tercero'	:	
              this.resp_77 = this.formulario[i].respuesta	
              this.id_resp_77 = this.formulario[i].id	
              break
              case	'T9 (11302 H) Tercero'	:	
              this.resp_78 = this.formulario[i].respuesta	
              this.id_resp_78 = this.formulario[i].id	
              break
              case	'T10 (11342 H) Tercero'	:	
              this.resp_79 = this.formulario[i].respuesta	
              this.id_resp_79 = this.formulario[i].id	
              break
              case	'T11 (1382 H) Tercero'	:	
              this.resp_80 = this.formulario[i].respuesta	
              this.id_resp_80 = this.formulario[i].id	
              break
              case	'T12 (11422 H) Tercero'	:	
              this.resp_81 = this.formulario[i].respuesta	
              this.id_resp_81 = this.formulario[i].id	
              break
              case	'T13 (10728 V) Tercero'	:	
              this.resp_82 = this.formulario[i].respuesta	
              this.id_resp_82 = this.formulario[i].id	
              break
              case	'Valor del parámetro RSPR(dBm)'	:	
              this.resp_83 = this.formulario[i].respuesta	
              this.id_resp_83 = this.formulario[i].id	
              break
              case	'Valor del parámetro SINR(dB)'	:	
              this.resp_84 = this.formulario[i].respuesta	
              this.id_resp_84 = this.formulario[i].id	
              break
              case	'Velocidad de navegación de subida'	:	
              this.resp_85 = this.formulario[i].respuesta	
              this.id_resp_85 = this.formulario[i].id	
              break
              case	'Velocidad de navegación de Bajada'	:	
              this.resp_86 = this.formulario[i].respuesta	
              this.id_resp_86 = this.formulario[i].id	
              break
              case	'Cable Entel utilizado'	:	
              this.resp_87 = this.formulario[i].respuesta	
              this.id_resp_87 = this.formulario[i].id	
              break
              case	'Conectores'	:	
              this.resp_88 = this.formulario[i].respuesta	
              this.id_resp_88 = this.formulario[i].id	
              break
              case	'Amarras'	:	
              this.resp_89 = this.formulario[i].respuesta	
              this.id_resp_89 = this.formulario[i].id	
              break
              case	'Pasamuros utilizados'	:	
              this.resp_90 = this.formulario[i].respuesta	
              this.id_resp_90 = this.formulario[i].id	
              break
              case	'Tirafondos instalados'	:	
              this.resp_91 = this.formulario[i].respuesta	
              this.id_resp_91 = this.formulario[i].id	
              break
              case	'Voltaje Fase Neutro'	:	
              this.resp_92 = this.formulario[i].respuesta	
              this.id_resp_92 = this.formulario[i].id	
              break
              case	'Voltaje Fase Tierra'	:	
              this.resp_93 = this.formulario[i].respuesta	
              this.id_resp_93 = this.formulario[i].id	
              break
              case	'Voltaje Neutro Tierra'	:	
              this.resp_94 = this.formulario[i].respuesta	
              this.id_resp_94 = this.formulario[i].id	
              break
              case	'Observaciones'	:	
              this.resp_95 = this.formulario[i].respuesta	
              this.id_resp_95 = this.formulario[i].id	
              break
              case	'Utiliza material con autorización cliente'	:	
              this.resp_96 = this.formulario[i].respuesta	
              this.id_resp_96 = this.formulario[i].id	
              break
              case	'Se realiza reparación menor'	:	
              this.resp_97 = this.formulario[i].respuesta	
              this.id_resp_97 = this.formulario[i].id	
              break
              case	'Soluciones'	:	
              this.resp_98 = this.formulario[i].respuesta	
              this.id_resp_98 = this.formulario[i].id	
              break
              case	'Código Decodificador'	:	
              this.cod_decodificador = this.formulario[i].respuesta	
              this.id_cod_decodificador = this.formulario[i].id	
              break
            }
          }
        }
        // fin del llenado del formulario
      })
      .catch((err) => {
        console.error('Error al mostrar preguntas: ' + err.message)
        loading.dismiss()
      })
    })
    .catch((err) => {
      console.error('Error al traer preguntas: ' + err.message)
      loading.dismiss()
    })

    this.api.getFormImgs(this.navParams.get('formData').id)
    .then((res:any) => {
      this.imagenes = res.data
      console.log(this.imagenes)
      loading.dismiss()
    })
    .catch((err) => {
      console.error('Error al traer imágenes: ' + err.message)
      loading.dismiss()
    })
  }

  closeModal() {
    this.view.dismiss()
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

}

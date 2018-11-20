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
      resp_13: ['N/A'],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: [null],
      resp_18: ['N/A'],
      resp_19: ['N/A'],
      resp_20: ['N/A'],
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
      resp_31: ['N/A'],
      resp_32: [null],
      resp_33: ['N/A'],
      resp_34: [null],
      resp_35: ['N/A'],
      resp_36: ['N/A'],
      resp_37: ['N/A'],
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
      resp_50: ['N/A'],
      resp_51: ['N/A'],
      resp_52: ['N/A'],
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
      resp_15: ['N/A'],
      resp_16: ['N/A'],
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
      resp_41: ['N/A'],
      resp_42: ['N/A'],
      resp_43: ['N/A'],
      resp_44: ['N/A'],
      resp_45: ['N/A'],
      resp_46: ['N/A'],
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
      resp_15: ['N/A'],
      resp_16: ['N/A'],
      resp_17: ['N/A'],
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
      resp_44: ['N/A'],
      resp_45: ['N/A'],
      resp_46: ['N/A'],
      resp_47: ['N/A'],
      resp_48: ['N/A'],
      resp_49: ['N/A'],
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
      resp_13: ['N/A'],
      resp_14: [null],
      resp_15: [null],
      resp_16: [null],
      resp_17: ['N/A'],
      resp_18: ['N/A'],
      resp_19: [null],
      resp_20: ['N/A'],
      resp_21: [null],
      resp_22: [null],
      resp_23: ['N/A'],
      resp_24: ['N/A'],
      resp_25: ['N/A'],
      resp_26: [null],
      resp_27: [null],
      resp_28: [null],
      resp_29: [null],
      resp_30: ['N/A'],
      resp_31: ['N/A'],
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
      resp_47: ['N/A'],
      resp_48: ['N/A'],
      resp_49: ['N/A'],
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
      resp_8: [null],
      id_resp_1: [null],
      id_resp_2: [null],
      id_resp_3: [null],
      id_resp_4: [null],
      id_resp_5: [null],
      id_resp_6: [null],
      id_resp_7: [null],
      id_resp_8: [null]
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
        }
        resolve()
      })
      promise
      .then((res:any) => {
        // aqui llenamos el formulario respectivo con las respuestas obtenidas del api
        if(this.tipoFormulario == 'instalacion hfc'){
          for(let i=0; i<92; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
              this.ot_servicorp = this.formulario[i].respuesta
              this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
              this.folio_servicio = this.formulario[i].respuesta
              this.id_folio_servicio = this.formulario[i].id
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
              this.id_resp_1 = this.formulario[i].id  
              this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
              this.id_resp_2 = this.formulario[i].id  
              this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
              this.id_resp_3 = this.formulario[i].id  
              this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
              this.id_resp_4 = this.formulario[i].id  
              this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
              this.id_resp_5 = this.formulario[i].id  
              this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
              this.id_resp_6 = this.formulario[i].id  
              this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
              this.id_resp_7 = this.formulario[i].id  
              this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
              this.id_resp_8 = this.formulario[i].id  
              this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
              this.id_resp_9 = this.formulario[i].id  
              this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
              this.id_resp_10 = this.formulario[i].id  
              this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
              this.id_resp_11 = this.formulario[i].id  
              this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
              this.id_resp_12 = this.formulario[i].id  
              this.resp_12 = this.formulario[i].respuesta
              break
              case "Entrega clave de acceso wifi y personalizada a cliente":
              this.id_resp_13 = this.formulario[i].id  
              this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
              this.id_resp_14 = this.formulario[i].id  
              this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijacion de antena con (4 pernos)':
              this.id_resp_15 = this.formulario[i].id  
              this.resp_15 = this.formulario[i].respuesta
              break
              case 'Conector LNB protegido':
              this.id_resp_16 = this.formulario[i].id  
              this.resp_16 = this.formulario[i].respuesta
              break
              case 'Antena debidamente firme (Sin movimientos)':
              this.id_resp_17 = this.formulario[i].id  
              this.resp_17 = this.formulario[i].respuesta
              break
              case 'Altura acometida en norma (4.5 Mts)':
              this.id_resp_18 = this.formulario[i].id  
              this.resp_18 = this.formulario[i].respuesta
              break
              case 'La acometida es nueva (No reutilizada)':
              this.id_resp_19 = this.formulario[i].id  
              this.resp_19 = this.formulario[i].respuesta
              break
              case 'Ficha de abonado en TAP, rotulada correctamente':
              this.id_resp_20 = this.formulario[i].id  
              this.resp_20 = this.formulario[i].respuesta
              break
              case 'Loop de mantención':
              this.id_resp_21 = this.formulario[i].id  
              this.resp_21 = this.formulario[i].respuesta
              break
              case 'Ruteo y cableado correcto (40 Cms distancia entre grampas)':
              this.id_resp_22 = this.formulario[i].id  
              this.resp_22 = this.formulario[i].respuesta
              break
              case 'Fijación de spliters':
              this.id_resp_23 = this.formulario[i].id  
              this.resp_23 = this.formulario[i].respuesta
              break
              case 'Tiene pasamuros exterior':
              this.id_resp_24 = this.formulario[i].id  
              this.resp_24 = this.formulario[i].respuesta
              break
              case 'Tiene loop de goteo bota agua':
              this.id_resp_25 = this.formulario[i].id  
              this.resp_25 = this.formulario[i].respuesta
              break
              case 'Los niveles están dentro del rango':
              this.id_resp_26 = this.formulario[i].id  
              this.resp_26 = this.formulario[i].respuesta
              break
              case 'Ruteo y grampeado correctos (40 cm entre grampas)':
              this.id_resp_27 = this.formulario[i].id  
              this.resp_27 = this.formulario[i].respuesta
              break
              case 'Curva de cableado mayor o igual a 90 grados':
              this.id_resp_28 = this.formulario[i].id  
              this.resp_28 = this.formulario[i].respuesta
              break
              case 'Conector armado y prensado correctamente':
              this.id_resp_29 = this.formulario[i].id  
              this.resp_29 = this.formulario[i].respuesta
              break
              case 'Uso conector de compresión claro':
              this.id_resp_30 = this.formulario[i].id  
              this.resp_30 = this.formulario[i].respuesta
              break
              case 'Cable PIN es nuevo':
              this.id_resp_31 = this.formulario[i].id  
              this.resp_31 = this.formulario[i].respuesta
              break
              case 'Conectores correctamente torqueados':
              this.id_resp_32 = this.formulario[i].id  
              this.resp_32 = this.formulario[i].respuesta
              break
              case "Tiene filtro Hum en instalación de TV":
              this.id_resp_33 = this.formulario[i].id  
              this.resp_33 = this.formulario[i].respuesta
              break
              case 'Tiene cable HDMI en decodificador y TV HD':
              this.id_resp_34 = this.formulario[i].id  
              this.resp_34 = this.formulario[i].respuesta
              break
              case "Deja equipo modo Nat (CM-Emta)":
              this.id_resp_35 = this.formulario[i].id  
              this.resp_35 = this.formulario[i].respuesta
              break
              case 'Certifica / cambia canal de transmisión de wifi':
              this.id_resp_36 = this.formulario[i].id  
              this.resp_36 = this.formulario[i].respuesta
              break
              case 'Informó número telefónico asignado':
              this.id_resp_37 = this.formulario[i].id  
              this.resp_37 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
              this.id_resp_38 = this.formulario[i].id  
              this.resp_38 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
              this.id_resp_39 = this.formulario[i].id  
              this.resp_39 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
              this.id_resp_40 = this.formulario[i].id  
              this.resp_40 = this.formulario[i].respuesta
              break
              case 'Decos Std':
              this.id_resp_41 = this.formulario[i].id  
              this.resp_41 = this.formulario[i].respuesta
              break
              case 'Decos HD':
              this.id_resp_42 = this.formulario[i].id  
              this.resp_42 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
              this.id_resp_43 = this.formulario[i].id  
              this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
              this.id_resp_44 = this.formulario[i].id  
              this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
              this.id_resp_45 = this.formulario[i].id  
              this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
              this.id_resp_46 = this.formulario[i].id  
              this.resp_46 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
              this.id_resp_47 = this.formulario[i].id  
              this.resp_47 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
              this.id_resp_48 = this.formulario[i].id  
              this.resp_48 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
              this.id_resp_49 = this.formulario[i].id  
              this.resp_49 = this.formulario[i].respuesta
              break
              case 'TX':
              this.id_resp_50 = this.formulario[i].id  
              this.resp_50 = this.formulario[i].respuesta
              break
              case 'RX':
              this.id_resp_51 = this.formulario[i].id  
              this.resp_51 = this.formulario[i].respuesta
              break
              case 'SNR':
              this.id_resp_52 = this.formulario[i].id  
              this.resp_52 = this.formulario[i].respuesta
              break
              case 'Observaciones':
              this.id_resp_53 = this.formulario[i].id  
              this.resp_53 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
              this.id_resp_54 = this.formulario[i].id  
              this.resp_54 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
              this.id_resp_55 = this.formulario[i].id  
              this.resp_55 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
              this.id_resp_56 = this.formulario[i].id  
              this.resp_56 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
              this.id_resp_57 = this.formulario[i].id  
              this.resp_57 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
              this.id_resp_58 = this.formulario[i].id  
              this.resp_58 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
              this.id_resp_59 = this.formulario[i].id  
              this.resp_59 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
              this.id_resp_60 = this.formulario[i].id  
              this.resp_60 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
              this.id_resp_61 = this.formulario[i].id  
              this.resp_61 = this.formulario[i].respuesta
              break
              case '171 - Amarra cables nylon 4,8 x 15,6':
              this.id_resp_62 = this.formulario[i].id  
              this.resp_62 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
              this.id_resp_63 = this.formulario[i].id  
              this.resp_63 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
              this.id_resp_64 = this.formulario[i].id  
              this.resp_64 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
              this.id_resp_65 = this.formulario[i].id  
              this.resp_65 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
              this.id_resp_66 = this.formulario[i].id  
              this.resp_66 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
              this.id_resp_67 = this.formulario[i].id  
              this.resp_67 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
              this.id_resp_68 = this.formulario[i].id  
              this.resp_68 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
              this.id_resp_69 = this.formulario[i].id  
              this.resp_69 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
              this.id_resp_70 = this.formulario[i].id  
              this.resp_70 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
              this.id_resp_71 = this.formulario[i].id  
              this.resp_71 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
              this.id_resp_72 = this.formulario[i].id  
              this.resp_72 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
              this.id_resp_73 = this.formulario[i].id  
              this.resp_73 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
              this.id_resp_74 = this.formulario[i].id  
              this.resp_74 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
              this.id_resp_75 = this.formulario[i].id  
              this.resp_75 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
              this.id_resp_76 = this.formulario[i].id  
              this.resp_76 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
              this.id_resp_77 = this.formulario[i].id  
              this.resp_77 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
              this.id_resp_78 = this.formulario[i].id  
              this.resp_78 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
              this.id_resp_79 = this.formulario[i].id  
              this.resp_79 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
              this.id_resp_80 = this.formulario[i].id  
              this.resp_80 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
              this.id_resp_81 = this.formulario[i].id  
              this.resp_81 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
              this.id_resp_82 = this.formulario[i].id  
              this.resp_82 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
              this.id_resp_83 = this.formulario[i].id  
              this.resp_83 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
              this.id_resp_84 = this.formulario[i].id  
              this.resp_84 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
              this.id_resp_85 = this.formulario[i].id  
              this.resp_85 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
              this.id_resp_86 = this.formulario[i].id  
              this.resp_86 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
              this.id_resp_87 = this.formulario[i].id  
              this.resp_87 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
              this.id_resp_88 = this.formulario[i].id  
              this.resp_88 = this.formulario[i].respuesta
              break
              case '1004648 - Spliter':
              this.id_resp_89 = this.formulario[i].id  
              this.resp_89 = this.formulario[i].respuesta
              break
              case 'Código de barras':
              this.cod_decodificador = this.formulario[i].respuesta
              this.id_cod_decodificador = this.formulario[i].id
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
                this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
                this.id_folio_servicio = this.formulario[i].id
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
              this.id_resp_1 = this.formulario[i].id  
              this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
              this.id_resp_2 = this.formulario[i].id  
              this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
              this.id_resp_3 = this.formulario[i].id  
              this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
              this.id_resp_4 = this.formulario[i].id  
              this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
              this.id_resp_5 = this.formulario[i].id  
              this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
              this.id_resp_6 = this.formulario[i].id  
              this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
              this.id_resp_7 = this.formulario[i].id  
              this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
              this.id_resp_8 = this.formulario[i].id  
              this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
              this.id_resp_9 = this.formulario[i].id  
              this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
              this.id_resp_10 = this.formulario[i].id  
              this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
              this.id_resp_11 = this.formulario[i].id  
              this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
              this.id_resp_12 = this.formulario[i].id  
              this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada al cliente':
              this.id_resp_13 = this.formulario[i].id  
              this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
              this.id_resp_14 = this.formulario[i].id  
              this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijacion de antena con (4 pernos)':
              this.id_resp_15 = this.formulario[i].id  
              this.resp_15 = this.formulario[i].respuesta
              break
              case 'Conector LNB protegido':
              this.id_resp_16 = this.formulario[i].id  
              this.resp_16 = this.formulario[i].respuesta
              break
              case 'Antena debidamente firme (Sin movimientos)':
              this.id_resp_17 = this.formulario[i].id  
              this.resp_17 = this.formulario[i].respuesta
              break
              case 'Altura acometida en norma (4.5 Mts)':
              this.id_resp_18 = this.formulario[i].id  
              this.resp_18 = this.formulario[i].respuesta
              break
              case 'La acometida es nueva (No reutilizada)':
              this.id_resp_19 = this.formulario[i].id  
              this.resp_19 = this.formulario[i].respuesta
              break
              case 'Ficha de abonado en TAP, rotulada correctamente':
              this.id_resp_20 = this.formulario[i].id  
              this.resp_20 = this.formulario[i].respuesta
              break
              case 'Loop de mantención':
              this.id_resp_21 = this.formulario[i].id  
              this.resp_21 = this.formulario[i].respuesta
              break
              case 'Ruteo y cableado correcto (40 Cms distancia entre grampas)':
              this.id_resp_22 = this.formulario[i].id  
              this.resp_22 = this.formulario[i].respuesta
              break
              case 'Fijación de spliters':
              this.id_resp_23 = this.formulario[i].id  
              this.resp_23 = this.formulario[i].respuesta
              break
              case 'Tiene pasamuros exterior':
              this.id_resp_24 = this.formulario[i].id  
              this.resp_24 = this.formulario[i].respuesta
              break
              case 'Tiene loop de goteo bota agua':
              this.id_resp_25 = this.formulario[i].id  
              this.resp_25 = this.formulario[i].respuesta
              break
              case 'Los niveles están dentro del rango':
              this.id_resp_26 = this.formulario[i].id  
              this.resp_26 = this.formulario[i].respuesta
              break
              case 'Ruteo y grampeado correctos (40 cm entre grampas)':
              this.id_resp_27 = this.formulario[i].id  
              this.resp_27 = this.formulario[i].respuesta
              break
              case 'Curva de cableado mayor o igual a 90 grados':
              this.id_resp_28 = this.formulario[i].id  
              this.resp_28 = this.formulario[i].respuesta
              break
              case 'Conector armado y prensado correctamente':
              this.id_resp_29 = this.formulario[i].id  
              this.resp_29 = this.formulario[i].respuesta
              break
              case 'Uso conector de compresión claro':
              this.id_resp_30 = this.formulario[i].id  
              this.resp_30 = this.formulario[i].respuesta
              break
              case 'Cable PIN es nuevo':
              this.id_resp_31 = this.formulario[i].id  
              this.resp_31 = this.formulario[i].respuesta
              break
              case 'Conectores correctamente torqueados':
              this.id_resp_32 = this.formulario[i].id  
              this.resp_32 = this.formulario[i].respuesta
              break
              case 'Tiene filtro Hum en instalaciín de TV':
              this.id_resp_33 = this.formulario[i].id  
              this.resp_33 = this.formulario[i].respuesta
              break
              case 'Tiene cable HDMI en decodificador y TV HD':
              this.id_resp_34 = this.formulario[i].id  
              this.resp_34 = this.formulario[i].respuesta
              break
              case 'Deja equipo en modo Nat (CM-Emta)':
              this.id_resp_35 = this.formulario[i].id  
              this.resp_35 = this.formulario[i].respuesta
              break
              case 'Certifica / cambia canal de transmisión de wifi':
              this.id_resp_36 = this.formulario[i].id  
              this.resp_36 = this.formulario[i].respuesta
              break
              case 'Informó número telefónico asignado':
              this.id_resp_37 = this.formulario[i].id  
              this.resp_37 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
              this.id_resp_38 = this.formulario[i].id  
              this.resp_38 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
              this.id_resp_39 = this.formulario[i].id  
              this.resp_39 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
              this.id_resp_40 = this.formulario[i].id  
              this.resp_40 = this.formulario[i].respuesta
              break
              case 'Decos Std':
              this.id_resp_41 = this.formulario[i].id  
              this.resp_41 = this.formulario[i].respuesta
              break
              case 'Decos HD':
              this.id_resp_42 = this.formulario[i].id  
              this.resp_42 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
              this.id_resp_43 = this.formulario[i].id  
              this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
              this.id_resp_44 = this.formulario[i].id  
              this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
              this.id_resp_45 = this.formulario[i].id  
              this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
              this.id_resp_46 = this.formulario[i].id  
              this.resp_46 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
              this.id_resp_47 = this.formulario[i].id  
              this.resp_47 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
              this.id_resp_48 = this.formulario[i].id  
              this.resp_48 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
              this.id_resp_49 = this.formulario[i].id  
              this.resp_49 = this.formulario[i].respuesta
              break
              case 'TX':
              this.id_resp_50 = this.formulario[i].id  
              this.resp_50 = this.formulario[i].respuesta
              break
              case 'RX':
              this.id_resp_51 = this.formulario[i].id  
              this.resp_51 = this.formulario[i].respuesta
              break
              case 'SNR':
              this.id_resp_52 = this.formulario[i].id  
              this.resp_52 = this.formulario[i].respuesta
              break
              case 'Observaciones':
              this.id_resp_53 = this.formulario[i].id  
              this.resp_53 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
              this.id_resp_54 = this.formulario[i].id  
              this.resp_54 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
              this.id_resp_55 = this.formulario[i].id  
              this.resp_55 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
              this.id_resp_56 = this.formulario[i].id  
              this.resp_56 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
              this.id_resp_57 = this.formulario[i].id  
              this.resp_57 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
              this.id_resp_58 = this.formulario[i].id  
              this.resp_58 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
              this.id_resp_59 = this.formulario[i].id  
              this.resp_59 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
              this.id_resp_60 = this.formulario[i].id  
              this.resp_60 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
              this.id_resp_61 = this.formulario[i].id  
              this.resp_61 = this.formulario[i].respuesta
              break
              case '171 - Amarra cables nylon 4,8 x 15,6':
              this.id_resp_62 = this.formulario[i].id  
              this.resp_62 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
              this.id_resp_63 = this.formulario[i].id  
              this.resp_63 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
              this.id_resp_64 = this.formulario[i].id  
              this.resp_64 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
              this.id_resp_65 = this.formulario[i].id  
              this.resp_65 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
              this.id_resp_66 = this.formulario[i].id  
              this.resp_66 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
              this.id_resp_67 = this.formulario[i].id  
              this.resp_67 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
              this.id_resp_68 = this.formulario[i].id  
              this.resp_68 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
              this.id_resp_69 = this.formulario[i].id  
              this.resp_69 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
              this.id_resp_70 = this.formulario[i].id  
              this.resp_70 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
              this.id_resp_71 = this.formulario[i].id  
              this.resp_71 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
              this.id_resp_72 = this.formulario[i].id  
              this.resp_72 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
              this.id_resp_73 = this.formulario[i].id  
              this.resp_73 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
              this.id_resp_74 = this.formulario[i].id  
              this.resp_74 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
              this.id_resp_75 = this.formulario[i].id  
              this.resp_75 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
              this.id_resp_76 = this.formulario[i].id  
              this.resp_76 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
              this.id_resp_77 = this.formulario[i].id  
              this.resp_77 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
              this.id_resp_78 = this.formulario[i].id  
              this.resp_78 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
              this.id_resp_79 = this.formulario[i].id  
              this.resp_79 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
              this.id_resp_80 = this.formulario[i].id  
              this.resp_80 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
              this.id_resp_81 = this.formulario[i].id  
              this.resp_81 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
              this.id_resp_82 = this.formulario[i].id  
              this.resp_82 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
              this.id_resp_83 = this.formulario[i].id  
              this.resp_83 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
              this.id_resp_84 = this.formulario[i].id  
              this.resp_84 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
              this.id_resp_85 = this.formulario[i].id  
              this.resp_85 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
              this.id_resp_86 = this.formulario[i].id  
              this.resp_86 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
              this.id_resp_87 = this.formulario[i].id  
              this.resp_87 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
              this.id_resp_88 = this.formulario[i].id  
              this.resp_88 = this.formulario[i].respuesta
              break
              case '1004648 - Spliter':
              this.id_resp_89 = this.formulario[i].id  
              this.resp_89 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
                this.id_cod_decodificador = this.formulario[i].id
              break
            }
          }
        }else if(this.tipoFormulario == 'mantencion hfc'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
                this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
                this.id_folio_servicio = this.formulario[i].id
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
              this.resp_1 = this.formulario[i].id  
              this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
              this.resp_2 = this.formulario[i].id  
              this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
              this.resp_3 = this.formulario[i].id  
              this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
              this.resp_4 = this.formulario[i].id  
              this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
              this.resp_5 = this.formulario[i].id  
              this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
              this.resp_6 = this.formulario[i].id  
              this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
              this.resp_7 = this.formulario[i].id  
              this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
              this.resp_8 = this.formulario[i].id  
              this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
              this.resp_9 = this.formulario[i].id  
              this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
              this.resp_10 = this.formulario[i].id  
              this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
              this.resp_11 = this.formulario[i].id  
              this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
              this.resp_12 = this.formulario[i].id  
              this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada a cliente':
              this.resp_13 = this.formulario[i].id  
              this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
              this.resp_14 = this.formulario[i].id  
              this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijación de antena con (4 pernos)':
              this.resp_15 = this.formulario[i].id  
              this.resp_15 = this.formulario[i].respuesta
              break
              case 'Técnico deja antena debidamente firme (Sin movimiento)':
              this.resp_16 = this.formulario[i].id  
              this.resp_16 = this.formulario[i].respuesta
              break
              case 'Técnico cambia acometida dañada':
              this.resp_17 = this.formulario[i].id  
              this.resp_17 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia ground block':
              this.resp_18 = this.formulario[i].id  
              this.resp_18 = this.formulario[i].respuesta
              break
              case 'Técnico fija spliter':
              this.resp_19 = this.formulario[i].id  
              this.resp_19 = this.formulario[i].respuesta
              break
              case 'Técnico instala bloqueador de voltaje (Filtro HUM)':
              this.resp_20 = this.formulario[i].id  
              this.resp_20 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia conectores':
              this.resp_21 = this.formulario[i].id  
              this.resp_21 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cableado interior':
              this.resp_22 = this.formulario[i].id  
              this.resp_22 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable PIN':
              this.resp_23 = this.formulario[i].id  
              this.resp_23 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia roseta telefónica':
              this.resp_24 = this.formulario[i].id  
              this.resp_24 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia equipo telefónico':
              this.resp_25 = this.formulario[i].id  
              this.resp_25 = this.formulario[i].respuesta
              break
              case 'Técnico deja conectores correctamente torqueados':
              this.resp_26 = this.formulario[i].id  
              this.resp_26 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable HDMI':
              this.resp_27 = this.formulario[i].id  
              this.resp_27 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable RCA':
              this.resp_28 = this.formulario[i].id  
              this.resp_28 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia decodificador/Cmo MTA':
              this.resp_29 = this.formulario[i].id  
              this.resp_29 = this.formulario[i].respuesta
              break
              case 'Técnico dejó equipo modo nat (CM-Emta)':
              this.resp_30 = this.formulario[i].id  
              this.resp_30 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia canal de transmición WIFI':
              this.resp_31 = this.formulario[i].id  
              this.resp_31 = this.formulario[i].respuesta
              break
              case 'Técnico certifica niveles operacines (CM-MTA-DECO)':
              this.resp_32 = this.formulario[i].id  
              this.resp_32 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia control remoto':
              this.resp_33 = this.formulario[i].id  
              this.resp_33 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia pasivos spliter-dc':
              this.resp_34 = this.formulario[i].id  
              this.resp_34 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
              this.resp_35 = this.formulario[i].id  
              this.resp_35 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
              this.resp_36 = this.formulario[i].id  
              this.resp_36 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
              this.resp_37 = this.formulario[i].id  
              this.resp_37 = this.formulario[i].respuesta
              break
              case 'Decos Std':
              this.resp_38 = this.formulario[i].id  
              this.resp_38 = this.formulario[i].respuesta
              break
              case 'Decos HD':
              this.resp_39 = this.formulario[i].id  
              this.resp_39 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
              this.resp_40 = this.formulario[i].id  
              this.resp_40 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
              this.resp_41 = this.formulario[i].id  
              this.resp_41 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
              this.resp_42 = this.formulario[i].id  
              this.resp_42 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
              this.resp_43 = this.formulario[i].id  
              this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
              this.resp_44 = this.formulario[i].id  
              this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
              this.resp_45 = this.formulario[i].id  
              this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
              this.resp_46 = this.formulario[i].id  
              this.resp_46 = this.formulario[i].respuesta
              break
              case 'TX':
              this.resp_47 = this.formulario[i].id  
              this.resp_47 = this.formulario[i].respuesta
              break
              case 'RX':
              this.resp_48 = this.formulario[i].id  
              this.resp_48 = this.formulario[i].respuesta
              break
              case 'SNR':
              this.resp_49 = this.formulario[i].id  
              this.resp_49 = this.formulario[i].respuesta
              break
              case 'Observaciones':
              this.resp_50 = this.formulario[i].id  
              this.resp_50 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
              this.resp_51 = this.formulario[i].id  
              this.resp_51 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
              this.resp_52 = this.formulario[i].id  
              this.resp_52 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
              this.resp_53 = this.formulario[i].id  
              this.resp_53 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
              this.resp_54 = this.formulario[i].id  
              this.resp_54 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
              this.resp_55 = this.formulario[i].id  
              this.resp_55 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
              this.resp_56 = this.formulario[i].id  
              this.resp_56 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
              this.resp_57 = this.formulario[i].id  
              this.resp_57 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
              this.resp_58 = this.formulario[i].id  
              this.resp_58 = this.formulario[i].respuesta
              break
              case '1004171 - Amarra cables nylon 4,8 x 15,6':
              this.resp_59 = this.formulario[i].id  
              this.resp_59 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
              this.resp_60 = this.formulario[i].id  
              this.resp_60 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
              this.resp_61 = this.formulario[i].id  
              this.resp_61 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
              this.resp_62 = this.formulario[i].id  
              this.resp_62 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
              this.resp_63 = this.formulario[i].id  
              this.resp_63 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
              this.resp_64 = this.formulario[i].id  
              this.resp_64 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
              this.resp_65 = this.formulario[i].id  
              this.resp_65 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
              this.resp_66 = this.formulario[i].id  
              this.resp_66 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
              this.resp_67 = this.formulario[i].id  
              this.resp_67 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
              this.resp_68 = this.formulario[i].id  
              this.resp_68 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
              this.resp_69 = this.formulario[i].id  
              this.resp_69 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
              this.resp_70 = this.formulario[i].id  
              this.resp_70 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
              this.resp_71 = this.formulario[i].id  
              this.resp_71 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
              this.resp_72 = this.formulario[i].id  
              this.resp_72 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
              this.resp_73 = this.formulario[i].id  
              this.resp_73 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
              this.resp_74 = this.formulario[i].id  
              this.resp_74 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
              this.resp_75 = this.formulario[i].id  
              this.resp_75 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
              this.resp_76 = this.formulario[i].id  
              this.resp_76 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
              this.resp_77 = this.formulario[i].id  
              this.resp_77 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
              this.resp_78 = this.formulario[i].id  
              this.resp_78 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
              this.resp_79 = this.formulario[i].id  
              this.resp_79 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
              this.resp_80 = this.formulario[i].id  
              this.resp_80 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
              this.resp_81 = this.formulario[i].id  
              this.resp_81 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
              this.resp_82 = this.formulario[i].id  
              this.resp_82 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
              this.resp_83 = this.formulario[i].id  
              this.resp_83 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
              this.resp_84 = this.formulario[i].id  
              this.resp_84 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
              this.resp_85 = this.formulario[i].id  
              this.resp_85 = this.formulario[i].respuesta
              break
              case '1004648 - Splitter':
              this.resp_86 = this.formulario[i].id  
              this.resp_86 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
              break
            }
          }
        }else if(this.tipoFormulario == 'mantencion dth'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
                this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
                this.id_folio_servicio = this.formulario[i].id
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
              this.resp_1 = this.formulario[i].id  
              this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
              this.resp_2 = this.formulario[i].id  
              this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
              this.resp_3 = this.formulario[i].id  
              this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
              this.resp_4 = this.formulario[i].id  
              this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
              this.resp_5 = this.formulario[i].id  
              this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
              this.resp_6 = this.formulario[i].id  
              this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
              this.resp_7 = this.formulario[i].id  
              this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
              this.resp_8 = this.formulario[i].id  
              this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
              this.resp_9 = this.formulario[i].id  
              this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
              this.resp_10 = this.formulario[i].id  
              this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
              this.resp_11 = this.formulario[i].id  
              this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
              this.resp_12 = this.formulario[i].id  
              this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada a cliente':
              this.resp_13 = this.formulario[i].id  
              this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
              this.resp_14 = this.formulario[i].id  
              this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijación de antena con (4 pernos)':
              this.resp_15 = this.formulario[i].id  
              this.resp_15 = this.formulario[i].respuesta
              break
              case 'Técnico deja antena debidamente firme (Sin movimiento)':
              this.resp_16 = this.formulario[i].id  
              this.resp_16 = this.formulario[i].respuesta
              break
              case 'Técnico cambia acometida dañada':
              this.resp_17 = this.formulario[i].id  
              this.resp_17 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia ground block':
              this.resp_18 = this.formulario[i].id  
              this.resp_18 = this.formulario[i].respuesta
              break
              case 'Técnico fija spliter':
              this.resp_19 = this.formulario[i].id  
              this.resp_19 = this.formulario[i].respuesta
              break
              case 'Técnico instala bloqueador de voltaje (Filtro HUM)':
              this.resp_20 = this.formulario[i].id  
              this.resp_20 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia conectores':
              this.resp_21 = this.formulario[i].id  
              this.resp_21 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cableado interior':
              this.resp_22 = this.formulario[i].id  
              this.resp_22 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable PIN':
              this.resp_23 = this.formulario[i].id  
              this.resp_23 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia roseta telefónica':
              this.resp_24 = this.formulario[i].id  
              this.resp_24 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia equipo telefónico':
              this.resp_25 = this.formulario[i].id  
              this.resp_25 = this.formulario[i].respuesta
              break
              case 'Técnico deja conectores correctamente torqueados':
              this.resp_26 = this.formulario[i].id  
              this.resp_26 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable HDMI':
              this.resp_27 = this.formulario[i].id  
              this.resp_27 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable RCA':
              this.resp_28 = this.formulario[i].id  
              this.resp_28 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia decodificador/Cmo MTA':
              this.resp_29 = this.formulario[i].id  
              this.resp_29 = this.formulario[i].respuesta
              break
              case 'Técnico dejó equipo modo nat (CM-Emta)':
              this.resp_30 = this.formulario[i].id  
              this.resp_30 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia canal de transmición WIFI':
              this.resp_31 = this.formulario[i].id  
              this.resp_31 = this.formulario[i].respuesta
              break
              case 'Técnico certifica niveles operacines (CM-MTA-DECO)':
              this.resp_32 = this.formulario[i].id  
              this.resp_32 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia control remoto':
              this.resp_33 = this.formulario[i].id  
              this.resp_33 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia pasivos spliter-dc':
              this.resp_34 = this.formulario[i].id  
              this.resp_34 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
              this.resp_35 = this.formulario[i].id  
              this.resp_35 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
              this.resp_36 = this.formulario[i].id  
              this.resp_36 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
              this.resp_37 = this.formulario[i].id  
              this.resp_37 = this.formulario[i].respuesta
              break
              case 'Decos Std':
              this.resp_38 = this.formulario[i].id  
              this.resp_38 = this.formulario[i].respuesta
              break
              case 'Decos HD':
              this.resp_39 = this.formulario[i].id  
              this.resp_39 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
              this.resp_40 = this.formulario[i].id  
              this.resp_40 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
              this.resp_41 = this.formulario[i].id  
              this.resp_41 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
              this.resp_42 = this.formulario[i].id  
              this.resp_42 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
              this.resp_43 = this.formulario[i].id  
              this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
              this.resp_44 = this.formulario[i].id  
              this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
              this.resp_45 = this.formulario[i].id  
              this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
              this.resp_46 = this.formulario[i].id  
              this.resp_46 = this.formulario[i].respuesta
              break
              case 'TX':
              this.resp_47 = this.formulario[i].id  
              this.resp_47 = this.formulario[i].respuesta
              break
              case 'RX':
              this.resp_48 = this.formulario[i].id  
              this.resp_48 = this.formulario[i].respuesta
              break
              case 'SNR':
              this.resp_49 = this.formulario[i].id  
              this.resp_49 = this.formulario[i].respuesta
              break
              case 'Observaciones':
              this.resp_50 = this.formulario[i].id  
              this.resp_50 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
              this.resp_51 = this.formulario[i].id  
              this.resp_51 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
              this.resp_52 = this.formulario[i].id  
              this.resp_52 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
              this.resp_53 = this.formulario[i].id  
              this.resp_53 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
              this.resp_54 = this.formulario[i].id  
              this.resp_54 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
              this.resp_55 = this.formulario[i].id  
              this.resp_55 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
              this.resp_56 = this.formulario[i].id  
              this.resp_56 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
              this.resp_57 = this.formulario[i].id  
              this.resp_57 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
              this.resp_58 = this.formulario[i].id  
              this.resp_58 = this.formulario[i].respuesta
              break
              case '1004171 - Amarra cables nylon 4,8 x 15,6':
              this.resp_59 = this.formulario[i].id  
              this.resp_59 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
              this.resp_60 = this.formulario[i].id  
              this.resp_60 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
              this.resp_61 = this.formulario[i].id  
      
      
              this.resp_61 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
              this.resp_62 = this.formulario[i].id  
              this.resp_62 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
              this.resp_63 = this.formulario[i].id  
              this.resp_63 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
              this.resp_64 = this.formulario[i].id  
              this.resp_64 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
              this.resp_65 = this.formulario[i].id  
              this.resp_65 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
              this.resp_66 = this.formulario[i].id  
              this.resp_66 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
              this.resp_67 = this.formulario[i].id  
              this.resp_67 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
              this.resp_68 = this.formulario[i].id  
              this.resp_68 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
              this.resp_69 = this.formulario[i].id  
              this.resp_69 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
              this.resp_70 = this.formulario[i].id  
              this.resp_70 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
              this.resp_71 = this.formulario[i].id  
              this.resp_71 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
              this.resp_72 = this.formulario[i].id  
              this.resp_72 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
              this.resp_73 = this.formulario[i].id  
              this.resp_73 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
              this.resp_74 = this.formulario[i].id  
              this.resp_74 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
              this.resp_75 = this.formulario[i].id  
              this.resp_75 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
              this.resp_76 = this.formulario[i].id  
              this.resp_76 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
              this.resp_77 = this.formulario[i].id  
              this.resp_77 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
              this.resp_78 = this.formulario[i].id  
              this.resp_78 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
              this.resp_79 = this.formulario[i].id  
              this.resp_79 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
              this.resp_80 = this.formulario[i].id  
              this.resp_80 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
              this.resp_81 = this.formulario[i].id  
              this.resp_81 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
              this.resp_82 = this.formulario[i].id  
              this.resp_82 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
              this.resp_83 = this.formulario[i].id  
              this.resp_83 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
              this.resp_84 = this.formulario[i].id  
              this.resp_84 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
              this.resp_85 = this.formulario[i].id  
              this.resp_85 = this.formulario[i].respuesta
              break
              case '1004648 - Splitter':
              this.resp_86 = this.formulario[i].id  
              this.resp_86 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
              break
            }
          }
        }else if(this.tipoFormulario == 'desconexion'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
                this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
                this.id_folio_servicio = this.formulario[i].id
              break
              case 'Técnico corta acometida':
                this.resp_1 = this.formulario[i].respuesta
                this.id_resp_1 = this.formulario[i].id
              break
              case 'Técnico retira acometida':
                this.resp_2 = this.formulario[i].respuesta
                this.id_resp_2 = this.formulario[i].id
              break
              case 'Desconexión OK':
                this.resp_3 = this.formulario[i].respuesta
                this.id_resp_3 = this.formulario[i].id
              break
              case 'Cliente activo':
                this.resp_4 = this.formulario[i].respuesta
                this.id_resp_4 = this.formulario[i].id
              break
              case 'Certificador desconecta':
                this.resp_5 = this.formulario[i].respuesta
                this.id_resp_5 = this.formulario[i].id
              break
              case 'Se corta ilegal':
                this.resp_6 = this.formulario[i].respuesta
                this.id_resp_6 = this.formulario[i].id
              break
              case 'No permiten realizar corte':
                this.resp_7 = this.formulario[i].respuesta
                this.id_resp_7 = this.formulario[i].id
              break
              case 'Observaciones':
                this.resp_8 = this.formulario[i].respuesta
                this.id_resp_8 = this.formulario[i].id
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth entel'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
                this.id_ot_servicorp = this.formulario[i].id
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
                this.id_folio_servicio = this.formulario[i].id
              break
              case 'Técnico fue amable':
              this.resp_1 = this.formulario[i].id  
              this.resp_1= this.formulario[i].respuesta
              break
              case "La presentación del técnico era la correcta":
              this.resp_2 = this.formulario[i].id  
              this.resp_2= this.formulario[i].respuesta
              break
              case "Técnico informó el trabajo a realizar":
              this.resp_3 = this.formulario[i].id  
              this.resp_3= this.formulario[i].respuesta
              break
              case "Técnico capacitó capacitación del uso de los equipos":
              this.resp_4 = this.formulario[i].id  
              this.resp_4= this.formulario[i].respuesta
              break
              case "Usó antena Entel":
              this.resp_5 = this.formulario[i].id  
              this.resp_5= this.formulario[i].respuesta
              break
              case "Correcta ubicación de antena Entel":
              this.resp_6 = this.formulario[i].id  
              this.resp_6= this.formulario[i].respuesta
              break
              case "Correcta fijación de antena Entel":
              this.resp_7 = this.formulario[i].id  
              this.resp_7= this.formulario[i].respuesta
              break
              case "Utilizó cables y materiales de Entel":
              this.resp_8 = this.formulario[i].id  
              this.resp_8= this.formulario[i].respuesta
              break
              case "Correcta instalación LNB Entel":
              this.resp_9 = this.formulario[i].id  
              this.resp_9= this.formulario[i].respuesta
              break
              case "Instalación de amarras plásticas":
              this.resp_10 = this.formulario[i].id  
              this.resp_10= this.formulario[i].respuesta
              break
              case "Ruteo y grapeado exterior":
              this.resp_11 = this.formulario[i].id  
              this.resp_11 = this.formulario[i].respuesta
              break
              case "Loop mantención":
              this.resp_12 = this.formulario[i].id  
              this.resp_12 = this.formulario[i].respuesta
              break
              case "Fijación de multiswitch Entel":
              this.resp_13 = this.formulario[i].id  
              this.resp_13 = this.formulario[i].respuesta
              break
              case "Posee pasamuros exterior":
              this.resp_14 = this.formulario[i].id  
              this.resp_14 = this.formulario[i].respuesta
              break
              case "Posee pasamuros interior":
              this.resp_15 = this.formulario[i].id  
              this.resp_15 = this.formulario[i].respuesta
              break
              case "En las esquinas de muros los ángulos de los cables (ángulo de curvatura) está según norma":
              this.resp_16 = this.formulario[i].id  
              this.resp_16 = this.formulario[i].respuesta
              break
              case "Usó cableado Entel":
              this.resp_17 = this.formulario[i].id  
              this.resp_17 = this.formulario[i].respuesta
              break
              case "Ruteo y grapeado interior":
              this.resp_18 = this.formulario[i].id  
              this.resp_18 = this.formulario[i].respuesta
              break
              case "Fijación de los cables de Entel":
              this.resp_19 = this.formulario[i].id  
              this.resp_19 = this.formulario[i].respuesta
              break
              case "Conectores Entel prensados correctamente":
              this.resp_20 = this.formulario[i].id  
              this.resp_20 = this.formulario[i].respuesta
              break
              case "El o los STB se encuentran bien ubicados según norma":
              this.resp_21 = this.formulario[i].id  
              this.resp_21 = this.formulario[i].respuesta
              break
              case "El o los STB están funcionando correctamente":
              this.resp_22 = this.formulario[i].id  
              this.resp_22 = this.formulario[i].respuesta
              break
              case "Buen nivel de señal 1 STB":
              this.resp_23 = this.formulario[i].id  
              this.resp_23 = this.formulario[i].respuesta
              break
              case "Buen nivel de señal 2 STB":
              this.resp_24 = this.formulario[i].id  
              this.resp_24 = this.formulario[i].respuesta
              break
              case "Buen nivel de señal 3 STB":
              this.resp_25 = this.formulario[i].id  
              this.resp_25 = this.formulario[i].respuesta
              break
              case "Señal pixeleada":
              this.resp_26 = this.formulario[i].id  
              this.resp_26 = this.formulario[i].respuesta
              break
              case "Auditor solicita visita técnica":
              this.resp_27 = this.formulario[i].id  
              this.resp_27 = this.formulario[i].respuesta
              break
              case "Motivo de la baja":
              this.resp_28 = this.formulario[i].id  
              this.resp_28 = this.formulario[i].respuesta
              break
              case "Cantidad decos según plan":
              this.resp_29 = this.formulario[i].id  
              this.resp_29 = this.formulario[i].respuesta
              break
              case "Cantidad decos existentes en domicilio":
              this.resp_30 = this.formulario[i].id  
              this.resp_30 = this.formulario[i].respuesta
              break
              case "Cantidad multiswitch":
              this.resp_31 = this.formulario[i].id  
              this.resp_31 = this.formulario[i].respuesta
              break
              case "Tamaño antena":
              this.resp_32 = this.formulario[i].id  
              this.resp_32 = this.formulario[i].respuesta
              break
              case "T1 (10728 H) Principal":
              this.resp_33 = this.formulario[i].id  
              this.resp_33 = this.formulario[i].respuesta
              break
              case "T2 (10768 H) Principal":
              this.resp_34 = this.formulario[i].id  
              this.resp_34 = this.formulario[i].respuesta
              break
              case "T3 (10808 H) Principal":
              this.resp_35 = this.formulario[i].id  
              this.resp_35 = this.formulario[i].respuesta
              break
              case "T4 (10808 H) Principal":
              this.resp_36 = this.formulario[i].id  
              this.resp_36 = this.formulario[i].respuesta
              break
              case "T5 (10888 H) Principal":
              this.resp_37 = this.formulario[i].id  
              this.resp_37 = this.formulario[i].respuesta
              break
              case "T6 (10928 H) Principal":
              this.resp_38 = this.formulario[i].id  
              this.resp_38 = this.formulario[i].respuesta
              break
              case "T7 (11222 H) Principal":
              this.resp_39 = this.formulario[i].id  
              this.resp_39 = this.formulario[i].respuesta
              break
              case "T8 (11262 H) Principal":
              this.resp_40 = this.formulario[i].id  
              this.resp_40 = this.formulario[i].respuesta
              break
              case "T9 (11302 H) Principal":
              this.resp_41 = this.formulario[i].id  
              this.resp_41 = this.formulario[i].respuesta
              break
              case "T10 (11342 H) Principal":
              this.resp_42 = this.formulario[i].id  
              this.resp_42 = this.formulario[i].respuesta
              break
              case "T11 (1382 H) Principal":
              this.resp_43 = this.formulario[i].id  
              this.resp_43 = this.formulario[i].respuesta
              break
              case "T12 (11422 H) Principal":
              this.resp_44 = this.formulario[i].id  
              this.resp_44 = this.formulario[i].respuesta
              break
              case "T13 (10728 V) Principal":
              this.resp_45 = this.formulario[i].id  
              this.resp_45 = this.formulario[i].respuesta
              break
              case "T1 (10728 H) Segundo":
              this.resp_46 = this.formulario[i].id  
              this.resp_46 = this.formulario[i].respuesta
              break
              case "T2 (10768 H) Segundo":
              this.resp_47 = this.formulario[i].id  
              this.resp_47 = this.formulario[i].respuesta
              break
              case "T3 (10808 H) Segundo":
              this.resp_48 = this.formulario[i].id  
              this.resp_48 = this.formulario[i].respuesta
              break
              case "T4 (10808 H) Segundo":
              this.resp_49 = this.formulario[i].id  
              this.resp_49 = this.formulario[i].respuesta
              break
              case "T5 (10888 H) Segundo":
              this.resp_50 = this.formulario[i].id  
              this.resp_50 = this.formulario[i].respuesta
              break
              case "T6 (10928 H) Segundo":
              this.resp_51 = this.formulario[i].id  
              this.resp_51 = this.formulario[i].respuesta
              break
              case "T7 (11222 H) Segundo":
              this.resp_52 = this.formulario[i].id  
              this.resp_52 = this.formulario[i].respuesta
              break
              case "T8 (11262 H) Segundo":
              this.resp_53 = this.formulario[i].id  
              this.resp_53 = this.formulario[i].respuesta
              break
              case "T9 (11302 H) Segundo":
              this.resp_54 = this.formulario[i].id  
              this.resp_54 = this.formulario[i].respuesta
              break
              case "T10 (11342 H) Segundo":
              this.resp_55 = this.formulario[i].id  
              this.resp_55 = this.formulario[i].respuesta
              break
              case "T11 (1382 H) Segundo":
              this.resp_56 = this.formulario[i].id  
              this.resp_56 = this.formulario[i].respuesta
              break
              case "T12 (11422 H) Segundo":
              this.resp_57 = this.formulario[i].id  
              this.resp_57 = this.formulario[i].respuesta
              break
              case "T13 (10728 V) Segundo":
              this.resp_58 = this.formulario[i].id  
              this.resp_58 = this.formulario[i].respuesta
              break
              case "T1 (10728 H) Tercero":
              this.resp_59 = this.formulario[i].id  
              this.resp_59 = this.formulario[i].respuesta
              break
              case "T2 (10768 H) Tercero":
              this.resp_60 = this.formulario[i].id  
              this.resp_60 = this.formulario[i].respuesta
              break
              case "T3 (10808 H) Tercero":
              this.resp_61 = this.formulario[i].id  
              this.resp_61 = this.formulario[i].respuesta
              break
              case "T4 (10808 H) Tercero":
              this.resp_62 = this.formulario[i].id  
              this.resp_62 = this.formulario[i].respuesta
              break
              case "T5 (10888 H) Tercero":
              this.resp_63 = this.formulario[i].id  
              this.resp_63 = this.formulario[i].respuesta
              break
              case "T6 (10928 H) Tercero":
              this.resp_64 = this.formulario[i].id  
              this.resp_64 = this.formulario[i].respuesta
              break
              case "T7 (11222 H) Tercero":
              this.resp_65 = this.formulario[i].id  
              this.resp_65 = this.formulario[i].respuesta
              break
              case "T8 (11262 H) Tercero":
              this.resp_66 = this.formulario[i].id  
              this.resp_66 = this.formulario[i].respuesta
              break
              case "T9 (11302 H) Tercero":
              this.resp_67 = this.formulario[i].id  
              this.resp_67 = this.formulario[i].respuesta
              break
              case "T10 (11342 H) Tercero":
              this.resp_68 = this.formulario[i].id  
              this.resp_68 = this.formulario[i].respuesta
              break
              case "T11 (1382 H) Tercero":
              this.resp_69 = this.formulario[i].id  
              this.resp_69 = this.formulario[i].respuesta
              break
              case "T12 (11422 H) Tercero":
              this.resp_70 = this.formulario[i].id  
              this.resp_70 = this.formulario[i].respuesta
              break
              case "T13 (10728 V) Tercero":
              this.resp_71 = this.formulario[i].id  
              this.resp_71 = this.formulario[i].respuesta
              break
              case "Observaciones":
              this.resp_72 = this.formulario[i].id  
              this.resp_72 = this.formulario[i].respuesta
              break
              case "Utiliza material con autorización cliente":
              this.resp_73 = this.formulario[i].id  
              this.resp_73 = this.formulario[i].respuesta
              break
              case "Soluciones":
              this.resp_74 = this.formulario[i].id  
              this.resp_74 = this.formulario[i].respuesta
              break
              case "Cable Entel utilizado":
              this.resp_75 = this.formulario[i].id  
              this.resp_75 = this.formulario[i].respuesta
              break
              case "Se realiza reparación menor":
              this.resp_76 = this.formulario[i].id  
              this.resp_76 = this.formulario[i].respuesta
              break
              case "Conectores":
              this.resp_77 = this.formulario[i].id  
              this.resp_77 = this.formulario[i].respuesta
              break
              case "Amarras":
              this.resp_78 = this.formulario[i].id  
              this.resp_78 = this.formulario[i].respuesta
              break
              case "Pasamuros utilizados":
              this.resp_79 = this.formulario[i].id  
              this.resp_79 = this.formulario[i].respuesta
              break
              case "Tirafondos instalados":
              this.resp_80 = this.formulario[i].id  
              this.resp_80 = this.formulario[i].respuesta
              break
              case "Voltaje Fase Neutro":
              this.resp_81 = this.formulario[i].id  
              this.resp_81 = this.formulario[i].respuesta
              break
              case "Voltaje Fase Tierra":
              this.resp_82 = this.formulario[i].id  
              this.resp_82 = this.formulario[i].respuesta
              break
              case "Voltaje Neutro Tierra":
              this.resp_83 = this.formulario[i].id  
              this.resp_83 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
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

  actualizarFormulario(){
    console.log('Actualizando Formulario')
    let loading = this.loadingCtrl.create({
      content: 'Enviando formulario'
    })
    loading.present()
    switch(this.tipoFormulario){
      case 'instalacion hfc':
        this.instalacionesHfcForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.instalacionesHfcForm.value.id_folio_servicio = this.id_folio_servicio
        this.instalacionesHfcForm.value.id_resp_1 = this.id_resp_1
        this.instalacionesHfcForm.value.id_resp_2 = this.id_resp_2
        this.instalacionesHfcForm.value.id_resp_3 = this.id_resp_3
        this.instalacionesHfcForm.value.id_resp_4 = this.id_resp_4
        this.instalacionesHfcForm.value.id_resp_5 = this.id_resp_5
        this.instalacionesHfcForm.value.id_resp_6 = this.id_resp_6
        this.instalacionesHfcForm.value.id_resp_7 = this.id_resp_7
        this.instalacionesHfcForm.value.id_resp_8 = this.id_resp_8
        this.instalacionesHfcForm.value.id_resp_9 = this.id_resp_9
        this.instalacionesHfcForm.value.id_resp_10 = this.id_resp_10
        this.instalacionesHfcForm.value.id_resp_11 = this.id_resp_11
        this.instalacionesHfcForm.value.id_resp_12 = this.id_resp_12
        this.instalacionesHfcForm.value.id_resp_13 = this.id_resp_13
        this.instalacionesHfcForm.value.id_resp_14 = this.id_resp_14
        this.instalacionesHfcForm.value.id_resp_15 = this.id_resp_15
        this.instalacionesHfcForm.value.id_resp_16 = this.id_resp_16
        this.instalacionesHfcForm.value.id_resp_17 = this.id_resp_17
        this.instalacionesHfcForm.value.id_resp_18 = this.id_resp_18
        this.instalacionesHfcForm.value.id_resp_19 = this.id_resp_19
        this.instalacionesHfcForm.value.id_resp_20 = this.id_resp_20
        this.instalacionesHfcForm.value.id_resp_21 = this.id_resp_21
        this.instalacionesHfcForm.value.id_resp_22 = this.id_resp_22
        this.instalacionesHfcForm.value.id_resp_23 = this.id_resp_23
        this.instalacionesHfcForm.value.id_resp_24 = this.id_resp_24
        this.instalacionesHfcForm.value.id_resp_25 = this.id_resp_25
        this.instalacionesHfcForm.value.id_resp_26 = this.id_resp_26
        this.instalacionesHfcForm.value.id_resp_27 = this.id_resp_27
        this.instalacionesHfcForm.value.id_resp_28 = this.id_resp_28
        this.instalacionesHfcForm.value.id_resp_29 = this.id_resp_29
        this.instalacionesHfcForm.value.id_resp_30 = this.id_resp_30
        this.instalacionesHfcForm.value.id_resp_31 = this.id_resp_31
        this.instalacionesHfcForm.value.id_resp_32 = this.id_resp_32
        this.instalacionesHfcForm.value.id_resp_33 = this.id_resp_33
        this.instalacionesHfcForm.value.id_resp_34 = this.id_resp_34
        this.instalacionesHfcForm.value.id_resp_35 = this.id_resp_35
        this.instalacionesHfcForm.value.id_resp_36 = this.id_resp_36
        this.instalacionesHfcForm.value.id_resp_37 = this.id_resp_37
        this.instalacionesHfcForm.value.id_resp_38 = this.id_resp_38
        this.instalacionesHfcForm.value.id_resp_39 = this.id_resp_39
        this.instalacionesHfcForm.value.id_resp_40 = this.id_resp_40
        this.instalacionesHfcForm.value.id_resp_41 = this.id_resp_41
        this.instalacionesHfcForm.value.id_resp_42 = this.id_resp_42
        this.instalacionesHfcForm.value.id_resp_43 = this.id_resp_43
        this.instalacionesHfcForm.value.id_resp_44 = this.id_resp_44
        this.instalacionesHfcForm.value.id_resp_45 = this.id_resp_45
        this.instalacionesHfcForm.value.id_resp_46 = this.id_resp_46
        this.instalacionesHfcForm.value.id_resp_47 = this.id_resp_47
        this.instalacionesHfcForm.value.id_resp_48 = this.id_resp_48
        this.instalacionesHfcForm.value.id_resp_49 = this.id_resp_49
        this.instalacionesHfcForm.value.id_resp_50 = this.id_resp_50
        this.instalacionesHfcForm.value.id_resp_51 = this.id_resp_51
        this.instalacionesHfcForm.value.id_resp_52 = this.id_resp_52
        this.instalacionesHfcForm.value.id_resp_53 = this.id_resp_53
        this.instalacionesHfcForm.value.id_resp_54 = this.id_resp_54
        this.instalacionesHfcForm.value.id_resp_55 = this.id_resp_55
        this.instalacionesHfcForm.value.id_resp_56 = this.id_resp_56
        this.instalacionesHfcForm.value.id_resp_57 = this.id_resp_57
        this.instalacionesHfcForm.value.id_resp_58 = this.id_resp_58
        this.instalacionesHfcForm.value.id_resp_59 = this.id_resp_59
        this.instalacionesHfcForm.value.id_resp_60 = this.id_resp_60
        this.instalacionesHfcForm.value.id_resp_61 = this.id_resp_61
        this.instalacionesHfcForm.value.id_resp_62 = this.id_resp_62
        this.instalacionesHfcForm.value.id_resp_63 = this.id_resp_63
        this.instalacionesHfcForm.value.id_resp_64 = this.id_resp_64
        this.instalacionesHfcForm.value.id_resp_65 = this.id_resp_65
        this.instalacionesHfcForm.value.id_resp_66 = this.id_resp_66
        this.instalacionesHfcForm.value.id_resp_67 = this.id_resp_67
        this.instalacionesHfcForm.value.id_resp_68 = this.id_resp_68
        this.instalacionesHfcForm.value.id_resp_69 = this.id_resp_69
        this.instalacionesHfcForm.value.id_resp_70 = this.id_resp_70
        this.instalacionesHfcForm.value.id_resp_71 = this.id_resp_71
        this.instalacionesHfcForm.value.id_resp_72 = this.id_resp_72
        this.instalacionesHfcForm.value.id_resp_73 = this.id_resp_73
        this.instalacionesHfcForm.value.id_resp_74 = this.id_resp_74
        this.instalacionesHfcForm.value.id_resp_75 = this.id_resp_75
        this.instalacionesHfcForm.value.id_resp_76 = this.id_resp_76
        this.instalacionesHfcForm.value.id_resp_77 = this.id_resp_77
        this.instalacionesHfcForm.value.id_resp_78 = this.id_resp_78
        this.instalacionesHfcForm.value.id_resp_79 = this.id_resp_79
        this.instalacionesHfcForm.value.id_resp_80 = this.id_resp_80
        this.instalacionesHfcForm.value.id_resp_81 = this.id_resp_81
        this.instalacionesHfcForm.value.id_resp_82 = this.id_resp_82
        this.instalacionesHfcForm.value.id_resp_83 = this.id_resp_83
        this.instalacionesHfcForm.value.id_resp_84 = this.id_resp_84
        this.instalacionesHfcForm.value.id_resp_85 = this.id_resp_85
        this.instalacionesHfcForm.value.id_resp_86 = this.id_resp_86
        this.instalacionesHfcForm.value.id_resp_87 = this.id_resp_87
        this.instalacionesHfcForm.value.id_resp_88 = this.id_resp_88
        this.instalacionesHfcForm.value.id_resp_89 = this.id_resp_89
        this.formulario = this.instalacionesHfcForm.value
      break
      case 'instalacion dth':
        this.instalacionesDthForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.instalacionesDthForm.value.id_folio_servicio = this.id_folio_servicio
        this.instalacionesDthForm.value.id_resp_1 = this.id_resp_1
        this.instalacionesDthForm.value.id_resp_2 = this.id_resp_2
        this.instalacionesDthForm.value.id_resp_3 = this.id_resp_3
        this.instalacionesDthForm.value.id_resp_4 = this.id_resp_4
        this.instalacionesDthForm.value.id_resp_5 = this.id_resp_5
        this.instalacionesDthForm.value.id_resp_6 = this.id_resp_6
        this.instalacionesDthForm.value.id_resp_7 = this.id_resp_7
        this.instalacionesDthForm.value.id_resp_8 = this.id_resp_8
        this.instalacionesDthForm.value.id_resp_9 = this.id_resp_9
        this.instalacionesDthForm.value.id_resp_10 = this.id_resp_10
        this.instalacionesDthForm.value.id_resp_11 = this.id_resp_11
        this.instalacionesDthForm.value.id_resp_12 = this.id_resp_12
        this.instalacionesDthForm.value.id_resp_13 = this.id_resp_13
        this.instalacionesDthForm.value.id_resp_14 = this.id_resp_14
        this.instalacionesDthForm.value.id_resp_15 = this.id_resp_15
        this.instalacionesDthForm.value.id_resp_16 = this.id_resp_16
        this.instalacionesDthForm.value.id_resp_17 = this.id_resp_17
        this.instalacionesDthForm.value.id_resp_18 = this.id_resp_18
        this.instalacionesDthForm.value.id_resp_19 = this.id_resp_19
        this.instalacionesDthForm.value.id_resp_20 = this.id_resp_20
        this.instalacionesDthForm.value.id_resp_21 = this.id_resp_21
        this.instalacionesDthForm.value.id_resp_22 = this.id_resp_22
        this.instalacionesDthForm.value.id_resp_23 = this.id_resp_23
        this.instalacionesDthForm.value.id_resp_24 = this.id_resp_24
        this.instalacionesDthForm.value.id_resp_25 = this.id_resp_25
        this.instalacionesDthForm.value.id_resp_26 = this.id_resp_26
        this.instalacionesDthForm.value.id_resp_27 = this.id_resp_27
        this.instalacionesDthForm.value.id_resp_28 = this.id_resp_28
        this.instalacionesDthForm.value.id_resp_29 = this.id_resp_29
        this.instalacionesDthForm.value.id_resp_30 = this.id_resp_30
        this.instalacionesDthForm.value.id_resp_31 = this.id_resp_31
        this.instalacionesDthForm.value.id_resp_32 = this.id_resp_32
        this.instalacionesDthForm.value.id_resp_33 = this.id_resp_33
        this.instalacionesDthForm.value.id_resp_34 = this.id_resp_34
        this.instalacionesDthForm.value.id_resp_35 = this.id_resp_35
        this.instalacionesDthForm.value.id_resp_36 = this.id_resp_36
        this.instalacionesDthForm.value.id_resp_37 = this.id_resp_37
        this.instalacionesDthForm.value.id_resp_38 = this.id_resp_38
        this.instalacionesDthForm.value.id_resp_39 = this.id_resp_39
        this.instalacionesDthForm.value.id_resp_40 = this.id_resp_40
        this.instalacionesDthForm.value.id_resp_41 = this.id_resp_41
        this.instalacionesDthForm.value.id_resp_42 = this.id_resp_42
        this.instalacionesDthForm.value.id_resp_43 = this.id_resp_43
        this.instalacionesDthForm.value.id_resp_44 = this.id_resp_44
        this.instalacionesDthForm.value.id_resp_45 = this.id_resp_45
        this.instalacionesDthForm.value.id_resp_46 = this.id_resp_46
        this.instalacionesDthForm.value.id_resp_47 = this.id_resp_47
        this.instalacionesDthForm.value.id_resp_48 = this.id_resp_48
        this.instalacionesDthForm.value.id_resp_49 = this.id_resp_49
        this.instalacionesDthForm.value.id_resp_50 = this.id_resp_50
        this.instalacionesDthForm.value.id_resp_51 = this.id_resp_51
        this.instalacionesDthForm.value.id_resp_52 = this.id_resp_52
        this.instalacionesDthForm.value.id_resp_53 = this.id_resp_53
        this.instalacionesDthForm.value.id_resp_54 = this.id_resp_54
        this.instalacionesDthForm.value.id_resp_55 = this.id_resp_55
        this.instalacionesDthForm.value.id_resp_56 = this.id_resp_56
        this.instalacionesDthForm.value.id_resp_57 = this.id_resp_57
        this.instalacionesDthForm.value.id_resp_58 = this.id_resp_58
        this.instalacionesDthForm.value.id_resp_59 = this.id_resp_59
        this.instalacionesDthForm.value.id_resp_60 = this.id_resp_60
        this.instalacionesDthForm.value.id_resp_61 = this.id_resp_61
        this.instalacionesDthForm.value.id_resp_62 = this.id_resp_62
        this.instalacionesDthForm.value.id_resp_63 = this.id_resp_63
        this.instalacionesDthForm.value.id_resp_64 = this.id_resp_64
        this.instalacionesDthForm.value.id_resp_65 = this.id_resp_65
        this.instalacionesDthForm.value.id_resp_66 = this.id_resp_66
        this.instalacionesDthForm.value.id_resp_67 = this.id_resp_67
        this.instalacionesDthForm.value.id_resp_68 = this.id_resp_68
        this.instalacionesDthForm.value.id_resp_69 = this.id_resp_69
        this.instalacionesDthForm.value.id_resp_70 = this.id_resp_70
        this.instalacionesDthForm.value.id_resp_71 = this.id_resp_71
        this.instalacionesDthForm.value.id_resp_72 = this.id_resp_72
        this.instalacionesDthForm.value.id_resp_73 = this.id_resp_73
        this.instalacionesDthForm.value.id_resp_74 = this.id_resp_74
        this.instalacionesDthForm.value.id_resp_75 = this.id_resp_75
        this.instalacionesDthForm.value.id_resp_76 = this.id_resp_76
        this.instalacionesDthForm.value.id_resp_77 = this.id_resp_77
        this.instalacionesDthForm.value.id_resp_78 = this.id_resp_78
        this.instalacionesDthForm.value.id_resp_79 = this.id_resp_79
        this.instalacionesDthForm.value.id_resp_80 = this.id_resp_80
        this.instalacionesDthForm.value.id_resp_81 = this.id_resp_81
        this.instalacionesDthForm.value.id_resp_82 = this.id_resp_82
        this.instalacionesDthForm.value.id_resp_83 = this.id_resp_83
        this.instalacionesDthForm.value.id_resp_84 = this.id_resp_84
        this.instalacionesDthForm.value.id_resp_85 = this.id_resp_85
        this.instalacionesDthForm.value.id_resp_86 = this.id_resp_86
        this.instalacionesDthForm.value.id_resp_87 = this.id_resp_87
        this.instalacionesDthForm.value.id_resp_88 = this.id_resp_88
        this.instalacionesDthForm.value.id_resp_89 = this.id_resp_89
        this.formulario = this.instalacionesDthForm.value
      break
      case 'mantencion hfc':
        this.mantencionesHfcForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.mantencionesHfcForm.value.id_folio_servicio = this.id_folio_servicio
        this.mantencionesHfcForm.value.id_resp_1 = this.id_resp_1
        this.mantencionesHfcForm.value.id_resp_2 = this.id_resp_2
        this.mantencionesHfcForm.value.id_resp_3 = this.id_resp_3
        this.mantencionesHfcForm.value.id_resp_4 = this.id_resp_4
        this.mantencionesHfcForm.value.id_resp_5 = this.id_resp_5
        this.mantencionesHfcForm.value.id_resp_6 = this.id_resp_6
        this.mantencionesHfcForm.value.id_resp_7 = this.id_resp_7
        this.mantencionesHfcForm.value.id_resp_8 = this.id_resp_8
        this.mantencionesHfcForm.value.id_resp_9 = this.id_resp_9
        this.mantencionesHfcForm.value.id_resp_10 = this.id_resp_10
        this.mantencionesHfcForm.value.id_resp_11 = this.id_resp_11
        this.mantencionesHfcForm.value.id_resp_12 = this.id_resp_12
        this.mantencionesHfcForm.value.id_resp_13 = this.id_resp_13
        this.mantencionesHfcForm.value.id_resp_14 = this.id_resp_14
        this.mantencionesHfcForm.value.id_resp_15 = this.id_resp_15
        this.mantencionesHfcForm.value.id_resp_16 = this.id_resp_16
        this.mantencionesHfcForm.value.id_resp_17 = this.id_resp_17
        this.mantencionesHfcForm.value.id_resp_18 = this.id_resp_18
        this.mantencionesHfcForm.value.id_resp_19 = this.id_resp_19
        this.mantencionesHfcForm.value.id_resp_20 = this.id_resp_20
        this.mantencionesHfcForm.value.id_resp_21 = this.id_resp_21
        this.mantencionesHfcForm.value.id_resp_22 = this.id_resp_22
        this.mantencionesHfcForm.value.id_resp_23 = this.id_resp_23
        this.mantencionesHfcForm.value.id_resp_24 = this.id_resp_24
        this.mantencionesHfcForm.value.id_resp_25 = this.id_resp_25
        this.mantencionesHfcForm.value.id_resp_26 = this.id_resp_26
        this.mantencionesHfcForm.value.id_resp_27 = this.id_resp_27
        this.mantencionesHfcForm.value.id_resp_28 = this.id_resp_28
        this.mantencionesHfcForm.value.id_resp_29 = this.id_resp_29
        this.mantencionesHfcForm.value.id_resp_30 = this.id_resp_30
        this.mantencionesHfcForm.value.id_resp_31 = this.id_resp_31
        this.mantencionesHfcForm.value.id_resp_32 = this.id_resp_32
        this.mantencionesHfcForm.value.id_resp_33 = this.id_resp_33
        this.mantencionesHfcForm.value.id_resp_34 = this.id_resp_34
        this.mantencionesHfcForm.value.id_resp_35 = this.id_resp_35
        this.mantencionesHfcForm.value.id_resp_36 = this.id_resp_36
        this.mantencionesHfcForm.value.id_resp_37 = this.id_resp_37
        this.mantencionesHfcForm.value.id_resp_38 = this.id_resp_38
        this.mantencionesHfcForm.value.id_resp_39 = this.id_resp_39
        this.mantencionesHfcForm.value.id_resp_40 = this.id_resp_40
        this.mantencionesHfcForm.value.id_resp_41 = this.id_resp_41
        this.mantencionesHfcForm.value.id_resp_42 = this.id_resp_42
        this.mantencionesHfcForm.value.id_resp_43 = this.id_resp_43
        this.mantencionesHfcForm.value.id_resp_44 = this.id_resp_44
        this.mantencionesHfcForm.value.id_resp_45 = this.id_resp_45
        this.mantencionesHfcForm.value.id_resp_46 = this.id_resp_46
        this.mantencionesHfcForm.value.id_resp_47 = this.id_resp_47
        this.mantencionesHfcForm.value.id_resp_48 = this.id_resp_48
        this.mantencionesHfcForm.value.id_resp_49 = this.id_resp_49
        this.mantencionesHfcForm.value.id_resp_50 = this.id_resp_50
        this.mantencionesHfcForm.value.id_resp_51 = this.id_resp_51
        this.mantencionesHfcForm.value.id_resp_52 = this.id_resp_52
        this.mantencionesHfcForm.value.id_resp_53 = this.id_resp_53
        this.mantencionesHfcForm.value.id_resp_54 = this.id_resp_54
        this.mantencionesHfcForm.value.id_resp_55 = this.id_resp_55
        this.mantencionesHfcForm.value.id_resp_56 = this.id_resp_56
        this.mantencionesHfcForm.value.id_resp_57 = this.id_resp_57
        this.mantencionesHfcForm.value.id_resp_58 = this.id_resp_58
        this.mantencionesHfcForm.value.id_resp_59 = this.id_resp_59
        this.mantencionesHfcForm.value.id_resp_60 = this.id_resp_60
        this.mantencionesHfcForm.value.id_resp_61 = this.id_resp_61
        this.mantencionesHfcForm.value.id_resp_62 = this.id_resp_62
        this.mantencionesHfcForm.value.id_resp_63 = this.id_resp_63
        this.mantencionesHfcForm.value.id_resp_64 = this.id_resp_64
        this.mantencionesHfcForm.value.id_resp_65 = this.id_resp_65
        this.mantencionesHfcForm.value.id_resp_66 = this.id_resp_66
        this.mantencionesHfcForm.value.id_resp_67 = this.id_resp_67
        this.mantencionesHfcForm.value.id_resp_68 = this.id_resp_68
        this.mantencionesHfcForm.value.id_resp_69 = this.id_resp_69
        this.mantencionesHfcForm.value.id_resp_70 = this.id_resp_70
        this.mantencionesHfcForm.value.id_resp_71 = this.id_resp_71
        this.mantencionesHfcForm.value.id_resp_72 = this.id_resp_72
        this.mantencionesHfcForm.value.id_resp_73 = this.id_resp_73
        this.mantencionesHfcForm.value.id_resp_74 = this.id_resp_74
        this.mantencionesHfcForm.value.id_resp_75 = this.id_resp_75
        this.mantencionesHfcForm.value.id_resp_76 = this.id_resp_76
        this.mantencionesHfcForm.value.id_resp_77 = this.id_resp_77
        this.mantencionesHfcForm.value.id_resp_78 = this.id_resp_78
        this.mantencionesHfcForm.value.id_resp_79 = this.id_resp_79
        this.mantencionesHfcForm.value.id_resp_80 = this.id_resp_80
        this.mantencionesHfcForm.value.id_resp_81 = this.id_resp_81
        this.mantencionesHfcForm.value.id_resp_82 = this.id_resp_82
        this.mantencionesHfcForm.value.id_resp_83 = this.id_resp_83
        this.mantencionesHfcForm.value.id_resp_84 = this.id_resp_84
        this.mantencionesHfcForm.value.id_resp_85 = this.id_resp_85
        this.mantencionesHfcForm.value.id_resp_86 = this.id_resp_86
        this.formulario = this.mantencionesHfcForm.value
      break
      case 'mantencion dth':
        this.mantencionesDthForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.mantencionesDthForm.value.id_folio_servicio = this.id_folio_servicio
        this.mantencionesDthForm.value.id_resp_1 = this.id_resp_1
        this.mantencionesDthForm.value.id_resp_2 = this.id_resp_2
        this.mantencionesDthForm.value.id_resp_3 = this.id_resp_3
        this.mantencionesDthForm.value.id_resp_4 = this.id_resp_4
        this.mantencionesDthForm.value.id_resp_5 = this.id_resp_5
        this.mantencionesDthForm.value.id_resp_6 = this.id_resp_6
        this.mantencionesDthForm.value.id_resp_7 = this.id_resp_7
        this.mantencionesDthForm.value.id_resp_8 = this.id_resp_8
        this.mantencionesDthForm.value.id_resp_9 = this.id_resp_9
        this.mantencionesDthForm.value.id_resp_10 = this.id_resp_10
        this.mantencionesDthForm.value.id_resp_11 = this.id_resp_11
        this.mantencionesDthForm.value.id_resp_12 = this.id_resp_12
        this.mantencionesDthForm.value.id_resp_13 = this.id_resp_13
        this.mantencionesDthForm.value.id_resp_14 = this.id_resp_14
        this.mantencionesDthForm.value.id_resp_15 = this.id_resp_15
        this.mantencionesDthForm.value.id_resp_16 = this.id_resp_16
        this.mantencionesDthForm.value.id_resp_17 = this.id_resp_17
        this.mantencionesDthForm.value.id_resp_18 = this.id_resp_18
        this.mantencionesDthForm.value.id_resp_19 = this.id_resp_19
        this.mantencionesDthForm.value.id_resp_20 = this.id_resp_20
        this.mantencionesDthForm.value.id_resp_21 = this.id_resp_21
        this.mantencionesDthForm.value.id_resp_22 = this.id_resp_22
        this.mantencionesDthForm.value.id_resp_23 = this.id_resp_23
        this.mantencionesDthForm.value.id_resp_24 = this.id_resp_24
        this.mantencionesDthForm.value.id_resp_25 = this.id_resp_25
        this.mantencionesDthForm.value.id_resp_26 = this.id_resp_26
        this.mantencionesDthForm.value.id_resp_27 = this.id_resp_27
        this.mantencionesDthForm.value.id_resp_28 = this.id_resp_28
        this.mantencionesDthForm.value.id_resp_29 = this.id_resp_29
        this.mantencionesDthForm.value.id_resp_30 = this.id_resp_30
        this.mantencionesDthForm.value.id_resp_31 = this.id_resp_31
        this.mantencionesDthForm.value.id_resp_32 = this.id_resp_32
        this.mantencionesDthForm.value.id_resp_33 = this.id_resp_33
        this.mantencionesDthForm.value.id_resp_34 = this.id_resp_34
        this.mantencionesDthForm.value.id_resp_35 = this.id_resp_35
        this.mantencionesDthForm.value.id_resp_36 = this.id_resp_36
        this.mantencionesDthForm.value.id_resp_37 = this.id_resp_37
        this.mantencionesDthForm.value.id_resp_38 = this.id_resp_38
        this.mantencionesDthForm.value.id_resp_39 = this.id_resp_39
        this.mantencionesDthForm.value.id_resp_40 = this.id_resp_40
        this.mantencionesDthForm.value.id_resp_41 = this.id_resp_41
        this.mantencionesDthForm.value.id_resp_42 = this.id_resp_42
        this.mantencionesDthForm.value.id_resp_43 = this.id_resp_43
        this.mantencionesDthForm.value.id_resp_44 = this.id_resp_44
        this.mantencionesDthForm.value.id_resp_45 = this.id_resp_45
        this.mantencionesDthForm.value.id_resp_46 = this.id_resp_46
        this.mantencionesDthForm.value.id_resp_47 = this.id_resp_47
        this.mantencionesDthForm.value.id_resp_48 = this.id_resp_48
        this.mantencionesDthForm.value.id_resp_49 = this.id_resp_49
        this.mantencionesDthForm.value.id_resp_50 = this.id_resp_50
        this.mantencionesDthForm.value.id_resp_51 = this.id_resp_51
        this.mantencionesDthForm.value.id_resp_52 = this.id_resp_52
        this.mantencionesDthForm.value.id_resp_53 = this.id_resp_53
        this.mantencionesDthForm.value.id_resp_54 = this.id_resp_54
        this.mantencionesDthForm.value.id_resp_55 = this.id_resp_55
        this.mantencionesDthForm.value.id_resp_56 = this.id_resp_56
        this.mantencionesDthForm.value.id_resp_57 = this.id_resp_57
        this.mantencionesDthForm.value.id_resp_58 = this.id_resp_58
        this.mantencionesDthForm.value.id_resp_59 = this.id_resp_59
        this.mantencionesDthForm.value.id_resp_60 = this.id_resp_60
        this.mantencionesDthForm.value.id_resp_61 = this.id_resp_61
        this.mantencionesDthForm.value.id_resp_62 = this.id_resp_62
        this.mantencionesDthForm.value.id_resp_63 = this.id_resp_63
        this.mantencionesDthForm.value.id_resp_64 = this.id_resp_64
        this.mantencionesDthForm.value.id_resp_65 = this.id_resp_65
        this.mantencionesDthForm.value.id_resp_66 = this.id_resp_66
        this.mantencionesDthForm.value.id_resp_67 = this.id_resp_67
        this.mantencionesDthForm.value.id_resp_68 = this.id_resp_68
        this.mantencionesDthForm.value.id_resp_69 = this.id_resp_69
        this.mantencionesDthForm.value.id_resp_70 = this.id_resp_70
        this.mantencionesDthForm.value.id_resp_71 = this.id_resp_71
        this.mantencionesDthForm.value.id_resp_72 = this.id_resp_72
        this.mantencionesDthForm.value.id_resp_73 = this.id_resp_73
        this.mantencionesDthForm.value.id_resp_74 = this.id_resp_74
        this.mantencionesDthForm.value.id_resp_75 = this.id_resp_75
        this.mantencionesDthForm.value.id_resp_76 = this.id_resp_76
        this.mantencionesDthForm.value.id_resp_77 = this.id_resp_77
        this.mantencionesDthForm.value.id_resp_78 = this.id_resp_78
        this.mantencionesDthForm.value.id_resp_79 = this.id_resp_79
        this.mantencionesDthForm.value.id_resp_80 = this.id_resp_80
        this.mantencionesDthForm.value.id_resp_81 = this.id_resp_81
        this.mantencionesDthForm.value.id_resp_82 = this.id_resp_82
        this.mantencionesDthForm.value.id_resp_83 = this.id_resp_83
        this.mantencionesDthForm.value.id_resp_84 = this.id_resp_84
        this.mantencionesDthForm.value.id_resp_85 = this.id_resp_85
        this.mantencionesDthForm.value.id_resp_86 = this.id_resp_86
        this.formulario = this.mantencionesDthForm.value
      break
      case 'desconexion':
        this.desconexionForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.desconexionForm.value.id_folio_servicio = this.id_folio_servicio
        this.desconexionForm.value.id_resp_1 = this.id_resp_1
        this.desconexionForm.value.id_resp_2 = this.id_resp_2
        this.desconexionForm.value.id_resp_3 = this.id_resp_3
        this.desconexionForm.value.id_resp_4 = this.id_resp_4
        this.desconexionForm.value.id_resp_5 = this.id_resp_5
        this.desconexionForm.value.id_resp_6 = this.id_resp_6
        this.desconexionForm.value.id_resp_7 = this.id_resp_7
        this.desconexionForm.value.id_resp_8 = this.id_resp_8
        this.formulario = this.desconexionForm.value
      break
      case 'instalacion dth entel':
        this.instalacionesDthEntelForm.value.id_ot_servicorp = this.id_ot_servicorp
        this.instalacionesDthEntelForm.value.id_folio_servicio = this.id_folio_servicio
        this.instalacionesDthEntelForm.value.id_resp_1 = this.id_resp_1
        this.instalacionesDthEntelForm.value.id_resp_2 = this.id_resp_2
        this.instalacionesDthEntelForm.value.id_resp_3 = this.id_resp_3
        this.instalacionesDthEntelForm.value.id_resp_4 = this.id_resp_4
        this.instalacionesDthEntelForm.value.id_resp_5 = this.id_resp_5
        this.instalacionesDthEntelForm.value.id_resp_6 = this.id_resp_6
        this.instalacionesDthEntelForm.value.id_resp_7 = this.id_resp_7
        this.instalacionesDthEntelForm.value.id_resp_8 = this.id_resp_8
        this.instalacionesDthEntelForm.value.id_resp_9 = this.id_resp_9
        this.instalacionesDthEntelForm.value.id_resp_10 = this.id_resp_10
        this.instalacionesDthEntelForm.value.id_resp_11 = this.id_resp_11
        this.instalacionesDthEntelForm.value.id_resp_12 = this.id_resp_12
        this.instalacionesDthEntelForm.value.id_resp_13 = this.id_resp_13
        this.instalacionesDthEntelForm.value.id_resp_14 = this.id_resp_14
        this.instalacionesDthEntelForm.value.id_resp_15 = this.id_resp_15
        this.instalacionesDthEntelForm.value.id_resp_16 = this.id_resp_16
        this.instalacionesDthEntelForm.value.id_resp_17 = this.id_resp_17
        this.instalacionesDthEntelForm.value.id_resp_18 = this.id_resp_18
        this.instalacionesDthEntelForm.value.id_resp_19 = this.id_resp_19
        this.instalacionesDthEntelForm.value.id_resp_20 = this.id_resp_20
        this.instalacionesDthEntelForm.value.id_resp_21 = this.id_resp_21
        this.instalacionesDthEntelForm.value.id_resp_22 = this.id_resp_22
        this.instalacionesDthEntelForm.value.id_resp_23 = this.id_resp_23
        this.instalacionesDthEntelForm.value.id_resp_24 = this.id_resp_24
        this.instalacionesDthEntelForm.value.id_resp_25 = this.id_resp_25
        this.instalacionesDthEntelForm.value.id_resp_26 = this.id_resp_26
        this.instalacionesDthEntelForm.value.id_resp_27 = this.id_resp_27
        this.instalacionesDthEntelForm.value.id_resp_28 = this.id_resp_28
        this.instalacionesDthEntelForm.value.id_resp_29 = this.id_resp_29
        this.instalacionesDthEntelForm.value.id_resp_30 = this.id_resp_30
        this.instalacionesDthEntelForm.value.id_resp_31 = this.id_resp_31
        this.instalacionesDthEntelForm.value.id_resp_32 = this.id_resp_32
        this.instalacionesDthEntelForm.value.id_resp_33 = this.id_resp_33
        this.instalacionesDthEntelForm.value.id_resp_34 = this.id_resp_34
        this.instalacionesDthEntelForm.value.id_resp_35 = this.id_resp_35
        this.instalacionesDthEntelForm.value.id_resp_36 = this.id_resp_36
        this.instalacionesDthEntelForm.value.id_resp_37 = this.id_resp_37
        this.instalacionesDthEntelForm.value.id_resp_38 = this.id_resp_38
        this.instalacionesDthEntelForm.value.id_resp_39 = this.id_resp_39
        this.instalacionesDthEntelForm.value.id_resp_40 = this.id_resp_40
        this.instalacionesDthEntelForm.value.id_resp_41 = this.id_resp_41
        this.instalacionesDthEntelForm.value.id_resp_42 = this.id_resp_42
        this.instalacionesDthEntelForm.value.id_resp_43 = this.id_resp_43
        this.instalacionesDthEntelForm.value.id_resp_44 = this.id_resp_44
        this.instalacionesDthEntelForm.value.id_resp_45 = this.id_resp_45
        this.instalacionesDthEntelForm.value.id_resp_46 = this.id_resp_46
        this.instalacionesDthEntelForm.value.id_resp_47 = this.id_resp_47
        this.instalacionesDthEntelForm.value.id_resp_48 = this.id_resp_48
        this.instalacionesDthEntelForm.value.id_resp_49 = this.id_resp_49
        this.instalacionesDthEntelForm.value.id_resp_50 = this.id_resp_50
        this.instalacionesDthEntelForm.value.id_resp_51 = this.id_resp_51
        this.instalacionesDthEntelForm.value.id_resp_52 = this.id_resp_52
        this.instalacionesDthEntelForm.value.id_resp_53 = this.id_resp_53
        this.instalacionesDthEntelForm.value.id_resp_54 = this.id_resp_54
        this.instalacionesDthEntelForm.value.id_resp_55 = this.id_resp_55
        this.instalacionesDthEntelForm.value.id_resp_56 = this.id_resp_56
        this.instalacionesDthEntelForm.value.id_resp_57 = this.id_resp_57
        this.instalacionesDthEntelForm.value.id_resp_58 = this.id_resp_58
        this.instalacionesDthEntelForm.value.id_resp_59 = this.id_resp_59
        this.instalacionesDthEntelForm.value.id_resp_60 = this.id_resp_60
        this.instalacionesDthEntelForm.value.id_resp_61 = this.id_resp_61
        this.instalacionesDthEntelForm.value.id_resp_62 = this.id_resp_62
        this.instalacionesDthEntelForm.value.id_resp_63 = this.id_resp_63
        this.instalacionesDthEntelForm.value.id_resp_64 = this.id_resp_64
        this.instalacionesDthEntelForm.value.id_resp_65 = this.id_resp_65
        this.instalacionesDthEntelForm.value.id_resp_66 = this.id_resp_66
        this.instalacionesDthEntelForm.value.id_resp_67 = this.id_resp_67
        this.instalacionesDthEntelForm.value.id_resp_68 = this.id_resp_68
        this.instalacionesDthEntelForm.value.id_resp_69 = this.id_resp_69
        this.instalacionesDthEntelForm.value.id_resp_70 = this.id_resp_70
        this.instalacionesDthEntelForm.value.id_resp_71 = this.id_resp_71
        this.instalacionesDthEntelForm.value.id_resp_72 = this.id_resp_72
        this.instalacionesDthEntelForm.value.id_resp_73 = this.id_resp_73
        this.instalacionesDthEntelForm.value.id_resp_74 = this.id_resp_74
        this.instalacionesDthEntelForm.value.id_resp_75 = this.id_resp_75
        this.instalacionesDthEntelForm.value.id_resp_76 = this.id_resp_76
        this.instalacionesDthEntelForm.value.id_resp_77 = this.id_resp_77
        this.instalacionesDthEntelForm.value.id_resp_78 = this.id_resp_78
        this.instalacionesDthEntelForm.value.id_resp_79 = this.id_resp_79
        this.instalacionesDthEntelForm.value.id_resp_80 = this.id_resp_80
        this.instalacionesDthEntelForm.value.id_resp_81 = this.id_resp_81
        this.instalacionesDthEntelForm.value.id_resp_82 = this.id_resp_82
        this.instalacionesDthEntelForm.value.id_resp_83 = this.id_resp_83
        this.formulario = this.instalacionesDthEntelForm.value
      break
    }
    console.table(this.desconexionForm.value)
    this.api.putQuestions(this.formulario, this.navParams.get('formData').tipo_formulario_id)
    .then((res:any) => {
      loading.dismiss()
      const toast = this.toastCtrl.create({
        message: 'Formulario Enviado Correctamente',
        duration: 3000
      })
      toast.present()
    })
    .catch(err => {
      console.log('Error', err)
      loading.dismiss()
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

}

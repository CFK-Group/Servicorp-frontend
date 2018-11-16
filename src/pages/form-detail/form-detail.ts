import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular'
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
  cod_decodificador: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiServiceProvider, private view: ViewController, public loadingCtrl: LoadingController, public formBuilder: FormBuilder, private barcodeScanner: BarcodeScanner) {
    console.log('id de formulario:',this.navParams.get('formData').tipo_formulario_id)
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
      var promise = new Promise((resolve, reject) => {
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
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
                this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
                this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
                this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
                this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
                this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
                this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
                this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
                this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
                this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
                this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
                this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
                this.resp_12 = this.formulario[i].respuesta
              break
              case "Entrega clave de acceso wifi y personalizada a cliente":
                this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
                this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijacion de antena con (4 pernos)':
                this.resp_15 = this.formulario[i].respuesta
              break
              case 'Conector LNB protegido':
                this.resp_16 = this.formulario[i].respuesta
              break
              case 'Antena debidamente firme (Sin movimientos)':
                this.resp_17 = this.formulario[i].respuesta
              break
              case 'Altura acometida en norma (4.5 Mts)':
                this.resp_18 = this.formulario[i].respuesta
              break
              case 'La acometida es nueva (No reutilizada)':
                this.resp_19 = this.formulario[i].respuesta
              break
              case 'Ficha de abonado en TAP, rotulada correctamente':
                this.resp_20 = this.formulario[i].respuesta
              break
              case 'Loop de mantención':
                this.resp_21 = this.formulario[i].respuesta
              break
              case 'Ruteo y cableado correcto (40 Cms distancia entre grampas)':
                this.resp_22 = this.formulario[i].respuesta
              break
              case 'Fijación de spliters':
                this.resp_23 = this.formulario[i].respuesta
              break
              case 'Tiene pasamuros exterior':
                this.resp_24 = this.formulario[i].respuesta
              break
              case 'Tiene loop de goteo bota agua':
                this.resp_25 = this.formulario[i].respuesta
              break
              case 'Los niveles están dentro del rango':
                this.resp_26 = this.formulario[i].respuesta
              break
              case 'Ruteo y grampeado correctos (40 cm entre grampas)':
                this.resp_27 = this.formulario[i].respuesta
              break
              case 'Curva de cableado mayor o igual a 90 grados':
                this.resp_28 = this.formulario[i].respuesta
              break
              case 'Conector armado y prensado correctamente':
                this.resp_29 = this.formulario[i].respuesta
              break
              case 'Uso conector de compresión claro':
                this.resp_30 = this.formulario[i].respuesta
              break
              case 'Cable PIN es nuevo':
                this.resp_31 = this.formulario[i].respuesta
              break
              case 'Conectores correctamente torqueados':
                this.resp_32 = this.formulario[i].respuesta
              break
              case "Tiene filtro Hum en instalación de TV":
                this.resp_33 = this.formulario[i].respuesta
              break
              case 'Tiene cable HDMI en decodificador y TV HD':
                this.resp_34 = this.formulario[i].respuesta
              break
              case "Deja equipo modo Nat (CM-Emta)":
                this.resp_35 = this.formulario[i].respuesta
              break
              case 'Certifica / cambia canal de transmisión de wifi':
                this.resp_36 = this.formulario[i].respuesta
              break
              case 'Informó número telefónico asignado':
                this.resp_37 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
                this.resp_38 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
                this.resp_39 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
                this.resp_40 = this.formulario[i].respuesta
              break
              case 'Decos Std':
                this.resp_41 = this.formulario[i].respuesta
              break
              case 'Decos HD':
                this.resp_42 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
                this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
                this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
                this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
                this.resp_46 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
                this.resp_47 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
                this.resp_48 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
                this.resp_49 = this.formulario[i].respuesta
              break
              case 'TX':
                this.resp_50 = this.formulario[i].respuesta
              break
              case 'RX':
                this.resp_51 = this.formulario[i].respuesta
              break
              case 'SNR':
                this.resp_52 = this.formulario[i].respuesta
              break
              case 'Observaciones':
                this.resp_53 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
                this.resp_54 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
                this.resp_55 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
                this.resp_56 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
                this.resp_57 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
                this.resp_58 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
                this.resp_59 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
                this.resp_60 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
                this.resp_61 = this.formulario[i].respuesta
              break
              case '171 - Amarra cables nylon 4,8 x 15,6':
                this.resp_62 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
                this.resp_63 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
                this.resp_64 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
                this.resp_65 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
                this.resp_66 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
                this.resp_67 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
                this.resp_68 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
                this.resp_69 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
                this.resp_70 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
                this.resp_71 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
                this.resp_72 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
                this.resp_73 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
                this.resp_74 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
                this.resp_75 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
                this.resp_76 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
                this.resp_77 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
                this.resp_78 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
                this.resp_79 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
                this.resp_80 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
                this.resp_81 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
                this.resp_82 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
                this.resp_83 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
                this.resp_84 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
                this.resp_85 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
                this.resp_86 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
                this.resp_87 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
                this.resp_88 = this.formulario[i].respuesta
              break
              case '1004648 - Spliter':
                this.resp_89 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
                this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
                this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
                this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
                this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
                this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
                this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
                this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
                this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
                this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
                this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
                this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
                this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada al cliente':
                this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
                this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijacion de antena con (4 pernos)':
                this.resp_15 = this.formulario[i].respuesta
              break
              case 'Conector LNB protegido':
                this.resp_16 = this.formulario[i].respuesta
              break
              case 'Antena debidamente firme (Sin movimientos)':
                this.resp_17 = this.formulario[i].respuesta
              break
              case 'Altura acometida en norma (4.5 Mts)':
                this.resp_18 = this.formulario[i].respuesta
              break
              case 'La acometida es nueva (No reutilizada)':
                this.resp_19 = this.formulario[i].respuesta
              break
              case 'Ficha de abonado en TAP, rotulada correctamente':
                this.resp_20 = this.formulario[i].respuesta
              break
              case 'Loop de mantención':
                this.resp_21 = this.formulario[i].respuesta
              break
              case 'Ruteo y cableado correcto (40 Cms distancia entre grampas)':
                this.resp_22 = this.formulario[i].respuesta
              break
              case 'Fijación de spliters':
                this.resp_23 = this.formulario[i].respuesta
              break
              case 'Tiene pasamuros exterior':
                this.resp_24 = this.formulario[i].respuesta
              break
              case 'Tiene loop de goteo bota agua':
                this.resp_25 = this.formulario[i].respuesta
              break
              case 'Los niveles están dentro del rango':
                this.resp_26 = this.formulario[i].respuesta
              break
              case 'Ruteo y grampeado correctos (40 cm entre grampas)':
                this.resp_27 = this.formulario[i].respuesta
              break
              case 'Curva de cableado mayor o igual a 90 grados':
                this.resp_28 = this.formulario[i].respuesta
              break
              case 'Conector armado y prensado correctamente':
                this.resp_29 = this.formulario[i].respuesta
              break
              case 'Uso conector de compresión claro':
                this.resp_30 = this.formulario[i].respuesta
              break
              case 'Cable PIN es nuevo':
                this.resp_31 = this.formulario[i].respuesta
              break
              case 'Conectores correctamente torqueados':
                this.resp_32 = this.formulario[i].respuesta
              break
              case 'Tiene filtro Hum en instalaciín de TV':
                this.resp_33 = this.formulario[i].respuesta
              break
              case 'Tiene cable HDMI en decodificador y TV HD':
                this.resp_34 = this.formulario[i].respuesta
              break
              case 'Deja equipo en modo Nat (CM-Emta)':
                this.resp_35 = this.formulario[i].respuesta
              break
              case 'Certifica / cambia canal de transmisión de wifi':
                this.resp_36 = this.formulario[i].respuesta
              break
              case 'Informó número telefónico asignado':
                this.resp_37 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
                this.resp_38 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
                this.resp_39 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
                this.resp_40 = this.formulario[i].respuesta
              break
              case 'Decos Std':
                this.resp_41 = this.formulario[i].respuesta
              break
              case 'Decos HD':
                this.resp_42 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
                this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
                this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
                this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
                this.resp_46 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
                this.resp_47 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
                this.resp_48 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
                this.resp_49 = this.formulario[i].respuesta
              break
              case 'TX':
                this.resp_50 = this.formulario[i].respuesta
              break
              case 'RX':
                this.resp_51 = this.formulario[i].respuesta
              break
              case 'SNR':
                this.resp_52 = this.formulario[i].respuesta
              break
              case 'Observaciones':
                this.resp_53 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
                this.resp_54 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
                this.resp_55 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
                this.resp_56 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
                this.resp_57 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
                this.resp_58 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
                this.resp_59 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
                this.resp_60 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
                this.resp_61 = this.formulario[i].respuesta
              break
              case '171 - Amarra cables nylon 4,8 x 15,6':
                this.resp_62 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
                this.resp_63 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
                this.resp_64 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
                this.resp_65 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
                this.resp_66 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
                this.resp_67 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
                this.resp_68 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
                this.resp_69 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
                this.resp_70 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
                this.resp_71 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
                this.resp_72 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
                this.resp_73 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
                this.resp_74 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
                this.resp_75 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
                this.resp_76 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
                this.resp_77 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
                this.resp_78 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
                this.resp_79 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
                this.resp_80 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
                this.resp_81 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
                this.resp_82 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
                this.resp_83 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
                this.resp_84 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
                this.resp_85 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
                this.resp_86 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
                this.resp_87 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
                this.resp_88 = this.formulario[i].respuesta
              break
              case '1004648 - Spliter':
                this.resp_89 = this.formulario[i].respuesta
              break
              case 'Código de barras':
                this.cod_decodificador = this.formulario[i].respuesta
              break
            }
          }
        }else if(this.tipoFormulario == 'mantencion hfc'){
          for(let i=0; i<this.formulario.length; i++){
            switch(this.formulario[i].glosa){
              case 'OT SERVICORP':
                this.ot_servicorp = this.formulario[i].respuesta
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
                this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
                this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
                this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
                this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
                this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
                this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
                this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
                this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
                this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
                this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
                this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
                this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada a cliente':
                this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
                this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijación de antena con (4 pernos)':
                this.resp_15 = this.formulario[i].respuesta
              break
              case 'Técnico deja antena debidamente firme (Sin movimiento)':
                this.resp_16 = this.formulario[i].respuesta
              break
              case 'Técnico cambia acometida dañada':
                this.resp_17 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia ground block':
                this.resp_18 = this.formulario[i].respuesta
              break
              case 'Técnico fija spliter':
                this.resp_19 = this.formulario[i].respuesta
              break
              case 'Técnico instala bloqueador de voltaje (Filtro HUM)':
                this.resp_20 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia conectores':
                this.resp_21 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cableado interior':
                this.resp_22 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable PIN':
                this.resp_23 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia roseta telefónica':
                this.resp_24 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia equipo telefónico':
                this.resp_25 = this.formulario[i].respuesta
              break
              case 'Técnico deja conectores correctamente torqueados':
                this.resp_26 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable HDMI':
                this.resp_27 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable RCA':
                this.resp_28 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia decodificador/Cmo MTA':
                this.resp_29 = this.formulario[i].respuesta
              break
              case 'Técnico dejó equipo modo nat (CM-Emta)':
                this.resp_30 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia canal de transmición WIFI':
                this.resp_31 = this.formulario[i].respuesta
              break
              case 'Técnico certifica niveles operacines (CM-MTA-DECO)':
                this.resp_32 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia control remoto':
                this.resp_33 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia pasivos spliter-dc':
                this.resp_34 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
                this.resp_35 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
                this.resp_36 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
                this.resp_37 = this.formulario[i].respuesta
              break
              case 'Decos Std':
                this.resp_38 = this.formulario[i].respuesta
              break
              case 'Decos HD':
                this.resp_39 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
                this.resp_40 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
                this.resp_41 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
                this.resp_42 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
                this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
                this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
                this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
                this.resp_46 = this.formulario[i].respuesta
              break
              case 'TX':
                this.resp_47 = this.formulario[i].respuesta
              break
              case 'RX':
                this.resp_48 = this.formulario[i].respuesta
              break
              case 'SNR':
                this.resp_49 = this.formulario[i].respuesta
              break
              case 'Observaciones':
                this.resp_50 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
                this.resp_51 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
                this.resp_52 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
                this.resp_53 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
                this.resp_54 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
                this.resp_55 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
                this.resp_56 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
                this.resp_57 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
                this.resp_58 = this.formulario[i].respuesta
              break
              case '1004171 - Amarra cables nylon 4,8 x 15,6':
                this.resp_59 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
                this.resp_60 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
                this.resp_61 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
                this.resp_62 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
                this.resp_63 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
                this.resp_64 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
                this.resp_65 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
                this.resp_66 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
                this.resp_67 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
                this.resp_68 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
                this.resp_69 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
                this.resp_70 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
                this.resp_71 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
                this.resp_72 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
                this.resp_73 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
                this.resp_74 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
                this.resp_75 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
                this.resp_76 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
                this.resp_77 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
                this.resp_78 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
                this.resp_79 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
                this.resp_80 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
                this.resp_81 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
                this.resp_82 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
                this.resp_83 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
                this.resp_84 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
                this.resp_85 = this.formulario[i].respuesta
              break
              case '1004648 - Splitter':
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
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
              break
              case 'Los técnicos cumplieron con fecha y hora acordada':
                this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico se identificó con credencial, nombre, apellido':
                this.resp_2 = this.formulario[i].respuesta
              break
              case 'Vestían uniforme y correctamente ordenados':
                this.resp_3 = this.formulario[i].respuesta
              break
              case 'Explicaron el detalle del trabajo antes de comenzar':
                this.resp_4 = this.formulario[i].respuesta
              break
              case 'El trato fue cordial durante la visita':
                this.resp_5 = this.formulario[i].respuesta
              break
              case 'Contaban con herramientas necesarias':
                this.resp_6 = this.formulario[i].respuesta
              break
              case 'Respondieron sus dudas durante la actividad ejecutada':
                this.resp_7 = this.formulario[i].respuesta
              break
              case 'Dejaron copia de orden de trabajo':
                this.resp_8 = this.formulario[i].respuesta
              break
              case 'Efectuaron capacitación del uso de los equipos':
                this.resp_9 = this.formulario[i].respuesta
              break
              case 'Quedaron todos los servicios funcionando correctamente, al término de la actividad':
                this.resp_10 = this.formulario[i].respuesta
              break
              case 'Dejaron el lugar limpio al concluir la actividad':
                this.resp_11 = this.formulario[i].respuesta
              break
              case 'Técnico explicó no desenchufar equipos de electricidad (Decos-C.M.EMTA)':
                this.resp_12 = this.formulario[i].respuesta
              break
              case 'Entrega clave de acceso wifi y personalizada a cliente':
                this.resp_13 = this.formulario[i].respuesta
              break
              case 'Capacitó en el uso de control remoto del decodificador':
                this.resp_14 = this.formulario[i].respuesta
              break
              case 'Fijación de antena con (4 pernos)':
                this.resp_15 = this.formulario[i].respuesta
              break
              case 'Técnico deja antena debidamente firme (Sin movimiento)':
                this.resp_16 = this.formulario[i].respuesta
              break
              case 'Técnico cambia acometida dañada':
                this.resp_17 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia ground block':
                this.resp_18 = this.formulario[i].respuesta
              break
              case 'Técnico fija spliter':
                this.resp_19 = this.formulario[i].respuesta
              break
              case 'Técnico instala bloqueador de voltaje (Filtro HUM)':
                this.resp_20 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia conectores':
                this.resp_21 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cableado interior':
                this.resp_22 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable PIN':
                this.resp_23 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia roseta telefónica':
                this.resp_24 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia equipo telefónico':
                this.resp_25 = this.formulario[i].respuesta
              break
              case 'Técnico deja conectores correctamente torqueados':
                this.resp_26 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable HDMI':
                this.resp_27 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia cable RCA':
                this.resp_28 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia decodificador/Cmo MTA':
                this.resp_29 = this.formulario[i].respuesta
              break
              case 'Técnico dejó equipo modo nat (CM-Emta)':
                this.resp_30 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia canal de transmición WIFI':
                this.resp_31 = this.formulario[i].respuesta
              break
              case 'Técnico certifica niveles operacines (CM-MTA-DECO)':
                this.resp_32 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia control remoto':
                this.resp_33 = this.formulario[i].respuesta
              break
              case 'Técnico certifica o cambia pasivos spliter-dc':
                this.resp_34 = this.formulario[i].respuesta
              break
              case 'Dirección correcta':
                this.resp_35 = this.formulario[i].respuesta
              break
              case 'Técnico visitó domicilio':
                this.resp_36 = this.formulario[i].respuesta
              break
              case 'HFC/DTH':
                this.resp_37 = this.formulario[i].respuesta
              break
              case 'Decos Std':
                this.resp_38 = this.formulario[i].respuesta
              break
              case 'Decos HD':
                this.resp_39 = this.formulario[i].respuesta
              break
              case 'Cantidad de equipos corresponde a contrato':
                this.resp_40 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Señal':
                this.resp_41 = this.formulario[i].respuesta
              break
              case '1 TP (12092) N. Calidad':
                this.resp_42 = this.formulario[i].respuesta
              break
              case '1 TP (12092) C/N':
                this.resp_43 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Señal':
                this.resp_44 = this.formulario[i].respuesta
              break
              case '1 TP (12172) N. Calidad':
                this.resp_45 = this.formulario[i].respuesta
              break
              case '1 TP (12172) C/N':
                this.resp_46 = this.formulario[i].respuesta
              break
              case 'TX':
                this.resp_47 = this.formulario[i].respuesta
              break
              case 'RX':
                this.resp_48 = this.formulario[i].respuesta
              break
              case 'SNR':
                this.resp_49 = this.formulario[i].respuesta
              break
              case 'Observaciones':
                this.resp_50 = this.formulario[i].respuesta
              break
              case 'Se genera vista técnica por garantía':
                this.resp_51 = this.formulario[i].respuesta
              break
              case 'Se realiza reparación menor':
                this.resp_52 = this.formulario[i].respuesta
              break
              case 'Reutilizada instalación':
                this.resp_53 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores RG-06 F a compresión':
                this.resp_54 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial doble malla RG-6 blanco sin mensajero (indoor)(1)':
                this.resp_55 = this.formulario[i].respuesta
              break
              case '1004177 - Acopladores direccional interior 1 vía 9dB':
                this.resp_56 = this.formulario[i].respuesta
              break
              case '1004178 - Acopladores direccional interior 1 vía 12dB':
                this.resp_57 = this.formulario[i].respuesta
              break
              case '1004271 - Grampa blanca Telefónica Nº 7 (pin interior)':
                this.resp_58 = this.formulario[i].respuesta
              break
              case '1004171 - Amarra cables nylon 4,8 x 15,6':
                this.resp_59 = this.formulario[i].respuesta
              break
              case '1004167 - Gomas para Taps':
                this.resp_60 = this.formulario[i].respuesta
              break
              case '1004179 - Grampa RG-6 blancas':
                this.resp_61 = this.formulario[i].respuesta
              break
              case '1004180 - Grampa RG-6 negra':
                this.resp_62 = this.formulario[i].respuesta
              break
              case '1004812 - Bloqueador de voltaje':
                this.resp_63 = this.formulario[i].respuesta
              break
              case '1004183 - Atenuador Fam 3':
                this.resp_64 = this.formulario[i].respuesta
              break
              case '1004184 - Atenuador Fam 6':
                this.resp_65 = this.formulario[i].respuesta
              break
              case '1004185 - Atenuador Fam 8':
                this.resp_66 = this.formulario[i].respuesta
              break
              case '1004186 - Atenuador Fam 10':
                this.resp_67 = this.formulario[i].respuesta
              break
              case '1004173 - Splitter 2 vías (4dB)':
                this.resp_68 = this.formulario[i].respuesta
              break
              case '1003508 - Conector RJ-45':
                this.resp_69 = this.formulario[i].respuesta
              break
              case '1003507 - Conector RJ-11':
                this.resp_70 = this.formulario[i].respuesta
              break
              case '1004270 - Ficha abonado (marca acometida) rojo':
                this.resp_71 = this.formulario[i].respuesta
              break
              case '1003553 - Roseta telefónica RJ-11':
                this.resp_72 = this.formulario[i].respuesta
              break
              case '1004181 - Conectores ground block':
                this.resp_73 = this.formulario[i].respuesta
              break
              case '1004518 - Control remoto caja digital':
                this.resp_74 = this.formulario[i].respuesta
              break
              case '1008608 - Cable teléfono plano 4 conductores':
                this.resp_75 = this.formulario[i].respuesta
              break
              case '1004409 - Pilas alcalinas AAA':
                this.resp_76 = this.formulario[i].respuesta
              break
              case '1004526 - Cable video componente 3 conexiones':
                this.resp_77 = this.formulario[i].respuesta
              break
              case '1004836 - Cable HDMI':
                this.resp_78 = this.formulario[i].respuesta
              break
              case '1004233 - Cable audio video RCA':
                this.resp_79 = this.formulario[i].respuesta
              break
              case '1004176 - Acopladores direccional interior 1 vía 6dB':
                this.resp_80 = this.formulario[i].respuesta
              break
              case '1004288 - LNB':
                this.resp_81 = this.formulario[i].respuesta
              break
              case '1008635 - Cable coaxial blanco':
                this.resp_82 = this.formulario[i].respuesta
              break
              case '1004311 - Conectores':
                this.resp_83 = this.formulario[i].respuesta
              break
              case '1004672 - LNB dual':
                this.resp_84 = this.formulario[i].respuesta
              break
              case '1004191 - LNB quad':
                this.resp_85 = this.formulario[i].respuesta
              break
              case '1004648 - Splitter':
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
              break
              case 'FOLIO DE SERVICIO':
                this.folio_servicio = this.formulario[i].respuesta
              break
              case 'Técnico corta acometida':
                this.resp_1 = this.formulario[i].respuesta
              break
              case 'Técnico retira acometida':
                this.resp_2 = this.formulario[i].respuesta
              break
              case 'Desconexión OK':
                this.resp_3 = this.formulario[i].respuesta
              break
              case 'Cliente activo':
                this.resp_4 = this.formulario[i].respuesta
              break
              case 'Certificador desconecta':
                this.resp_5 = this.formulario[i].respuesta
              break
              case 'Se corta ilegal':
                this.resp_6 = this.formulario[i].respuesta
              break
              case 'No permiten realizar corte':
                this.resp_7 = this.formulario[i].respuesta
              break
              case 'Observaciones':
                this.resp_8 = this.formulario[i].respuesta
              break
            }
          }
        }else if(this.tipoFormulario == 'instalacion dth entel'){
          
        }
        // fin del llenado del formulario
      })
      .catch((err) => {
        console.error('Error al mostrar preguntas: ' + err.message)
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

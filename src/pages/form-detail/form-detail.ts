import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular'
import { ApiServiceProvider } from '../../providers/api-service/api-service'
import { FormBuilder, FormGroup } from "@angular/forms"
import { Observable } from 'rxjs'
import { Pregunta } from '../../models/preguntas.interface'
import { PreguntasProvider } from '../../providers/preguntas/preguntas'

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

  preguntas$: Observable<Pregunta[]>
  formulario = []
  imagenes = []
  tipoFormulario: string
  instalacionesForm: FormGroup
  mostrarFormInstalaciones: boolean = false
  mantencionesForm: FormGroup
  mostrarFormMantenciones: boolean = false
  desconexionForm: FormGroup
  mostrarFormDesconexion: boolean = false
  instalacionesDthEntelForm: FormGroup
  mostrarFormInstalacionesDthEntel: boolean = false
  bafiEntelForm: FormGroup
  mostrarFormBafiEntel: boolean = false
  duoEntelForm: FormGroup
  mostrarFormDuoEntel: boolean = false
  fibraEntelForm: FormGroup
  mostrarFormFibraEntel: boolean = false
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
  cod_decodificador: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private api: ApiServiceProvider, 
    private view: ViewController, 
    public loadingCtrl: LoadingController, 
    public formBuilder: FormBuilder,
    private preguntas: PreguntasProvider,
    public toastCtrl: ToastController
  ) {
    console.log('id de tipo_formulario:',this.navParams.get('formData').tipo_formulario_id)
    console.log('id de formulario:',this.navParams.get('formData').id)
    switch(this.navParams.get('formData').tipo_formulario_id){
      case 1:
        this.tipoFormulario = 'instalacion hfc'
      break
      case 2:
        this.tipoFormulario = 'instalacion dth'
      break
      case 3:
        this.tipoFormulario = 'mantencion hfc'
      break
      case 4:
        this.tipoFormulario = 'mantencion dth'
      break
      case 5:
        this.tipoFormulario = 'desconexion'
      break
      case 6:
        this.tipoFormulario = 'instalacion dth entel'
      break
      case 7:
        this.tipoFormulario = 'bafi entel'
      break
      case 8:
        this.tipoFormulario = 'duo entel'
      break
      case 9:
        this.tipoFormulario = 'fibra entel'
      break
    }
  }

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
            this.mostrarFormInstalaciones = true
          break
          case 2:
            this.mostrarFormInstalaciones = true
          break
          case 3:
            this.mostrarFormMantenciones = true
          break
          case 4:
            this.mostrarFormMantenciones = true
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
          case 9:
            this.preguntas$ = this.preguntas.getPreguntasFibraEntel()
            this.mostrarFormFibraEntel = true
          break
        }
        resolve()
      })
      promise
      .then((res:any) => {
        // aqui llenamos el formulario respectivo con las respuestas obtenidas del api
        if (this.tipoFormulario == 'instalacion hfc' || this.tipoFormulario == 'instalacion dth') {
          this.ot_servicorp = this.formulario[0].respuesta
          this.folio_servicio = this.formulario[1].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.resp_29 = this.formulario[30].respuesta
          this.resp_30 = this.formulario[31].respuesta
          this.resp_31 = this.formulario[32].respuesta
          this.resp_32 = this.formulario[33].respuesta
          this.resp_33 = this.formulario[34].respuesta
          this.resp_34 = this.formulario[35].respuesta
          this.resp_35 = this.formulario[36].respuesta
          this.resp_36 = this.formulario[37].respuesta
          this.resp_37 = this.formulario[38].respuesta
          this.resp_38 = this.formulario[39].respuesta
          this.resp_39 = this.formulario[40].respuesta
          this.resp_40 = this.formulario[41].respuesta
          this.resp_41 = this.formulario[42].respuesta
          this.resp_42 = this.formulario[43].respuesta
          this.resp_43 = this.formulario[44].respuesta
          this.resp_44 = this.formulario[45].respuesta
          this.resp_45 = this.formulario[46].respuesta
          this.resp_46 = this.formulario[47].respuesta
          this.resp_47 = this.formulario[48].respuesta
          this.resp_48 = this.formulario[49].respuesta
          this.resp_49 = this.formulario[50].respuesta
          this.resp_50 = this.formulario[51].respuesta
          this.resp_51 = this.formulario[52].respuesta
          this.resp_52 = this.formulario[53].respuesta
          this.resp_53 = this.formulario[54].respuesta
          this.resp_54 = this.formulario[55].respuesta
          this.resp_55 = this.formulario[56].respuesta
          this.resp_56 = this.formulario[57].respuesta
          this.resp_57 = this.formulario[58].respuesta
          this.resp_58 = this.formulario[59].respuesta
          this.resp_59 = this.formulario[60].respuesta
          this.resp_60 = this.formulario[61].respuesta
          this.resp_61 = this.formulario[62].respuesta
          this.resp_62 = this.formulario[63].respuesta
          this.resp_63 = this.formulario[64].respuesta
          this.resp_64 = this.formulario[65].respuesta
          this.resp_65 = this.formulario[66].respuesta
          this.resp_66 = this.formulario[67].respuesta
          this.resp_67 = this.formulario[68].respuesta
          this.resp_68 = this.formulario[69].respuesta
          this.resp_69 = this.formulario[70].respuesta
          this.resp_70 = this.formulario[71].respuesta
          this.resp_71 = this.formulario[72].respuesta
          this.resp_72 = this.formulario[73].respuesta
          this.resp_73 = this.formulario[74].respuesta
          this.resp_74 = this.formulario[75].respuesta
          this.resp_75 = this.formulario[76].respuesta
          this.resp_76 = this.formulario[77].respuesta
          this.resp_77 = this.formulario[78].respuesta
          this.resp_78 = this.formulario[79].respuesta
          this.resp_79 = this.formulario[80].respuesta
          this.resp_80 = this.formulario[81].respuesta
          this.resp_81 = this.formulario[82].respuesta
          this.resp_82 = this.formulario[83].respuesta
          this.resp_83 = this.formulario[84].respuesta
          this.resp_84 = this.formulario[85].respuesta
          this.resp_85 = this.formulario[86].respuesta
          this.resp_86 = this.formulario[87].respuesta
          this.resp_87 = this.formulario[88].respuesta
          this.resp_88 = this.formulario[89].respuesta
          this.resp_89 = this.formulario[90].respuesta
          this.resp_90 = this.formulario[91].respuesta
          this.resp_91 = this.formulario[92].respuesta
          this.resp_92 = this.formulario[93].respuesta
          this.resp_93 = this.formulario[94].respuesta
          this.resp_94 = this.formulario[95].respuesta
          this.resp_95 = this.formulario[96].respuesta
          this.resp_96 = this.formulario[97].respuesta
          this.resp_97 = this.formulario[98].respuesta
          this.resp_98 = this.formulario[99].respuesta
          this.resp_99 = this.formulario[100].respuesta
          this.resp_100 = this.formulario[101].respuesta
          this.resp_101 = this.formulario[102].respuesta
          this.resp_102 = this.formulario[103].respuesta
          this.resp_103 = this.formulario[104].respuesta
          this.resp_104 = this.formulario[105].respuesta
          this.resp_105 = this.formulario[106].respuesta
          this.resp_106 = this.formulario[107].respuesta
          this.resp_107 = this.formulario[108].respuesta
          this.resp_108 = this.formulario[109].respuesta
          this.resp_109 = this.formulario[110].respuesta
          this.resp_110 = this.formulario[111].respuesta
          this.cod_decodificador = this.formulario[112].respuesta
        } else if (this.tipoFormulario == 'mantencion hfc' || this.tipoFormulario == 'mantencion dth') {
          this.ot_servicorp = this.formulario[0].respuesta
          this.folio_servicio = this.formulario[1].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.resp_29 = this.formulario[30].respuesta
          this.resp_30 = this.formulario[31].respuesta
          this.resp_31 = this.formulario[32].respuesta
          this.resp_32 = this.formulario[33].respuesta
          this.resp_33 = this.formulario[34].respuesta
          this.resp_34 = this.formulario[35].respuesta
          this.resp_35 = this.formulario[36].respuesta
          this.resp_36 = this.formulario[37].respuesta
          this.resp_37 = this.formulario[38].respuesta
          this.resp_38 = this.formulario[39].respuesta
          this.resp_39 = this.formulario[40].respuesta
          this.resp_40 = this.formulario[41].respuesta
          this.resp_41 = this.formulario[42].respuesta
          this.resp_42 = this.formulario[43].respuesta
          this.resp_43 = this.formulario[44].respuesta
          this.resp_44 = this.formulario[45].respuesta
          this.resp_45 = this.formulario[46].respuesta
          this.resp_46 = this.formulario[47].respuesta
          this.resp_47 = this.formulario[48].respuesta
          this.resp_48 = this.formulario[49].respuesta
          this.resp_49 = this.formulario[50].respuesta
          this.resp_50 = this.formulario[51].respuesta
          this.resp_51 = this.formulario[52].respuesta
          this.resp_52 = this.formulario[53].respuesta
          this.resp_53 = this.formulario[54].respuesta
          this.resp_54 = this.formulario[55].respuesta
          this.resp_55 = this.formulario[56].respuesta
          this.resp_56 = this.formulario[57].respuesta
          this.resp_57 = this.formulario[58].respuesta
          this.resp_58 = this.formulario[59].respuesta
          this.resp_59 = this.formulario[60].respuesta
          this.resp_60 = this.formulario[61].respuesta
          this.resp_61 = this.formulario[62].respuesta
          this.resp_62 = this.formulario[63].respuesta
          this.resp_63 = this.formulario[64].respuesta
          this.resp_64 = this.formulario[65].respuesta
          this.resp_65 = this.formulario[66].respuesta
          this.resp_66 = this.formulario[67].respuesta
          this.resp_67 = this.formulario[68].respuesta
          this.resp_68 = this.formulario[69].respuesta
          this.resp_69 = this.formulario[70].respuesta
          this.resp_70 = this.formulario[71].respuesta
          this.resp_71 = this.formulario[72].respuesta
          this.resp_72 = this.formulario[73].respuesta
          this.resp_73 = this.formulario[74].respuesta
          this.resp_74 = this.formulario[75].respuesta
          this.resp_75 = this.formulario[76].respuesta
          this.resp_76 = this.formulario[77].respuesta
          this.resp_77 = this.formulario[78].respuesta
          this.resp_78 = this.formulario[79].respuesta
          this.resp_79 = this.formulario[80].respuesta
          this.resp_80 = this.formulario[81].respuesta
          this.resp_81 = this.formulario[82].respuesta
          this.resp_82 = this.formulario[83].respuesta
          this.resp_83 = this.formulario[84].respuesta
          this.resp_84 = this.formulario[85].respuesta
          this.resp_85 = this.formulario[86].respuesta
          this.resp_86 = this.formulario[87].respuesta
          this.resp_87 = this.formulario[88].respuesta
          this.resp_88 = this.formulario[89].respuesta
          this.resp_89 = this.formulario[90].respuesta
          this.resp_90 = this.formulario[91].respuesta
          this.resp_91 = this.formulario[92].respuesta
          this.resp_92 = this.formulario[93].respuesta
          this.resp_93 = this.formulario[94].respuesta
          this.resp_94 = this.formulario[95].respuesta
          this.resp_95 = this.formulario[96].respuesta
          this.resp_96 = this.formulario[97].respuesta
          this.resp_97 = this.formulario[98].respuesta
          this.resp_98 = this.formulario[99].respuesta
          this.resp_99 = this.formulario[100].respuesta
          this.resp_100 = this.formulario[101].respuesta
          this.resp_101 = this.formulario[102].respuesta
          this.resp_102 = this.formulario[103].respuesta
          this.resp_103 = this.formulario[104].respuesta
          this.resp_104 = this.formulario[105].respuesta
          this.resp_105 = this.formulario[106].respuesta
          this.resp_106 = this.formulario[107].respuesta
          this.resp_107 = this.formulario[108].respuesta
          this.resp_108 = this.formulario[109].respuesta
          this.cod_decodificador = this.formulario[110].respuesta
        } else if (this.tipoFormulario == 'desconexion') {
          this.ot_servicorp = this.formulario[0].respuesta
          this.folio_servicio = this.formulario[1].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
        } else if (this.tipoFormulario == 'instalacion dth entel') {
          this.ot_servicorp = this.formulario[0].respuesta
          this.folio_servicio = this.formulario[1].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.resp_29 = this.formulario[30].respuesta
          this.resp_30 = this.formulario[31].respuesta
          this.resp_31 = this.formulario[32].respuesta
          this.resp_32 = this.formulario[33].respuesta
          this.resp_33 = this.formulario[34].respuesta
          this.resp_34 = this.formulario[35].respuesta
          this.resp_35 = this.formulario[36].respuesta
          this.resp_36 = this.formulario[37].respuesta
          this.resp_37 = this.formulario[38].respuesta
          this.resp_38 = this.formulario[39].respuesta
          this.resp_39 = this.formulario[40].respuesta
          this.resp_40 = this.formulario[41].respuesta
          this.resp_41 = this.formulario[42].respuesta
          this.resp_42 = this.formulario[43].respuesta
          this.resp_43 = this.formulario[44].respuesta
          this.resp_44 = this.formulario[45].respuesta
          this.resp_45 = this.formulario[46].respuesta
          this.resp_46 = this.formulario[47].respuesta
          this.resp_47 = this.formulario[48].respuesta
          this.resp_48 = this.formulario[49].respuesta
          this.resp_49 = this.formulario[50].respuesta
          this.resp_50 = this.formulario[51].respuesta
          this.resp_51 = this.formulario[52].respuesta
          this.resp_52 = this.formulario[53].respuesta
          this.resp_53 = this.formulario[54].respuesta
          this.resp_54 = this.formulario[55].respuesta
          this.resp_55 = this.formulario[56].respuesta
          this.resp_56 = this.formulario[57].respuesta
          this.resp_57 = this.formulario[58].respuesta
          this.resp_58 = this.formulario[59].respuesta
          this.resp_59 = this.formulario[60].respuesta
          this.resp_60 = this.formulario[61].respuesta
          this.resp_61 = this.formulario[62].respuesta
          this.resp_62 = this.formulario[63].respuesta
          this.resp_63 = this.formulario[64].respuesta
          this.resp_64 = this.formulario[65].respuesta
          this.resp_65 = this.formulario[66].respuesta
          this.resp_66 = this.formulario[67].respuesta
          this.resp_67 = this.formulario[68].respuesta
          this.resp_68 = this.formulario[69].respuesta
          this.resp_69 = this.formulario[70].respuesta
          this.resp_70 = this.formulario[71].respuesta
          this.resp_71 = this.formulario[72].respuesta
          this.resp_72 = this.formulario[73].respuesta
          this.resp_73 = this.formulario[74].respuesta
          this.resp_74 = this.formulario[75].respuesta
          this.resp_75 = this.formulario[76].respuesta
          this.resp_76 = this.formulario[77].respuesta
          this.resp_77 = this.formulario[78].respuesta
          this.resp_78 = this.formulario[79].respuesta
          this.resp_79 = this.formulario[80].respuesta
          this.resp_80 = this.formulario[81].respuesta
          this.resp_81 = this.formulario[82].respuesta
          this.resp_82 = this.formulario[83].respuesta
          this.resp_83 = this.formulario[84].respuesta
          this.cod_decodificador = this.formulario[85].respuesta
        } else if (this.tipoFormulario == 'bafi entel'){ 
          this.ot_servicorp = this.formulario[0].respuesta
          this.folio_servicio = this.formulario[1].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.cod_decodificador = this.formulario[30].respuesta
        } else if (this.tipoFormulario == 'duo entel') {
          this.ot_servicorp = this.formulario[1].respuesta
          this.folio_servicio = this.formulario[0].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.resp_29 = this.formulario[30].respuesta
          this.resp_30 = this.formulario[31].respuesta
          this.resp_31 = this.formulario[32].respuesta
          this.resp_32 = this.formulario[33].respuesta
          this.resp_33 = this.formulario[34].respuesta
          this.resp_34 = this.formulario[35].respuesta
          this.resp_35 = this.formulario[36].respuesta
          this.resp_36 = this.formulario[37].respuesta
          this.resp_37 = this.formulario[38].respuesta
          this.resp_38 = this.formulario[39].respuesta
          this.resp_39 = this.formulario[40].respuesta
          this.resp_40 = this.formulario[41].respuesta
          this.resp_41 = this.formulario[42].respuesta
          this.resp_42 = this.formulario[43].respuesta
          this.resp_43 = this.formulario[44].respuesta
          this.resp_44 = this.formulario[45].respuesta
          this.resp_45 = this.formulario[46].respuesta
          this.resp_46 = this.formulario[47].respuesta
          this.resp_47 = this.formulario[48].respuesta
          this.resp_48 = this.formulario[49].respuesta
          this.resp_49 = this.formulario[50].respuesta
          this.resp_50 = this.formulario[51].respuesta
          this.resp_51 = this.formulario[52].respuesta
          this.resp_52 = this.formulario[53].respuesta
          this.resp_53 = this.formulario[54].respuesta
          this.resp_54 = this.formulario[55].respuesta
          this.resp_55 = this.formulario[56].respuesta
          this.resp_56 = this.formulario[57].respuesta
          this.resp_57 = this.formulario[58].respuesta
          this.resp_58 = this.formulario[59].respuesta
          this.resp_59 = this.formulario[60].respuesta
          this.resp_60 = this.formulario[61].respuesta
          this.resp_61 = this.formulario[62].respuesta
          this.resp_62 = this.formulario[63].respuesta
          this.resp_63 = this.formulario[64].respuesta
          this.resp_64 = this.formulario[65].respuesta
          this.resp_65 = this.formulario[66].respuesta
          this.resp_66 = this.formulario[67].respuesta
          this.resp_67 = this.formulario[68].respuesta
          this.resp_68 = this.formulario[69].respuesta
          this.resp_69 = this.formulario[70].respuesta
          this.resp_70 = this.formulario[71].respuesta
          this.resp_71 = this.formulario[72].respuesta
          this.resp_72 = this.formulario[73].respuesta
          this.resp_73 = this.formulario[74].respuesta
          this.resp_74 = this.formulario[75].respuesta
          this.resp_75 = this.formulario[76].respuesta
          this.resp_76 = this.formulario[77].respuesta
          this.resp_77 = this.formulario[78].respuesta
          this.resp_78 = this.formulario[79].respuesta
          this.resp_79 = this.formulario[80].respuesta
          this.resp_80 = this.formulario[81].respuesta
          this.resp_81 = this.formulario[82].respuesta
          this.resp_82 = this.formulario[83].respuesta
          this.resp_83 = this.formulario[84].respuesta
          this.resp_84 = this.formulario[85].respuesta
          this.resp_85 = this.formulario[86].respuesta
          this.resp_86 = this.formulario[87].respuesta
          this.resp_87 = this.formulario[88].respuesta
          this.resp_88 = this.formulario[89].respuesta
          this.resp_89 = this.formulario[90].respuesta
          this.resp_90 = this.formulario[91].respuesta
          this.resp_91 = this.formulario[92].respuesta
          this.resp_92 = this.formulario[93].respuesta
          this.resp_93 = this.formulario[94].respuesta
          this.resp_94 = this.formulario[95].respuesta
          this.resp_95 = this.formulario[96].respuesta
          this.resp_96 = this.formulario[97].respuesta
          this.resp_97 = this.formulario[98].respuesta
          this.resp_98 = this.formulario[99].respuesta
          this.resp_99 = this.formulario[100].respuesta
          this.cod_decodificador = this.formulario[101].respuesta
        } else if (this.tipoFormulario == 'fibra entel'){ 
          this.ot_servicorp = this.formulario[1].respuesta
          this.folio_servicio = this.formulario[0].respuesta
          this.resp_1 = this.formulario[2].respuesta
          this.resp_2 = this.formulario[3].respuesta
          this.resp_3 = this.formulario[4].respuesta
          this.resp_4 = this.formulario[5].respuesta
          this.resp_5 = this.formulario[6].respuesta
          this.resp_6 = this.formulario[7].respuesta
          this.resp_7 = this.formulario[8].respuesta
          this.resp_8 = this.formulario[9].respuesta
          this.resp_9 = this.formulario[10].respuesta
          this.resp_10 = this.formulario[11].respuesta
          this.resp_11 = this.formulario[12].respuesta
          this.resp_12 = this.formulario[13].respuesta
          this.resp_13 = this.formulario[14].respuesta
          this.resp_14 = this.formulario[15].respuesta
          this.resp_15 = this.formulario[16].respuesta
          this.resp_16 = this.formulario[17].respuesta
          this.resp_17 = this.formulario[18].respuesta
          this.resp_18 = this.formulario[19].respuesta
          this.resp_19 = this.formulario[20].respuesta
          this.resp_20 = this.formulario[21].respuesta
          this.resp_21 = this.formulario[22].respuesta
          this.resp_22 = this.formulario[23].respuesta
          this.resp_23 = this.formulario[24].respuesta
          this.resp_24 = this.formulario[25].respuesta
          this.resp_25 = this.formulario[26].respuesta
          this.resp_26 = this.formulario[27].respuesta
          this.resp_27 = this.formulario[28].respuesta
          this.resp_28 = this.formulario[29].respuesta
          this.resp_29 = this.formulario[30].respuesta
          this.resp_30 = this.formulario[31].respuesta
          this.resp_31 = this.formulario[32].respuesta
          this.resp_32 = this.formulario[33].respuesta
          this.resp_33 = this.formulario[34].respuesta
          this.resp_34 = this.formulario[35].respuesta
          this.resp_35 = this.formulario[36].respuesta
          this.resp_36 = this.formulario[37].respuesta
          this.resp_37 = this.formulario[38].respuesta
          this.resp_38 = this.formulario[39].respuesta
          this.resp_39 = this.formulario[40].respuesta
          this.resp_40 = this.formulario[41].respuesta
          this.resp_41 = this.formulario[42].respuesta
          this.resp_42 = this.formulario[43].respuesta
          this.resp_43 = this.formulario[44].respuesta
          this.resp_44 = this.formulario[45].respuesta
          this.resp_45 = this.formulario[46].respuesta
          this.resp_46 = this.formulario[47].respuesta
          this.resp_47 = this.formulario[48].respuesta
          this.resp_48 = this.formulario[49].respuesta
          this.resp_49 = this.formulario[50].respuesta
          this.resp_50 = this.formulario[51].respuesta
          this.resp_51 = this.formulario[52].respuesta
          this.resp_52 = this.formulario[53].respuesta
          this.resp_53 = this.formulario[54].respuesta
          this.resp_54 = this.formulario[55].respuesta
          this.resp_55 = this.formulario[56].respuesta
          this.resp_56 = this.formulario[57].respuesta
          this.resp_57 = this.formulario[58].respuesta
          this.resp_58 = this.formulario[59].respuesta
          this.resp_59 = this.formulario[60].respuesta
          this.cod_decodificador = this.formulario[61].respuesta
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

}

import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular'
import { AlertController } from "ionic-angular"
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../../app/user'
import { ApiServiceProvider } from "../../providers/api-service/api-service"
import { CategoriasPage } from "../categorias/categorias"
import { EntelPage } from "../entel/entel"
import * as moment from 'moment'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mode: string = 'producion'  // cambiar entre develop y producion según sea el caso
  loginForm: FormGroup

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private api: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    if(localStorage.getItem('empresa') == 'claro' || localStorage.getItem('empresa') == 'Claro'){
      this.navCtrl.push(CategoriasPage)
    } else if(localStorage.getItem('empresa') == 'entel' || localStorage.getItem('empresa') == 'Entel'){
      this.navCtrl.push(EntelPage)
    }
    this.loginForm = this.createLoginForm()
  }

  login(){
    console.time('login')
    let loading = this.loadingCtrl.create({
      content: 'Iniciando Sesión'
    })
    loading.present()
    const user =  new User(this.loginForm.value.username, this.loginForm.value.password)
    this.api.login(user)
    .then((res:any) => {
      console.timeEnd('login')
      loading.dismiss()
      console.table(res)
      if(res.success === true){
        localStorage.setItem('lastLogin', moment().format('DD-MM-YYYY'))
        localStorage.setItem('userToken', res.token)
        localStorage.setItem('userId', res.id_usuario)
        localStorage.setItem('empresa', res.empresa)
        if(res.empresa == 'claro' || res.empresa == 'Claro'){
          this.navCtrl.push(CategoriasPage)
        }else if(res.empresa == 'entel' || res.empresa == 'Entel'){
          this.navCtrl.push(EntelPage)
        }
      }else{
        let alert = this.alertCtrl.create({
          title: 'Error al iniciar sesión',
          subTitle: 'nombre de usuario o contraseña incorrectos',
          buttons: ['OK']
        })
        alert.present()
      }
    })
    .catch( (reason) => {
      console.timeEnd('login')
      console.log(reason.message)
      loading.dismiss()
      let alert = this.alertCtrl.create({
        title: 'Error al iniciar sesión.',
        subTitle: 'Por favor revise su conexión a internet.',
        buttons: ['OK']
      })
      alert.present()
    })
  }

  private createLoginForm(){
    if(this.mode === 'develop'){
      return this.formBuilder.group({
        username: ['test', Validators.required],
        password: ['test', Validators.required]
      })
    }else{
      return this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

}

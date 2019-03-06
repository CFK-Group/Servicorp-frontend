import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { LoginPage } from "../pages/login/login"
import { CategoriasPage } from '../pages/categorias/categorias'
import * as moment from 'moment'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault()
      splashScreen.hide()
      console.log(localStorage.getItem('lastLogin') == moment().format('DD-MM-YYYY').toString())
      if(localStorage.getItem('userToken') && localStorage.getItem('lastLogin') == moment().format('DD-MM-YYYY').toString()){
        this.rootPage = CategoriasPage
      }else {
        this.logout()
        this.rootPage = LoginPage
      }
    })
  }

  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('empresa')
    localStorage.removeItem('lastLogin')
  }
}

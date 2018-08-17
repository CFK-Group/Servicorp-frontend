import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { LoginPage } from "../pages/login/login"
import { CategoriasPage } from '../pages/categorias/categorias'
import { EntelPage } from '../pages/entel/entel'

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
      if(localStorage.getItem('userToken')){
        if(localStorage.getItem('empresa') == 'claro' || localStorage.getItem('empresa') == 'Claro'){
          this.rootPage = CategoriasPage
        }else if(localStorage.getItem('empresa') == 'entel' || localStorage.getItem('empresa') == 'Entel'){
          this.rootPage = EntelPage
        }
      }else {
        this.rootPage = LoginPage
      }
    })
  }
}

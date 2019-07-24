import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'
import { InstalacionesDthPage } from "../instalaciones-dth/instalaciones-dth"
import { InstalacionesHfcPage } from "../instalaciones-hfc/instalaciones-hfc"
import { MantencionHfcPage } from "../mantencion-hfc/mantencion-hfc"
import { MantencionDthPage } from "../mantencion-dth/mantencion-dth"
import { InstalacionesDthEntelPage } from "../instalaciones-dth-entel/instalaciones-dth-entel"
import { DesconexionPage } from "../desconexion/desconexion"
import { LoginPage } from "../../pages/login/login"
import { BafiEntelPage } from "../../pages/bafi-entel/bafi-entel"
import { DuoEntelPage } from "../../pages/duo-entel/duo-entel"

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  mostrarEntel = localStorage.getItem('empresa') == 'Entel'
  mostrarClaro = localStorage.getItem('empresa') == 'Claro'

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage')
  }

  goToInstalacionesHfc(){
    this.navCtrl.push(InstalacionesHfcPage)
  }

  goToInstalacionesDth(){
    this.navCtrl.push(InstalacionesDthPage)
  }

  goToInstalacionesDthEntel(){
    this.navCtrl.push(InstalacionesDthEntelPage)
  }

  goToMantencionHfc(){
    this.navCtrl.push(MantencionHfcPage)
  }

  goToMantencionDth(){
    this.navCtrl.push(MantencionDthPage)
  }

  goToDesconexion(){
    this.navCtrl.push(DesconexionPage)
  }

  goToBafiEntel(){
    this.navCtrl.push(BafiEntelPage)
  }

  goToDuoEntel(){
    this.navCtrl.push(DuoEntelPage)
  }

  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userId')
    localStorage.removeItem('empresa')
    localStorage.removeItem('lastLogin')
    this.navCtrl.setRoot(LoginPage)
    this.navCtrl.popToRoot()
  }

}

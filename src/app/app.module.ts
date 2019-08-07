import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { LoginPage } from '../pages/login/login'
import { CategoriasPage } from "../pages/categorias/categorias"
import { InstalacionesHfcPage } from "../pages/instalaciones-hfc/instalaciones-hfc"
import { InstalacionesDthPage } from "../pages/instalaciones-dth/instalaciones-dth"
import { MantencionHfcPage } from "../pages/mantencion-hfc/mantencion-hfc"
import { MantencionDthPage } from "../pages/mantencion-dth/mantencion-dth"
import { DesconexionPage } from "../pages/desconexion/desconexion"
import { InstalacionesDthEntelPage } from "../pages/instalaciones-dth-entel/instalaciones-dth-entel"
import { ModalInstalacionesDthEntelPage } from "../pages/modal-instalaciones-dth-entel/modal-instalaciones-dth-entel"
import { ModalInstalacionesHfcPage } from "../pages/modal-instalaciones-hfc/modal-instalaciones-hfc"
import { ModalInstalacionesDthPage } from "../pages/modal-instalaciones-dth/modal-instalaciones-dth"
import { ModalMantencionDthPage } from "../pages/modal-mantencion-dth/modal-mantencion-dth"
import { ModalMantencionHfcPage } from "../pages/modal-mantencion-hfc/modal-mantencion-hfc"
import { ModalDesconexionPage } from "../pages/modal-desconexion/modal-desconexion"
import { FormDetailPage } from "../pages/form-detail/form-detail"
import { Camera } from "@ionic-native/camera"
import { Base64ToGallery } from "@ionic-native/base64-to-gallery"
import { HttpClientModule } from '@angular/common/http'
import { ApiServiceProvider } from '../providers/api-service/api-service'
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { Geolocation } from '@ionic-native/geolocation'
import { Diagnostic } from '@ionic-native/diagnostic'
import { BafiEntelPage } from "../pages/bafi-entel/bafi-entel"
import { DuoEntelPage } from "../pages/duo-entel/duo-entel"
import { ModalBafiEntelPage } from "../pages/modal-bafi-entel/modal-bafi-entel"
import { ModalDuoEntelPage } from "../pages/modal-duo-entel/modal-duo-entel"
import { NoFormsComponent } from "../components/no-forms/no-forms"
import { CanGoBackProvider } from '../providers/can-go-back/can-go-back';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    CategoriasPage,
    DesconexionPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    MantencionDthPage,
    MantencionHfcPage,
    NoFormsComponent,
    InstalacionesDthEntelPage,
    BafiEntelPage,
    DuoEntelPage,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage,
    ModalDesconexionPage,
    FormDetailPage,
    ModalInstalacionesDthEntelPage,
    ModalBafiEntelPage,
    ModalDuoEntelPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    CategoriasPage,
    DesconexionPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    MantencionDthPage,
    MantencionHfcPage,
    InstalacionesDthEntelPage,
    BafiEntelPage,
    DuoEntelPage,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage,
    ModalDesconexionPage,
    FormDetailPage,
    ModalInstalacionesDthEntelPage,
    ModalBafiEntelPage,
    ModalDuoEntelPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ApiServiceProvider,
    Base64ToGallery,
    BarcodeScanner,
    Geolocation,
    Diagnostic,
    CanGoBackProvider
  ]
})
export class AppModule {}

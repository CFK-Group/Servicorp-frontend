import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CategoriasPage } from "../pages/categorias/categorias";
import { InstalacionesHfcPage } from "../pages/instalaciones-hfc/instalaciones-hfc";
import { InstalacionesDthPage } from "../pages/instalaciones-dth/instalaciones-dth";
import { MantencionHfcPage } from "../pages/mantencion-hfc/mantencion-hfc";
import { MantencionDthPage } from "../pages/mantencion-dth/mantencion-dth";
import { DesconexionPage } from "../pages/desconexion/desconexion";
import { ModalInstalacionesHfcPage } from "../pages/modal-instalaciones-hfc/modal-instalaciones-hfc";
import { ModalInstalacionesDthPage } from "../pages/modal-instalaciones-dth/modal-instalaciones-dth";
import { ModalMantencionDthPage } from "../pages/modal-mantencion-dth/modal-mantencion-dth";
import { ModalMantencionHfcPage } from "../pages/modal-mantencion-hfc/modal-mantencion-hfc";
import { ModalDesconexionPage } from "../pages/modal-desconexion/modal-desconexion";

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
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage,
    ModalDesconexionPage
  ],
  imports: [
    BrowserModule,
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
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage,
    ModalDesconexionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { InstalacionesHfcPage } from "../pages/instalaciones-hfc/instalaciones-hfc";
import { InstalacionesDthPage } from "../pages/instalaciones-dth/instalaciones-dth";
import { ModalInstalacionesHfcPage } from "../pages/modal-instalaciones-hfc/modal-instalaciones-hfc";
import { ModalInstalacionesDthPage } from "../pages/modal-instalaciones-dth/modal-instalaciones-dth";
import { ModalMantencionDthPage } from "../pages/modal-mantencion-dth/modal-mantencion-dth";
import { ModalMantencionHfcPage } from "../pages/modal-mantencion-hfc/modal-mantencion-hfc";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    InstalacionesHfcPage,
    InstalacionesDthPage,
    ModalInstalacionesDthPage,
    ModalInstalacionesHfcPage,
    ModalMantencionDthPage,
    ModalMantencionHfcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

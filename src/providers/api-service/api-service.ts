import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../../app/user";
import "rxjs/Rx";

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
  url: string = "http://localhost:3000";

  constructor(public api: HttpClient) {

  }

  login(user: User){
    return this.api.post<User>(`${this.url}/login`, user).toPromise()
  }

  enviarFormularioInstalacionHFC(data:string){
    return this.api.post(`${this.url}/formulario/instalacion/hfc`, data).toPromise()
  }

  enviarFormularioInstalacionDTH(data:string){
    return this.api.post(`${this.url}/formulario/instalacion/dth`, data).toPromise()
  }

  enviarFormularioMantencionHFC(data:string){
    return this.api.post(`${this.url}/formulario/mantencion/hfc`, data).toPromise()
  }

  enviarFormularioMantencionDTH(data:string){
    return this.api.post(`${this.url}/formulario/mantencion/dth`, data).toPromise()
  }

  enviarFormularioDesconexion(data:string){
    return this.api.post(`${this.url}/formulario/desconexion`, data).toPromise()
  }

  getFormularios(data){
    if(data.tipoFormulario !== 'desconexion'){
      return this.api.get(`${this.url}/formulario/${data.tipoFormulario}/${data.subtipoFormulario}/${data.userToken}`).toPromise()
    }else {
      return this.api.get(`${this.url}/formulario/desconexion/${data.userToken}`).toPromise()
    }
  }

  getFormResponses(formularioId){
    return this.api.get(`${this.url}/respuestas/${formularioId}/${localStorage.getItem('userToken')}`).toPromise()
  }

  getFormQuestions(formularioId){
    return this.api.get(`${this.url}/preguntas/${formularioId}/${localStorage.getItem('userToken')}`).toPromise()
  }

}

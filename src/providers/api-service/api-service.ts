import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from "../../app/user"
import "rxjs/Rx"

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
  url: string = "http://genesis.xpass.cl:3001"
  // url: string = "http://192.168.0.4:3001"

  constructor(public api: HttpClient) { }

  login(user: User){
    return this.api.post<User>(`${this.url}/login`, user).toPromise()
  }

  enviarFormularioInstalacionHFC(data:string){
    return this.api.post(`${this.url}/formulario/claro/instalacion/hfc`, data).toPromise()
  }

  enviarFormularioInstalacionDTH(data:string){
    return this.api.post(`${this.url}/formulario/claro/instalacion/dth`, data).toPromise()
  }

  enviarFormularioInstalacionDTHEntel(data:string){
    return this.api.post(`${this.url}/formulario/entel/instalacion/dth`, data).toPromise()
  }

  enviarFormularioMantencionHFC(data:string){
    return this.api.post(`${this.url}/formulario/claro/mantencion/hfc`, data).toPromise()
  }

  enviarFormularioMantencionDTH(data:string){
    return this.api.post(`${this.url}/formulario/claro/mantencion/dth`, data).toPromise()
  }

  enviarFormularioDesconexion(data:string){
    return this.api.post(`${this.url}/formulario/claro/desconexion`, data).toPromise()
  }

  getFormularios(data, empresa:string){
    if(data.tipoFormulario !== 'desconexion'){
      return this.api.get(`${this.url}/formulario/${empresa}/${data.tipoFormulario}/${data.subtipoFormulario}/${data.userToken}`).toPromise()
    }else {
      return this.api.get(`${this.url}/formulario/${empresa}/desconexion/${data.userToken}`).toPromise()
    }
  }

  getFormResponses(formularioId){
    return this.api.get(`${this.url}/respuestas/${formularioId}/${localStorage.getItem('userToken')}`).toPromise()
  }

  getFormQuestions(formularioId){
    return this.api.get(`${this.url}/preguntas/${formularioId}/${localStorage.getItem('userToken')}`).toPromise()
  }

  getFormImgs(formularioId){
    return this.api.get(`${this.url}/imgs/${formularioId}/${localStorage.getItem('userToken')}`).toPromise()
  }

  putQuestions(data, tipoFormularioId){
    return this.api.put(`${this.url}/edit-form/${tipoFormularioId}/${localStorage.getItem('userToken')}`, data).toPromise()
  }

}

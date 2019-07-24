import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CanGoBackProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CanGoBackProvider {
  private canGoBack = true;
  
	constructor() {}
  
  public setValue(value: boolean) {
    this.canGoBack = value;
  }
  
  public getValue(): boolean {
    return this.canGoBack;
  } 

}

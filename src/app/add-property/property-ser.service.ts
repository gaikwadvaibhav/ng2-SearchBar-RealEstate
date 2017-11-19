import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PropertySerService {

  constructor( private http : Http) { }

addProperty(property1){
  return  this.http.post('http://localhost:8080/addproperty', property1);
}

}

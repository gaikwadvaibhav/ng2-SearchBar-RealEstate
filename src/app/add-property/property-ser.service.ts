import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import {Headers} from '@angular/http';


@Injectable()
export class PropertySerService {

  constructor( private http : Http) { }

addProperty(property1){
  return  this.http.post('http://localhost:8080/addproperty', property1);
}



pushFileToStorage(file: File): Observable<any> {
  console.log("In File",file);
  
  let formdata : FormData = new FormData();

  formdata.append('file', file);

console.log("IN FormData",formdata);

return this.http.post("http://localhost:8080/upload/file",formdata);

  // return this.http.request(req);
}

}

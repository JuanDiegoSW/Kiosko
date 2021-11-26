import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { GLOBAL } from "./GLOBAL";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  public url;

  constructor( private http:HttpClient ) {
    this.url = GLOBAL.url;
   }

  // get_categorias():Observable<any>{
  //   let headers = new HttpHeaders().set('Content-Type','application/json');
  //   return this.http.get(this.url+'/categorias',{headers:headers});
  // }
  getCategorias(){
    return this.http.get<any>(this.url + 'proveedores');
  }


}

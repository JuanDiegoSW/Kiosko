import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL = 'http://localhost:8081/api/v1';
  constructor( private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<any>(this.URL + '/articulos');
  }
}

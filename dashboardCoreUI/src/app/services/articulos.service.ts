import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private URL = 'http://localhost:8081/api/v1';

  constructor( private http:HttpClient) { }

  getArticulos(){
    return this.http.get<any>(this.URL + '/articulos');
  }
}

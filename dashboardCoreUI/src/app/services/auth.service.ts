import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:8081/api/v1/usuarios';

  constructor(private http: HttpClient, private router:Router) { }
  signUpUser(user) {

    return this.http.post<any>(this.URL + '/register', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/tasks']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

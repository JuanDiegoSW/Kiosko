import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  implements OnInit{
  user ={}
  constructor(
    private authService: AuthService,
    private router: Router
  ){}
  ngOnInit(){

  }
  signIn(){
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard']);
        },
        err => console.log(err)
      )

  }
 }

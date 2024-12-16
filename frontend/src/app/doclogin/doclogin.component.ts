import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  standalone: false,

  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {


  username: string = '';
  password: string = '';

  invalidLogin = false;

  constructor(private router: Router,private docauth:DocauthService) { }

  checkLogin() {

    if (this.docauth.authenticate(this.username,this.password)) {

     this.router.navigate(['docdash'])
     this.invalidLogin=false
   
    }
    else{

      this.invalidLogin=true
      alert("Wrong Credintials")
     this.router.navigate(['home'])
    

    }
  }
}

import { Injectable, setTestabilityGetter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username2:string, password2:string) {
    if (username2 == 'mohiddin' && password2 == 'Mo1234@') {
      sessionStorage.setItem('username2', username2);
      return true;
    }
    else {

      return false
    }
  }

  isUserLoggedIn(){
    console.log("User has been loggin");
    let user=sessionStorage.getItem('username2');
    return !(user==null)

  }
  log0ut(){
    console.log("User has been loggedout")
    sessionStorage.removeItem('username2');
  }
}

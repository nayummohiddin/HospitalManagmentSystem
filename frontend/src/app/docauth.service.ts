import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }
  authenticate(username:string,password:string){
    if (username == "nayum" && password== "Na1234@") {
      sessionStorage.setItem('username', username);
      
      return true;
    }
    else{
     return false;
    }
  }
  isUserLoggedIn(){
    console.log("Doctor has been logged-in")
    let user=sessionStorage.getItem('username');
    console.log(user);
 return !(user==null)
  }

  logout(){

    console.log("Doctor has been logged-out")
    sessionStorage.removeItem('username');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'LOGIN PAGE';

  displayName='';
  displayEmail='';

  getValue(name:string , email:string){
    this.displayName = name;
    this.displayEmail = email;
  }

}

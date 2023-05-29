import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'REGISTRATION PAGE';

  displayName='';
  displayAddress='';
  displayNumber='';
  displayEmail='';

  getValue(name:string , address:string , number:string , email:string){
    this.displayName = name;
    this.displayAddress = address;
    this.displayNumber = number;
    this.displayEmail = email;
  }

}

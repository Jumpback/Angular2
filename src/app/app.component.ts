import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewExample';

  constructor(private router:Router){}

  goToPage(Name:string):void{
    this.router.navigate([`${Name}`]); //make sure to do ` and not '
  }

  goToRegister(RName:string):void{
    this.router.navigate([`${RName}`]); //make sure to do ` and not '
  }
}

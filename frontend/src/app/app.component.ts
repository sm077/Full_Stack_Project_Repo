import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(private router:Router){}
  show(){
    if (this.router.url.startsWith('/login')) {
      return false;
    } else {
      return true;
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isUserSignedIn = false;

  constructor(private router: Router) { }

  signIn() {
    // this.isUserSignedIn = true;
    this.router.navigateByUrl('/auth');
  }
}

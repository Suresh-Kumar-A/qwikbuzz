import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  // auth: Auth = inject(Auth)
  // ui: firebaseui.auth.AuthUI = new firebaseui.auth.AuthUI(getAuth());
  constructor() { }

  ngOnInit(): void {
    
  }

}

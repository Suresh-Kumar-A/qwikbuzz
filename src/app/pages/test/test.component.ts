import { Component, OnInit, inject } from '@angular/core';
import firebase from 'firebase/compat/app';
// import 'firebaseui/dist/firebaseui.css'
import { EmailAuthProvider, GithubAuthProvider, GoogleAuthProvider, PhoneAuthProvider, getAuth } from "firebase/auth";
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  auth: Auth = inject(Auth)
  // ui: firebaseui.auth.AuthUI = new firebaseui.auth.AuthUI(getAuth());
  constructor() { }

  ngOnInit(): void {
    // this.ui.start('#firebaseui-auth-container', {
    //   signInOptions: [
    //     GoogleAuthProvider.PROVIDER_ID,
    //     GithubAuthProvider.PROVIDER_ID,
    //     EmailAuthProvider.PROVIDER_ID,
    //     PhoneAuthProvider.PROVIDER_ID
    //   ]
    // });
    this.auth.onAuthStateChanged((user)=>{
      if(user){
        console.log("Authenticated: ",user);
      }else{
        console.error("Unauthenticated with no response");
      }
    })
  }

  


  signInSuccessful(authResult: any) {

  }

}

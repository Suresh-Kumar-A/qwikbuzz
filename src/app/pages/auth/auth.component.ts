import { Component, OnInit, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  EmailAuthProvider, GithubAuthProvider, GoogleAuthProvider,
  onAuthStateChanged, signInAnonymously, signInWithPopup
} from "firebase/auth";
import { AppUser } from 'src/app/models/appuser.modal';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  auth: Auth = inject(Auth);
  // guestUserForm: FormGroup = new FormGroup({
  //   guestName: new FormControl('')
  // });
  guestName: string | null = '';

  constructor(private router: Router, private storageSvc: StorageService) { }

  ngOnInit(): void {
    if (this.storageSvc.isUserLoggedIn()) {
      console.info("User Already Logged In.... redirecting");
      this.router.navigateByUrl("/");
    }
    // onAuthStateChanged(this.auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/auth.user
    //     console.log("User udpate: ", user);
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //     console.log("Empty udpate: ");
    //   }
    // });
  }

  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential != null) {
        const token = credential.accessToken;
        console.info("Access Token", token);
      }
      const user: AppUser = result.user;
      console.info("Logged In User Info: ", user);

      this.storageSvc.saveUserInfoInSession(user);
      this.router.navigateByUrl("/");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(error);
      console.error("Err Type: ", credential);
    });
  }

  signInAsGuest() {
    console.log(this.guestName)
    if (this.guestName == undefined || this.guestName == '') {
      alert("Guest Display Name in invalid");
      return;
    }
    signInAnonymously(this.auth).then((result) => {
      const user: AppUser = result.user;
      user.displayName = this.guestName;
      console.info("Logged In User Info: ", user);

      this.storageSvc.saveUserInfoInSession(user);
      this.router.navigateByUrl("/");
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.error(error);
      console.error("Err Type: ", credential);
    });
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/models/appuser.modal';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isUserSignedIn = false;
  appUser: AppUser | undefined;
  showaddBuzzModel = false;
  addBuzzFormGroup: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  constructor(private router: Router,  private storageSvc: StorageService) { }

  ngOnInit(): void {
    if (this.storageSvc.isUserLoggedIn()) {
      this.isUserSignedIn = true;
      this.appUser = this.storageSvc.getUserInfoFromSession();
    }
  }

  signIn() {
    this.router.navigateByUrl('/auth');
  }

  addBuzzRoom(){
      this.showaddBuzzModel = false;
  }
}

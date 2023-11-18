import { Component, OnInit, inject } from '@angular/core';
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
}

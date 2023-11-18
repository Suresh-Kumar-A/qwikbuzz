import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { ImageModule } from "primeng/image";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextModule } from "primeng/inputtext";

import { ToastModule } from "primeng/toast";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FormsModule } from '@angular/forms';

import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { AuthComponent } from './pages/auth/auth.component';
import { environment } from 'src/environment/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { StorageService } from './services/storage.service';
import { GuestInfoComponent } from './components/guest.info/guest.info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    GuestInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ImageModule,
    CheckboxModule,
    InputTextModule,
    ToastModule,
    DividerModule,
    TagModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbModule,
    MenuModule,
    RippleModule,
    BadgeModule,
    TooltipModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  export class AppModule { }

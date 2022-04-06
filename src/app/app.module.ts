import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantDashComponent } from './restaurant-dash/restaurant-dash.component';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantDashComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything

    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

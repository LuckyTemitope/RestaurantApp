import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn!: boolean;;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.userLoggedIn = false;

    this.afAuth.onAuthStateChanged((user: any) => {
      if(user){
        this.userLoggedIn = true;
      } else {
        this.userLoggedIn = false;
      }
    })
  }

  signupUser(user: any) : Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result: any) => {
        let emailLower = user.email.toLowerCase();
        result.user.sendEmailNotification()

      }).catch((error) => {
        console.log('Auth Service: signup Error', error);
        if(error.code) {
          return {isValid: false, message: error.message}
        }
        return;
      })
  }

  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        return {isValid: true, message: 'Login Successful'}
      }).catch(error => {
        console.log('Auth Service: login Error', error);
        if(error.code) {
          return {isValid: false, message: error.message}
        }
        return;
      })
  }

}

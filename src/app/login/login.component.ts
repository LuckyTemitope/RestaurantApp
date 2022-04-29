import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  firebaseErrorMessage!: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _http: HttpClient,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {


    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

  }

  login() {
    console.log('login');

    if (this.loginForm.invalid){
      alert('Form Invalid')
      return;
    }

    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((result: any) => {
      if (result !== null) {     // null means it worked. It went through
        console.log(result);
        console.log('logging in...');
        this.router.navigate(['/restaurant']);    // when the user is logged in navigate to the restaurant dashboard page
      } else if (result.isValid === false) {
        console.error('login error: ', result);
        this.firebaseErrorMessage = result.message;
      } else {
        this.router.navigate(['/signup']);
      }
    }).catch((e) => {
      console.log(e);
    })

    console.log('loginForm: ', this.loginForm.value);
   }
}

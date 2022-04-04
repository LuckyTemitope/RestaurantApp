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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _http: HttpClient,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {

  }

  login() {

    if (this.loginForm.invalid){
      return;
    }

    this.authService.loginUser(this.loginForm.value.email , this.loginForm.value.password).then((result: any) => {
      if (result == null) {     // null means it worked. It went through
        console.log('logging in...');
        this.router.navigate(['/restaurant']);    // when the user is logged in navigate to the restaurant dashboard page
      } else if (result.isValid === false) {
        console.error('login error: ', result);
        this.firebaseErrorMessage = result.message;
      }
    }).catch(() => {})


    // this._http.get<any>('http://localhost:3000/signup').subscribe(
    //   (res) => {
    //     const user = res.find(
    //       (s: any) =>
    //         s.email === this.loginForm.value.email &&
    //         s.password === this.loginForm.value.password
    //     );

    //     if (user) {
    //       alert(`User ${user.name} logged in successfully`);
    //       this.loginForm.reset();
    //       this.router.navigate(['/restaurant']);
    //     } else {
    //       alert(`Error logging in`);
    //     }
    //   },
    //   (err) => {
    //     alert('Error: ' + err);
    //   }
    // );
  }
}

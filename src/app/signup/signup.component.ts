
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  firebaseErrorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    public afAuth: AngularFireAuth
  ) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Make method to create user
  signup() {

    if(this.signupForm.invalid){
      return;
    }

    this.authService.signupUser(this.signupForm.value).then((result: any) => {
      if (result == null) {
        this.router.navigate(['/restaurant']);
      } else if(result.isValid === false) {
        this.firebaseErrorMessage = result.message;
      }
      }).catch(() => {

      })

    // this.userService.addUser(this.signupForm.value).subscribe(
    //   (res) => {
    //     alert('Registration Successful');
    //     this.signupForm.reset();
    //     this.router.navigate(['login']);
    //   },
    //   (error) => {
    //     alert('Error: ' + error.message);
    //   }
    // );
  }
}

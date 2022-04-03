import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      password: [''],
    });
  }

  // Make method to create user
  signup() {
    this.userService.addUser(this.signupForm.value).subscribe(
      (res) => {
        alert('Registration Successful');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      (error) => {
        alert('Error: ' + error.message);
      }
    );
  }
}

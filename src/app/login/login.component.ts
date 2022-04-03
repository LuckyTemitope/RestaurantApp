import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  login() {
    this._http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user = res.find(
          (s: any) =>
            s.email === this.loginForm.value.email &&
            s.password === this.loginForm.value.password
        );

        if (user) {
          alert(`User ${user.name} logged in successfully`);
          this.loginForm.reset();
          this.router.navigate(['/restaurant']);
        } else {
          alert(`Error logging in`);
        }
      },
      (err) => {
        alert('Error: ' + err);
      }
    );
  }
}

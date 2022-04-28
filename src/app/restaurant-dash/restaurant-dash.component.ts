import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.scss'],
})
export class RestaurantDashComponent implements OnInit {
  formValue!: FormGroup;
  restaurantModelObject: RestaurantData = new RestaurantData();
  allRestaurants: any[] = [];
  showAdd!: boolean;
  showBtn!: boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService, public afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });

    this.getRestaurants();
  }

  clickAddRestaurant() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  // Subscribe to the api data mapped via Services
  addRestaurant() {
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;

    this.api.addRestaurant(this.restaurantModelObject).subscribe(
      (res) => {
        console.log(res);
        alert('Restaurant Added Successfully');
        this.formValue.reset();
        this.getRestaurants();
      },
      (error) => {
        alert('Error Adding Restaurant: ' + error.message);
      }
    );
  }

  getRestaurants() {
    this.api.getRestaurant().subscribe((data) => {
      this.allRestaurants = data;
    });
  }

  deleteRestaurant(data: any) {
    this.api.deleteRestaurant(data.id).subscribe((res) => {
      alert('Restaurant deleted Successfully')
      this.getRestaurants();
    })
  }

  editRestaurant(data: any) {
    this.showAdd = false;
    this.showBtn = true;

    this.restaurantModelObject.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    this.formValue.controls['review'].setValue(data.review);
  }

  updateRestaurant() {
    this.restaurantModelObject.name = this.formValue.value.name;
    this.restaurantModelObject.email = this.formValue.value.email;
    this.restaurantModelObject.mobile = this.formValue.value.mobile;
    this.restaurantModelObject.address = this.formValue.value.address;
    this.restaurantModelObject.services = this.formValue.value.services;
    this.restaurantModelObject.review = this.formValue.value.review;

    this.api.updateRestaurant(this.restaurantModelObject).subscribe((res) => {
      alert('Restaurant Details Updated Successfully');

      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getRestaurants();
    })
  }

  logout():void {
    this.afAuth.signOut();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) {}

  addUser(data: any) {
    return this._http.post<any>("http://localhost:3000/signup", data)
      .pipe(map((res:any) => {
        return res
      }));
  }

}

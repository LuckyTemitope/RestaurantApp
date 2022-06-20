import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  hostDomain  = environment.hostName;
  constructor(private _http: HttpClient) {

  }

  // TODO: Create functions for GET, POST, PUT and DELETE

  // TODO: Create Restaurant Using Post Methods
  addRestaurant(data: any) {
    return this._http.post<any>(this.hostDomain, data)
      .pipe(map((res:any) => {
        return res
      }));
  }

  // TODO: Get Restaurant Data Using Get Methods
  getRestaurant() {
    return this._http.get<any>(this.hostDomain).pipe(map((res:any) => {
      return res
    }))
  }

  // TODO: Update Restaurant Data Using Put Methods
  updateRestaurant(data: any) {
    return this._http.put<any>(this.hostDomain + data.id, data).pipe(map((res:any) => {
      return res
    }))
  }

  // TODO: Delete Restaurant Data Using Delete Methods
  deleteRestaurant(data: any) {
    return this._http.delete<any>(this.hostDomain + data).pipe(map((res:any) => {
      return res
    }))
  }
}

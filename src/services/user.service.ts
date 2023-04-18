import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private urlApi :String = environment.apiUrl;
   private endUrlLogin :String = 'api/Userlogin';

  constructor( private http:HttpClient) {  }

  public getUser():Observable<any> {
    return this.http.get(`${this.urlApi}${this.endUrlLogin}`)

  }
}

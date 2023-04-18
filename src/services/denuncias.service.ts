import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {
   private urlApi :String = environment.apiUrl;
   private endUrlLogin :String = 'api/Denuncia';

  constructor( private http:HttpClient) {  }

  public getDenuncias():Observable<any> {
    return this.http.get(`${this.urlApi}${this.endUrlLogin}`)

  }
  public putDenuncias(param:any):Observable<any> {
    return this.http.put(`${this.urlApi}${this.endUrlLogin}`+'sSP/?',param)

  }

  public postComDenuncias(denuncia_State:any):Observable<any> {
    return this.http.post(`${this.urlApi}${this.endUrlLogin}`+'sSP',denuncia_State)

  }
 
}

import { EventEmitter, Injectable,Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export interface Denuncia{
  Id:number,
 name:String;
}
const initDenuncia:Denuncia ={
  Id:0,
  name:''
  }

@Injectable({
  providedIn: 'root'
})



export class DetailServiceService {

  private denuncia$ = new BehaviorSubject<Denuncia>(initDenuncia);
 
  constructor() { }
  

  get selectedDenuncia():Observable<Denuncia>{
 
    return this.denuncia$.asObservable();
  }
  setDenuncia(denuncia:Denuncia):void{
    this.denuncia$.next(denuncia);
  }


 
}

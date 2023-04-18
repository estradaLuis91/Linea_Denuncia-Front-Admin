import { Component, Injectable, OnInit, inject,Input } from '@angular/core';
import { DenunciasService } from 'src/services/denuncias.service';
import { DetailServiceService } from 'src/services/detail.service.service';
import { Denuncia } from '../../../../services/detail.service.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})

export class ConfirmDialogComponent implements OnInit {
  id_Denuncia:any;
  status = '';
  comm :any;
  denuncias=[{id:0}];
 denuncia=[{id:null}];
 selectedDen$ =this._detailService.selectedDenuncia;
 public subscription!: Subscription;
 
  constructor(private _detailService: DetailServiceService , private _denunciaService : DenunciasService)  { }

  ngOnInit(){
    this.subscription = this.selectedDen$.subscribe(data => {
      this.id_Denuncia = data;
    })
  console.log( this.id_Denuncia)

  }

  ngOnDestroy() {
   this.subscription.unsubscribe();
  }

  
guardar(){
  let txtcomm = document.querySelector('textarea')!;
  this.comm = txtcomm.value;
   this.postComm({denuncia_Id:this.id_Denuncia,status:this.status,comentarios:this.comm})
   this.putStatus({Denuncia_Id:this.id_Denuncia,Status:this.status});
  }
  
  onClick(e:string){
    this.status = e;
  }

    
  postComm(detailDen:any){
    console.log(detailDen)
    this._denunciaService.postComDenuncias(detailDen).subscribe(data =>{
        alert('Comentarios agregados')
    })
  }

  putStatus(param:any){
    console.log(param)
    this._denunciaService.putDenuncias(param).subscribe(data =>{
      alert('Estado del la denuncia actualizado con éxito');
    }
    )
    
  } 
}

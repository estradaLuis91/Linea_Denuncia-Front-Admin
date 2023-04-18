import { Component, OnInit } from '@angular/core';
import { DenunciasService } from 'src/services/denuncias.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { DetailServiceService } from 'src/services/detail.service.service';
import { map } from 'rxjs';





@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {
  displayedColumns: string[] = ['folio', 'status', 'detail'];
  
  denuncias =[{
    country_id:'',
    state_id:'',
    ncentro: null,
    anonim:'',
    complete_Name:'',
    email:'',
    phone:'',
    folio:'',
    create_Date:'',
    user_Password:'',
    detalle:'',
    eo_id:'',
    id:0
    
  }]
  dataSource = new MatTableDataSource(this.denuncias);
  status=[{status:'',comen:''}];
folioedit:any;


  constructor(private _denunciaService: DenunciasService , private md:MatDialog, private _detailService:DetailServiceService) { 
    this.getDenuncias()
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   
  }

  ngOnInit(): void {
    this.getDenuncias()
    console.log(this.denuncias)
    this._detailService.selectedDenuncia.subscribe(den => this.folioedit= den)
  }

getDenuncias(){
  let denuncias=[{ eO_Id:'',
  country_id:'',
  state_id:'',
  ncentro: null,
  anonim:'',
  complete_Name:'',
  email:'',
  phone:'',
  folio:'',
  create_Date:'',
  user_Password:'',
  detalle:'',
  eo_id:'',
id:0}];
  this._denunciaService.getDenuncias().subscribe(data =>{
    data.map(function(e:any,index:number) {
     denuncias[index] = e
  });
  this.denuncias = denuncias;
  console.log(this.denuncias)
  this.namedEo()
  });
 
}
 
 detail(folio:any){

this._detailService.setDenuncia(folio);
  

 this.md.open(ConfirmDialogComponent);

} 

namedEo(){
  this.denuncias.map((e:any,index) => {
    if(e.eO_Id == 1) this.denuncias[index].eo_id = 'Afore Coppel';
    if(e.eO_Id == 2) this.denuncias[index].eo_id = 'BanCoppel';
    if(e.eO_Id == 3) this.denuncias[index].eo_id = 'Coppel';
 });

}





}

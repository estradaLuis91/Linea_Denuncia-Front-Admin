import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DenunciasComponent } from './denuncias.component';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    DenunciasComponent
  ],
  imports: [
    CommonModule,
    DenunciasRoutingModule,
    SharedModule,
    MatTableModule
  ]
})
export class DenunciasModule { }

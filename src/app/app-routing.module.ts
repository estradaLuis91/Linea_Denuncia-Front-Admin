import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'' , redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path:'denuncias' , loadChildren:()=> import('./components/denuncias/denuncias.module').then(x => x.DenunciasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

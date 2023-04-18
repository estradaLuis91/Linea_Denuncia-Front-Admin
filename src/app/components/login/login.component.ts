import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loading = false;
  dataUser = [{"id":'',"username":'',"password" :''}];
  constructor(private fb: FormBuilder , private _snackBar: MatSnackBar , private _userLogin : UserService ,private router : Router) { 
    this.form = this.fb.group({
      user: ['',Validators.required],
      password :['',Validators.required]
    });

    
  }
  login(){
  
   const user =  this.form.value.user
   const password =  this.form.value.password
  const snackbar = this._snackBar;
  var existUser = false;

  ///Valid user exists
  for (var i = 0; i < this.dataUser.length; i++) {
      console.log(this.dataUser[i].username ,user)
      console.log(this.dataUser[i].password ,password)

    if(this.dataUser[i].username == user && this.dataUser[i].password == password){
      existUser = true;
      snackbar.open('Ingreso exitoso!','',({
        horizontalPosition : 'center',
        verticalPosition: 'bottom',
        duration : 5000
       
      })) 
      break;
   
     } else {
      snackbar.open('Usuario y/o contraseña inválidos','',({
        horizontalPosition : 'center',
        verticalPosition: 'bottom',
        duration : 5000    
      }))
     }

};  if(existUser==true) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['denuncias'])
    },1500
    );}
  }


  getUser(){
    this._userLogin.getUser().subscribe(data =>{
      this.dataUser= data;
      console.log(data);
    });
  }


  ngOnInit(): void {
    this.getUser();
  }

}

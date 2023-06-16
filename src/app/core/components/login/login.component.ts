import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}
  isLoading:boolean=false;
  loginForm:FormGroup=new FormGroup({

    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z]{3,8}$')]),
  })
  // loginWithGoogle(){
  //   this._AuthService.signInWithGoogle().then((res:any)=>{
  //     this._Router.navigateByUrl('landing');
  //   }).catch((error:any)=>{
  //     console.error(error);
  //   })
  // }
  loginWithEmailAndPassword(){
    // console.log(this.loginForm.value);
    const userData=Object.assign(this.loginForm.value,{email:this.loginForm.value.email});
    // console.log(userData);
    this._AuthService.signinWithEmailAndPassword(userData).then((res:any)=>{
      this._Router.navigateByUrl('landing');
    }).catch((error:any)=>{
           console.error(error);
         })

  }
}

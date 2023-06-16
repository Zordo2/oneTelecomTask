import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  isLoading:boolean=false;
  registerForm:FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern('^[A-Z][a-z]{3,8}$')]),
  })
  registerWithEmailAndPassword(){
    // console.log(this.loginForm.value);
    const userData=Object.assign(this.registerForm.value,{email:this.registerForm.value.email});
    // console.log(userData);
    this._AuthService.registerWithEmailAndPassword(userData).then((res:any)=>{
      this._Router.navigateByUrl('login');
    }).catch((error:any)=>{
           console.error(error);
         })

  }
}

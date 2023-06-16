import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import {GoogleAuthProvider} from 'firebase/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _AngularFireAuth:AngularFireAuth) { }
  signInWithGoogle(){
    return this._AngularFireAuth.signInWithPopup(new GoogleAuthProvider());
  }
  registerWithEmailAndPassword(user :{email:string,password:string}){
    return this._AngularFireAuth.createUserWithEmailAndPassword(user.email,user.password);
  }
  signinWithEmailAndPassword(user :{email:string,password:string}){
    return this._AngularFireAuth.signInWithEmailAndPassword(user.email,user.password);
  }
}

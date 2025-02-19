import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignUp } from '../../types/data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  apiUrl:string='http://localhost:3000/seller'
  isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(data:ISignUp){
    this.http.post(this.apiUrl,data,{
      observe:'response'
    }).subscribe((result)=>{
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home'])
      console.log(result)
    });
  }
}

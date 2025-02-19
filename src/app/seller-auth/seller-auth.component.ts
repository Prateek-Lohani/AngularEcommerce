import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { ISignUp } from '../../types/data-type';

@Component({
  selector: 'app-seller-auth',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
  
})
export class SellerAuthComponent {


  constructor(private seller:SellerService,private router:Router){}

  signUp(data:ISignUp,form:any):void{
    console.log(data)
    this.seller.userSignUp(data);
    form.reset();
  }

}

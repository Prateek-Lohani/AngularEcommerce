import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seller-auth',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
  
})
export class SellerAuthComponent {


  constructor(private seller:SellerService){}

  signUp(data:object,form:any):void{
    console.log(data)
    this.seller.userSignUp(data).subscribe((result)=>console.log(result));
    form.reset();
  }

}

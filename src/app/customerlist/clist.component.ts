import { CustomerService } from './../customer.service';

import {Customer} from './customer'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clist',
   templateUrl: './clist.component.html',
  // template:`<p>name:{{customers[4].name}}</p>`,
  styleUrls: ['./clist.component.css']
})
export class ClistComponent
  {

    
  // customers:Customer[] = 
  // [
  //   {customerNo:1,name:"Rohit", address:" ",city:"Hyderabad", state:"Telangana",country:"india"},
  //   {customerNo:2,name:"Rahul", address:" ",city:"Hyderabad", state:"Maharashtra",country:"india"},
  //   {customerNo:3,name:"Radha", address:" ",city:"Hyderabad", state:"Kerala",country:"india"},
  //   {customerNo:4,name:"Rashi", address:" ",city:"Hyderabad", state:"Tamilnadu",country:"india"},
  //   {customerNo:5,name:"Revathi", address:" ",city:"Hyderabad", state:"Telangana",country:"india"},
  //   {customerNo:6,name:"Ramesh", address:" ",city:"Hyderabad", state:"Telangana",country:"india"},

  // ]
    customers:Customer[];
    ser:CustomerService;
    constructor()
    {
      this.ser = new CustomerService();
      this.customers = this.ser.getCustomers();
    }


  
}
import { Customer } from './customerlist/customer';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomerService 
{

  constructor() { }
  customers:Customer[] = 
  [
    {customerNo:1,name:"Rohit", address:" ",city:"Hyderabad", state:"Telangana",country:"india"},
    {customerNo:2,name:"Rahul", address:" ",city:"Hyderabad", state:"Maharashtra",country:"india"},
    {customerNo:3,name:"Radha", address:" ",city:"Hyderabad", state:"Kerala",country:"india"},
    {customerNo:4,name:"Rashi", address:" ",city:"Hyderabad", state:"Tamilnadu",country:"india"},
    

  ]
  getCustomers():Customer[]
  {
    return this.customers;
  }


}

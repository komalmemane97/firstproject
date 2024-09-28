import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-direct',
  templateUrl: './structural-direct.component.html',
  styleUrls: ['./structural-direct.component.css']
})
export class StructuralDirectComponent {
courses:string[]=["angular development","java","aws","devops"];

products:product[]=[
  {productName: "Laptop" ,price:50000, quantity: 2},
  {productName: "Iphone 15", price:100000,quantity:2},
  {productName: "LEU tv" , price:60000,quantity:1},
  {productName: "dell", price:40000,quantity:5}
];
}

interface product{
  productName:string;
  price:number;
  quantity:number;
}

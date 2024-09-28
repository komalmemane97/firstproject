import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  number1:number=0;
  number2:number=0;
  result:number=0;
  add(){
    this.result=this.number1+this.number2
  }
  sub(){
    this.result=this.number1-this.number2
  }
  multiply(){
    this.result=this.number1*this.number2
  }
  divide(){
    this.result=this.number1/this.number2
  }
  price:number=0;
  quantity:number=0;
  discount:number=0;
  totalprice:number=0;

  totalp(){
    this.totalprice=(this.price*this.quantity)-this.discount
  }

     name:string="komal";
     mobileno:number=0;
     birthdate:number=0;
     age:number=0;
  calculateAge(){
    if(this.birthdate){
      const birthdate=new Date(this.birthdate);
      const today=new Date();
      let age=today.getFullYear()-birthdate.getFullYear();
    const monthDifference = today.getMonth()-birthdate.getMonth();
     if(monthDifference < 0||(monthDifference ===0 &&today.getDate()<birthdate.getDate()))
      age--;
    }
    this.age= this.age ;
  }
}


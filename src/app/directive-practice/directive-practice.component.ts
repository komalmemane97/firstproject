import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent {
   age:number=19;
   isshow:boolean=false;

   diaplayMoreContent(){
    this.isshow=true;
   }

   removeContent(){
    this.isshow=false;
   }

   isLoggedIn:boolean=false;
   login(){
        this.isLoggedIn=true;
   }
   logout(){
        this.isLoggedIn=false;
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-db',
  templateUrl: './two-way-db.component.html',
  styleUrls: ['./two-way-db.component.css']
})
export class TwoWayDbComponent {
    firstName:string="john";
  //  changeName(){
    //  this.firstName="sam";
    //}
      //fnamechange(e:any){
        //if(e.LargeL!=null){
          //this.firstName=e.target.value;
        //}
      //}

      mobileNumber:string="";
      save()
        {
          console.log("Name:"  , this.firstName);
          console.log("mobile Number:" , this.mobileNumber);
        }
    }


import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
                     username:string="ovi";
                     useremailId:string="ovi@gmail.com";

                     employeeObj:any={
                      employeeId:101,
                      employeeName:"shravi",
                      designation:"software developer",
                      skills:["angular","HTML","CSS"]
                     }

                     imgPath:string="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png"

                     isDisabled:boolean=false;

                     btnclick(){
                      console.log("button clicked");
                     }
                    }

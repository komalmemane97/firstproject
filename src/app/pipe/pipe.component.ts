import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  msg="good morning"
 todayDate=new Date();

 employeedetails:any={
  employeeId:101,
  employeeName:"shravi",
  designation:"software developer",
  skills:["angular","HTML","CSS"],
  salary:50000,
  Income:78654.045
}
}

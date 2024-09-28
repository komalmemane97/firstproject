import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-example',
  templateUrl: './ngswitch-example.component.html',
  styleUrls: ['./ngswitch-example.component.css']
})
export class NgswitchExampleComponent {
orderStatus:string="pending";

updateStatus(status:string){
  this.orderStatus=status;
}
}

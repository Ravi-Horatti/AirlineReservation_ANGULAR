import { Component, OnInit } from '@angular/core';
import { AirlineserviceService } from '../airlineservice.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css'],
  providers:[ AirlineserviceService]
})
export class AirlinesComponent  {


 jsn:any

 username:String
 passw:String
  constructor(private flit:AirlineserviceService ) { }

  postBook(){
    this.jsn={"username":this.username,"passw":this.passw};
    this.flit.postDetails(this.jsn);
  }


}

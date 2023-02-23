import { Component, OnInit } from '@angular/core';
import {ConvertorService} from "../../services";
import {IConvertorInterface} from "../../interfaces";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  USDtoUAH:number;
  EURtoUAH:number;


  constructor(private convertorService: ConvertorService) { }

  ngOnInit(): void {
    this.getUSD();
    this.getEUR();
  }

  getUSD():void{
      this.convertorService.getUSDtoUAH().subscribe(
        (data: IConvertorInterface) => {
          this.USDtoUAH = parseFloat(data.result.toFixed(2));
        },
        error => console.log(error)
      );
  }

  getEUR():void{
    this.convertorService.getEURtoUAH().subscribe(
      (data:IConvertorInterface)=>{
        this.EURtoUAH =parseFloat(data.result.toFixed(2))
      }
    )
  }

}

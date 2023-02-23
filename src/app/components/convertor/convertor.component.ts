import { Component, OnInit } from '@angular/core';
import {ConvertorService} from "../../services";
import {IConvertorInterface} from "../../interfaces";

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.css']

})
export class ConvertorComponent implements OnInit {

  fromCurrency = 'UAH';
  toCurrency = 'USD';
  currencies = ['UAH', 'USD', 'EUR'];

  chooser = true;

  fromAmount = 0;
  toAmount = 0;
  rate = 0;


  constructor(private convertorService: ConvertorService) {}

  ngOnInit(): void {
    this.convertCurrency();

  }

  convertCurrency(): void {
    if(this.chooser){
      this.convertorService.getAll(this.fromCurrency, this.toCurrency, this.fromAmount).subscribe(
        (data: IConvertorInterface) => {
          this.rate = data.info.rate;
          this.toAmount = data.result;
        },
        error => console.log(error)
      );
    }
    if(!this.chooser){
      this.convertorService.getAll(this.toCurrency, this.fromCurrency, this.toAmount).subscribe(
        (data: IConvertorInterface) => {
          this.rate = data.info.rate;
          this.fromAmount = data.result;
        },
        error => console.log(error)
      );
    }
  }


  onFromCurrencyChange(newCurrency: string): void {
    this.fromCurrency = newCurrency;
    this.convertCurrency();
  }

  onToCurrencyChange(newCurrency: string): void {
    this.toCurrency = newCurrency;
    this.convertCurrency();
  }

  onFormAmountChange(newAmount: number): void {
    this.fromAmount = newAmount;
    this.chooser= true;
    this.convertCurrency();
  }

  onToAmountChange(newAmount:number):void{
    this.toAmount = newAmount;
    this.chooser= false;
    this.convertCurrency();
  }



}

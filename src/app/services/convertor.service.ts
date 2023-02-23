import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IConvertorInterface} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class ConvertorService {

  constructor(private httpClient:HttpClient) { }

  getAll(from:string,to:string,amount:number):Observable<IConvertorInterface>{
    return this.httpClient.get<IConvertorInterface>(`${urls.convert}${urls.apiKey}&from=${from}&to=${to}&amount=${amount}`)
  }
  getUSDtoUAH():Observable<IConvertorInterface>{
    return this.httpClient.get<IConvertorInterface>(`${urls.convert}${urls.apiKey}&from=USD&to=UAH&amount=1`)
  }
  getEURtoUAH():Observable<IConvertorInterface>{
    return this.httpClient.get<IConvertorInterface>(`${urls.convert}${urls.apiKey}&from=EUR&to=UAH&amount=1`)
  }

}

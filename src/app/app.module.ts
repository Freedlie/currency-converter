import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { ConvertorComponent } from './components/convertor/convertor.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";


const routes:Routes = [
  {path:'', component:MainLayoutComponent, children:[
      {path: '', redirectTo:'users', pathMatch:'full'},
      {path:'', component:  ConvertorComponent}
    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ConvertorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

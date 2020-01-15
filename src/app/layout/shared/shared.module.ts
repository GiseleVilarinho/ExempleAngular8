import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from '../product/product.service';
import { DataService } from './servies/data/data.service';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ProductService,
    DataService
  ]

})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import {HttpCleintModule} from '@angula/common/http';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpCleintModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }

import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/servies/data/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$: ReaplaySubject<any[]>;

  constructor(
    private data: DataService

  ) {
    this.products$ = data.products$;

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/servies/data/data.service';
import { Subscription, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products$: ReplaySubject<any[]>;

  private subProducs: Subscription;
  subscriptionProducts: any;

  constructor(
    private data: DataService

  ) {
    this.products$ = data.products$;
    this.subProducs = this.products$.subscribe((products) => console.log(products));

   }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
  this.subscriptionProducts.unsubscribe();
}

  }

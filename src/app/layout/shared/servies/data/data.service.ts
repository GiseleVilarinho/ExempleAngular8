import { Injectable } from '@angular/core';
import { ProductService } from 'src/app/layout/product/product.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public products: any[];
  public products$: ReplaySubject<any[]> = new ReplaySubject(1);
  //nesse caso $ quer dizer que essa variavel é um observece

  constructor(
    private produtcApi: ProductService

  ) { }

  public getProducts() {
    this.produtcApi.getAll().subscribe(
      (rest: any) => {
        this.products = res;
        this.products$.next(res);
      }
      );
  }
}

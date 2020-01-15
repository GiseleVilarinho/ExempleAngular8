import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/stock/products';

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get(this.url); // verificar se uso url ou url+getall
  }

  public create(product: any) {
    return this.http.post(this.url, product); // comprar com o arquivo do joao
  }
}

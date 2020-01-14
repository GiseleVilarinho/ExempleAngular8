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

  publi getAll() {
    return this.http.get(this.url+'getall'); // verificar se uso url ou url+getall
  }
}

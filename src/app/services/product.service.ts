import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProduct() : Observable<Product[]>{
    return this.http.get<Product[]>('http://5c68b019bad2070014abb46b.mockapi.io/demo/pro');
  }

  updateProduct(product:Product) : Observable<Product>{
    return this.http.put<Product>('http://5c68b019bad2070014abb46b.mockapi.io/demo/pro/')
  }
}

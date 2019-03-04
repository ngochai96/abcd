import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProduct() : Observable<Product[]>{
    return this.http.get<Product[]>('http://5c68b019bad2070014abb46b.mockapi.io/demo/pro');
  }

  updateProduct(product:Product) : Observable<Product>{
    return this.http.put<Product>(`http://5c68b019bad2070014abb46b.mockapi.io/demo/pro/${product.id}`,product,httpOptions);
  }

  deleteProduct(id:number) : Observable<Product>{
    return this.http.delete<Product>(`http://5c68b019bad2070014abb46b.mockapi.io/demo/pro/${id}`);
  }

  addProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>('http://5c68b019bad2070014abb46b.mockapi.io/demo/pro',product,httpOptions);
  }
}

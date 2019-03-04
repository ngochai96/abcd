import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './../services/product.service';
import { Product } from './../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productServices : ProductService) { }

  products : Product[] = [];
  @Input() pro : Product;

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() : void {
    this.productServices.getAllProduct().subscribe(data => this.products = data);
  }

  clickEditProduct(product:Product){
    this.pro = product;
  }
  close() : void{
    this.pro = null;
  }

  updateProduct() : void{
    
  }
}

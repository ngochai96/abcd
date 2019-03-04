import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() product : Product = new Product;

  constructor(private productService : ProductService,private location : Location) { }

  ngOnInit() {

  }

  addProduct() : void{
    console.log(this.product)
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.location.back();
    })
  }
}

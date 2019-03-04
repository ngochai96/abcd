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
    console.log('start');
    this.productServices.updateProduct(this.pro).subscribe(data=>console.log(data));
    this.pro = null;
  }

  deleteProduct(id:number):void{
    const kt = confirm("Bạn có muốn xóa ko?");
    if(kt === true){
      this.productServices.deleteProduct(id).subscribe(data=>{
        this.products.filter(product => product.id == id)
      })
    }
  }
}

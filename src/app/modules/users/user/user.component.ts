import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/api/products.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  products: any[]
  thereaAreProducts: boolean

  constructor(private productsService: ProductsService) {
    this.products = [];
    this.thereaAreProducts = false;
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data.products;
      console.log(data)
      if (this.products.length > 0) {
        this.thereaAreProducts = true;
      }
    });

  }


}

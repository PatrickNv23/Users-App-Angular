import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/api/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: any[];
  isLoading: boolean;
  constructor(private productsService: ProductsService) {
    this.products = [];
    this.isLoading = true;
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data.products;
      this.isLoading = false;
    })
  }
}

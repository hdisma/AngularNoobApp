import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/core/models/products/product';
import { ProductServiceService } from 'src/app/core/services/products/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductServiceService]
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Stuff management';
  products: Array<IProduct> = [];
  filter: string;
  filteredProducts: Array<IProduct>;
  isImageVisible: boolean = true;

  get listFilter(): string {
    return this.filter;
  }

  set listFilter(value: string) {
    this.filter = value;
    this.filteredProducts = this.filter ? this.performFilter(this.filter) : this.products;
  }

  constructor(private productService: ProductServiceService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = this.products;
    }, (error) => console.log);
  }

  private performFilter(filter: string): Array<IProduct> {
    filter = filter.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter) !== -1);
  }

  toogleImage(): void {
    this.isImageVisible = !this.isImageVisible;
  }

  onNotify(notification: string): void {
    console.log(`Notification: ${notification}`);
  }

}

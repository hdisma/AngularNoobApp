import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from 'src/app/core/models/products/product';
import { ProductServiceService } from 'src/app/core/services/products/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct | undefined;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductServiceService) { }

  ngOnInit() {
    const parameter: string = (this.route.snapshot.paramMap.get('id'));

    if (parameter) {
      const id: number = +parameter;
      this.getProduct(id);
    }

  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onNotify(notification: string): void {
    console.log(`Notification: ${notification}`);
  }

  private getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: error => console.error
    });
  }

}

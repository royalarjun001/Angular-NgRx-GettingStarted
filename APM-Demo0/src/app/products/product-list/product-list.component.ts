import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import { IState } from '../state/product-state.model';
import * as fromProduct from '../state/product.reducer';
import * as productActions from '../state/product.action';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private productService: ProductService,
              private store: Store<IState>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromProduct.getCurrentProduct)).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => this.products = products,
      error: (err: any) => this.errorMessage = err.error
    });

    this.store.pipe(select(fromProduct.getShowProductCode))
    .subscribe(showCode => this.displayCode = showCode );
  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    this.store.dispatch( new productActions.ToggleProductCode(value) );
  }

  newProduct(): void {
    this.store.dispatch( new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch( new productActions.SetCurrentProduct(product));
  }

}

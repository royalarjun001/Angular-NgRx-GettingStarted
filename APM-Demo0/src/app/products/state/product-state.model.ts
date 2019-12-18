import { Product } from '../product';
import * as fromRoot from 'src/app/app.state';

export interface IState extends fromRoot.IState {
  products: IProductState;
}
export interface IProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

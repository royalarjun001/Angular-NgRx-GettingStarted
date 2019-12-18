import { IProductState } from './product-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const initialState: IProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<IProductState>('products');
export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode)

export function reducer(state = initialState, action): IProductState {
  switch (action.type) {
     case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}

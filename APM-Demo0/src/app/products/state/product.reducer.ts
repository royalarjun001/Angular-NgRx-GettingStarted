import { IProductState } from './product-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionType } from './product.action';

const initialState: IProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<IProductState>('products');
export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);
export const getCurrentProduct = createSelector(getProductFeatureState, state => state.currentProduct);

export function reducer(state = initialState, action: ProductActions): IProductState {
  switch (action.type) {
     case ProductActionType.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };

     case ProductActionType.SetCurrentProduct:
      return {
         ...state,
        currentProduct: {  ...action.payload }
       };

     case ProductActionType.ClearCurrentProduct:
       return {
         ...state,
         currentProduct: null
       };

     case ProductActionType.InitializeCurrentProduct:
       return {
         ...state,
         currentProduct: {
           id: 0,
           productName: '',
           productCode: 'New',
           description: '',
           starRating: 0
         }
       };

    default:
      return state;
  }
}

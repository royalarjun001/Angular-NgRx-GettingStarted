import { IProductState } from './product-state.model';

const initialState: IProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

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

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
  isModalOpen: false,
  modalItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.OPEN_ITEM_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalItem: action.payload,
      };
    case ShopActionTypes.CLOSE_ITEM_MODAL:
      return {
        ...state,
        isModalOpen: false,
        modalItem: null,
      };
    default:
      return state;
  }
};

export default shopReducer;

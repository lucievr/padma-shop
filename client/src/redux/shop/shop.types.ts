export interface ShopItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: string;
  imageUrl: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  routeName: string;
  items: ShopItem[];
}

export interface shopState {
  readonly collections: CollectionItem[] | null;
  readonly isFetching: boolean;
  readonly errorMessage: string | undefined;
  readonly isModalOpen: boolean;
  readonly modalItem: ShopItem | null;
}

export enum ShopActionTypes {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE',
  OPEN_ITEM_MODAL = 'OPEN_ITEM_MODAL',
  CLOSE_ITEM_MODAL = 'CLOSE_ITEM_MODAL',
}

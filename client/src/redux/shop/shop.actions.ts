import { action } from 'typesafe-actions';
import { ShopActionTypes, ShopItem, CollectionItem } from './shop.types';

export const fetchCollectionsStart = () => action(ShopActionTypes.FETCH_COLLECTIONS_START);

export const fetchCollectionsSuccess = (collectionsMap: CollectionItem[]) => action(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS, collectionsMap);

export const fetchCollectionsFailure = (errorMessage: string) => action(ShopActionTypes.FETCH_COLLECTIONS_FAILURE, errorMessage);

export const openItemModal = (item: ShopItem) => action(ShopActionTypes.OPEN_ITEM_MODAL, item);

export const closeItemModal = () => action(ShopActionTypes.CLOSE_ITEM_MODAL);

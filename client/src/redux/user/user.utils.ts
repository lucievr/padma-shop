import { User } from './user.types';
import { updateUserProfileDoc } from '../../firebase/firebase.utils';

export const addItemToFavourites = (currentUser: User, itemId: number) => {
  if (currentUser.favourites) {
    try {
      updateUserProfileDoc(currentUser.id, 'favourites', [
        ...currentUser.favourites,
        itemId,
      ]);
      return [...currentUser.favourites, itemId];
    } catch (error) {
      console.log(error);
    }
  } else {
    updateUserProfileDoc(currentUser.id, 'favourites', [itemId]);
    return [itemId];
  }
};

export const removeItemFromFavourites = (currentUser: User, itemId: number) => {
  if (currentUser.favourites) {
    try {
      const newFavourites = currentUser.favourites.filter(
        (item) => item !== itemId
      );
      updateUserProfileDoc(currentUser.id, 'favourites', [...newFavourites]);
      return [...newFavourites];
    } catch (error) {
      console.log(error);
    }
  }
};

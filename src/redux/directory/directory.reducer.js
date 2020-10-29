const INITIAL_STATE = {
  sections: [
    {
      title: 'Soaps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps.jpg?alt=media&token=6140b175-6946-4899-a21d-d4fbfc421b1f',
      id: 1,
      linkUrl: 'shop/soaps',
    },
    {
      title: 'Essential oils',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils.jpg?alt=media&token=960a8128-8a80-48ee-b76b-80ae19b39a54',
      id: 2,
      linkUrl: 'shop/essential-oils',
    },
    {
      title: 'Bath salts',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts.jpg?alt=media&token=bac7065c-7bfa-4685-b160-b28328cb10f6',
      id: 3,
      linkUrl: 'shop/bath-salts',
    },
    {
      title: 'Bathroom essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials.jpg?alt=media&token=b2ceef8e-5722-4bce-9d3d-a3b6c0cf446b',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bathroom-essentials',
    },
    {
      title: 'COVID essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials.jpg?alt=media&token=d34b222e-de05-4b10-aa53-ee642d79c1a1',
      size: 'large',
      id: 5,
      linkUrl: 'shop/covid-essentials',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

const INITIAL_STATE = {
  sections: [
    {
      title: 'Soaps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps.jpg?alt=media&token=634d3d6b-c1f0-4cf3-ae68-6a45e4c4d59d',
      id: 1,
      linkUrl: 'shop/soaps',
    },
    {
      title: 'Essential oils',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils.jpg?alt=media&token=a96f0e13-57b2-4985-9976-e589abd3be0b',
      id: 2,
      linkUrl: 'shop/essential-oils',
    },
    {
      title: 'Bath salts',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts.jpg?alt=media&token=2780a577-4336-4158-9bb5-827cbaabe457',
      id: 3,
      linkUrl: 'shop/bath-salts',
    },
    {
      title: 'Bathroom essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials.jpg?alt=media&token=990786b5-7ce7-463f-b33b-cc03d3fb80e8',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bathroom-essentials',
    },
    {
      title: 'COVID essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials.jpg?alt=media&token=e4360c96-e0da-48ca-9eef-888072396fb5',
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

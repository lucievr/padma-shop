const INITIAL_STATE = {
  sections: [
    {
      title: 'Soaps',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/soaps.jpg?alt=media&token=dda26f93-e888-4feb-99bc-6913c9819318',
      id: 1,
      linkUrl: 'shop/soaps',
    },
    {
      title: 'Essential oils',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/essential-oils.jpg?alt=media&token=3b77a7d6-c3eb-4bbd-8a5a-3fae09dab70c',
      id: 2,
      linkUrl: 'shop/essential-oils',
    },
    {
      title: 'Bath salts',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bath-salts.jpg?alt=media&token=9a406f54-ac58-42db-81a3-16cdd4fab983',
      id: 3,
      linkUrl: 'shop/bath-salts',
    },
    {
      title: 'Bathroom essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/bathroom-essentials.jpg?alt=media&token=0ed6ff84-2db6-44ae-9256-d986ee6ba11a',
      size: 'large',
      id: 4,
      linkUrl: 'shop/bathroom-essentials',
    },
    {
      title: 'COVID essentials',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/covid-essentials.jpg?alt=media&token=754478b5-8cb3-4368-a34f-fb836348dfb3',
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

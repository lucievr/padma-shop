import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Soaps',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fsoaps.jpg?alt=media&token=6140b175-6946-4899-a21d-d4fbfc421b1f',
          id: 1
        },
        {
          title: 'Essential oils',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fessential-oils.jpg?alt=media&token=960a8128-8a80-48ee-b76b-80ae19b39a54',
          id: 2
        },
        {
          title: 'Bath salts',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbath-salts.jpg?alt=media&token=bac7065c-7bfa-4685-b160-b28328cb10f6',
          id: 3
        },
        {
          title: 'Bathroom essentials',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fbathroom-essentials.jpg?alt=media&token=b2ceef8e-5722-4bce-9d3d-a3b6c0cf446b',
          size: 'large',
          id: 4
        },
        {
          title: 'COVID essentials',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/shoolix.appspot.com/o/padma-shop%2Fcovid-essentials.jpg?alt=media&token=d34b222e-de05-4b10-aa53-ee642d79c1a1',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;

import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ApplicationState } from '../../redux/store';
import { DirectoryItem } from '../../redux/directory/directory.types';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

type DirectoryProps = {
  sections: DirectoryItem[];
}

const Directory: FC<DirectoryProps> = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<ApplicationState, DirectoryProps>({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

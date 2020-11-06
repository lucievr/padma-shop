import React from 'react';

import { ReactComponent as HeartIcon } from '../../assets/heart-filled.svg';
import { ReactComponent as Logo } from '../../assets/lotus.svg';

import './contact.styles.scss';

const ContactPage = () => (
  <div className='contact-page'>
    <div className='about-padma'>
      <h2 className='title'>
        <Logo />
        <span>Padma</span>
      </h2>
      <div className='statement'>
        We <HeartIcon /> everything nature!
      </div>
      <div className='description'>Our collection includes 100% natural organic cosmetics and zero waste bathroom products. Any questions or suggestions for us? Get in touch.</div>
      <div className='contact'>
        <h4>Contact: </h4>
        <div>Av. da República 16, 1050-191 Lisboa, Portugal</div>
        <div>hello@padma.com</div>
        <h4>Opening times: </h4>
        <div>MON-SAT&nbsp;&nbsp;9am - 8pm</div>
        <div>SUN&nbsp;&nbsp;10am - 7pm</div>
      </div>
    </div>
    <div
      className='image-container'
      style={{
        backgroundImage:
          'url(https://firebasestorage.googleapis.com/v0/b/padma-db.appspot.com/o/padma.jpg?alt=media&token=80f62261-d145-4fe2-8ec1-4203cd0dd0ec)',
      }}
    />
  </div>
);

export default ContactPage;

import React from 'react';
import ButtonAsLink from '../../utilities/buttonAsLink';

export default ({ navigate }) => (
  <nav>
    <ul>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate('/')}>
          Home
        </ButtonAsLink>
      </li>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate('/about')}>
          About Us
        </ButtonAsLink>
      </li>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate('/contact')}>
          Contact
        </ButtonAsLink>
      </li>
    </ul>
  </nav>
);

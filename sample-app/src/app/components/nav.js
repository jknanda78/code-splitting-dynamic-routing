import React from 'react';
import ButtonAsLink from '../../utilities/buttonAsLink';

export default ({ navigate }) => (
  <nav>
    <ul>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate(process.env.PUBLIC_URL + '/')}>Home</ButtonAsLink>
      </li>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate(process.env.PUBLIC_URL + '/about')}>About Us</ButtonAsLink>
      </li>
      <li>
        <ButtonAsLink type="button" onClick={e => navigate(process.env.PUBLIC_URL + '/contact')}>Contact</ButtonAsLink>
      </li>
    </ul>
  </nav>
)


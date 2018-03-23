import React from 'react';
import ButtonAsLink from '../../utilities/buttonAsLink';

const component = ({ navigate, match }) => (
  <div>
    <h2>Current Openings {match.params.id}</h2>
    <ul>
      <li>
        <ButtonAsLink
          type="button"
          onClick={e => navigate('/about/openings/1234')}
        >
          opening 1
        </ButtonAsLink>
      </li>
      <li>
        <ButtonAsLink
          type="button"
          onClick={e => navigate('/about/openings/4567')}
        >
          opening 2
        </ButtonAsLink>
      </li>
    </ul>
  </div>
);

export default component;

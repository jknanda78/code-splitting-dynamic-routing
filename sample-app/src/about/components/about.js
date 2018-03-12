import React from 'react';
import ButtonAsLink from '../../utilities/buttonAsLink';

export default ({ navigate }) => (
    <div>
        <h2>About Us</h2>
        <nav>
            <ul>
                <li>
                    <ButtonAsLink type="button" onClick={e => navigate(process.env.PUBLIC_URL + '/about/team')}>Team</ButtonAsLink>
                </li>
                <li>
                    <ButtonAsLink type="button" onClick={e => navigate(process.env.PUBLIC_URL + '/about/openings')}>Openings</ButtonAsLink>
                </li>
            </ul>
        </nav>
        <div>
            Content for about us
        </div>
    </div>
);
import React from 'react';
import { Route } from 'react-router-dom';
import DynamicImport from '../../utilities/dynamicImport';
import Loading from '../../utilities/loading';

const Openings = props => (
    <DynamicImport load={() => import(/* webpackChunkName: "Openings" */ '../../about/components/openings')}>
        {(Component) => Component === null ? <Loading /> : <Component {...props} />}
    </DynamicImport>
);
  
const Team = props => (
    <DynamicImport load={() => import(/* webpackChunkName: "Team" */ '../../about/components/team')}>
        {(Component) => Component === null ? <Loading /> : <Component {...props} />}
    </DynamicImport>
);

export default {
    subRoutes: [
        <Route exact path={process.env.PUBLIC_URL + '/about/team'} component={Team} key="about-team-component" />,
        <Route exact path={process.env.PUBLIC_URL + '/about/openings'} component={Openings} key="about-openings-component" />
    ]
};
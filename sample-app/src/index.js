import React from 'react';
import { render } from 'react-dom';
import DynamicImport from './utilities/dynamicImport';
import registerServiceWorker from './registerServiceWorker';
import Loading from './utilities/loading';
import store from './app/store';

const App = props => (
  <DynamicImport load={() => import(/* webpackChunkName: "App" */ './app')}>
    {(Component) => Component === null ? <Loading /> : <Component {...props} />}
  </DynamicImport>
);

render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { render } from 'react-dom';
import { store } from './app';
import DynamicImport from './utilities/dynamicImport';
import registerServiceWorker from './registerServiceWorker';
import Loading from './utilities/loading';

const App = props => (
  <DynamicImport load={() => import(/* webpackChunkName: "App" */ './app')}>
    {(Component) => Component === null ? <Loading /> : <Component {...props} />}
  </DynamicImport>
);

render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import DynamicImport from './dynamicImport';

export default (props, chunkname, filepath) => (
  <DynamicImport
    load={() => import(/* webpackChunkName: `${chunkname}` */ filepath)}
  >
    {Component => (Component === null ? null : <Component {...props} />)}
  </DynamicImport>
);

import React from 'react';
import ReactDOM from 'react-dom';

import { ControlledComponent, UnControlledComponent } from './App';
ReactDOM.render(
  [<ControlledComponent />, <UnControlledComponent />],
  document.getElementById('root')
);

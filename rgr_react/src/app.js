import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


  IndecisionApp.defaultProps ={  options: ['Alice','Betty', 'Cheryl'] }
  ReactDOM.render(<IndecisionApp options={['a man','a plan','a canal', 'panama']}/>, document.getElementById('app'));


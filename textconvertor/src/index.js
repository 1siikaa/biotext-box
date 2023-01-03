import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Input from './components/userinput/userinput'
import Output from './components/uioutput/uioutput'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Input/>
<Output/>
  </React.StrictMode>
);



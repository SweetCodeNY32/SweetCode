import React from 'react';
import { createRoot } from 'react-dom';
import App from './containers/app.jsx'

const root = createRoot(document.querySelector('#root'));
root.render(<App />)
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstrap CSS et JS (pour composants interactifs)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import de ton fichier de styles Sass
import './styles.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

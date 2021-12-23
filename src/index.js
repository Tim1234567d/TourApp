import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';


import store from './redux/store/store';
import { Provider } from 'react-redux';
import AuthProvider from "./providers/AuthProvider";




  ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
      <BrowserRouter>
      <SimpleReactLightbox>
            <Provider store={store}>
              <App />

              </Provider>
       </SimpleReactLightbox>
          
      </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );


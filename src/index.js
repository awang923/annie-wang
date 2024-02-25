import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Redfin from './pages/Redfin';
import Scoop from './pages/Scoop';
import Mindtapp from './pages/Mindtapp';
import { Discord } from './welcomes/Discord';
import DigitalDomain from './pages/DigitalDomain';

const router = createHashRouter([
  {
    index: true,
    path:'/',
    element: <App />
  },
  {
    path:'/digitaldomain',
    element: <DigitalDomain />
  },
  {
    path:'/redfin',
    element: <Redfin />
  },
  {
    path:'/scoop',
    element: <Scoop />
  },
  {
    path:'/mindtapp',
    element: <Mindtapp />
  },
  {
    path: '/discord',
    element: <Discord />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.Fragment>
    <RouterProvider router={router} />
  //   <ScrollToTop />
  // </React.Fragment>
);
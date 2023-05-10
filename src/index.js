import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Redfin from './Redfin';

const router = createBrowserRouter([
  {
    index: true,
    path:'/',
    element: <App />
  },
  {
    path:'/redfin',
    element: <Redfin />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router} />
);


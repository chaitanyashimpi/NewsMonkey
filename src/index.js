import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path: '/business',
    element: <App category="business" key="business" />,
  },
  {
    path: '/entertainment',
    element: <App category="entertainment" key="entertainment" />,
  },
  {
    path: '/general',
    element: <App category="general" key="general" />,
  },
  {
    path: '/health',
    element: <App category="health" key="health" />,
  },
  {
    path: '/science',
    element: <App category="science" key="science" />,
  },
  {
    path: '/sports',
    element: <App category="sports" key="sports" />,
  },
  {
    path: '/technology',
    element: <App category="technology" key="technology" />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//#################################routen
import Root from './routes/root';
import LoginGoogle from './routes/logingoogle';
import AccountErstellung from './routes/newacc';
import NewsFeed from './routes/newsfeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/newacc",
    element: <AccountErstellung />,
  },
  {
    path: "/newsfeed",
    element: <NewsFeed />,
  },
  {
    path: "/login/google",
    element: <LoginGoogle />,
  },
  {
    path: "/newsfeed",
    element: <NewsFeed />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // Erstellt Root

root.render(
  <React.StrictMode>
    <HashRouter>
      <RouterProvider router={router} />
    </HashRouter>
  </React.StrictMode>
);

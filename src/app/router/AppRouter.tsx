import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PostsPage } from '../../pages/PostsPage';
import { SinglePostPage } from '../../pages/SinglePostPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigate
        to="/posts"
        replace
      />
    ),
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:id',
    element: <SinglePostPage />,
  },
  {
    path: '*',
    element: (
      <Navigate
        to="/posts"
        replace
      />
    ),
  },
]);

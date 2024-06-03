import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts, { loader as postsLoader } from './pages/Posts.jsx';
import Welcome from './pages/Welcome.jsx';
import PostDetails, {
  loader as postDetailLoader,
} from './pages/PostDetails.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/posts', element: <Posts />, loader: postsLoader },
  { path: '/posts/:id', element: <PostDetails />, loader: postDetailLoader },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

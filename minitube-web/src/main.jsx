import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import SingelVideos from './pages/singelVideo/SingelVideos.jsx';
import AddVideo from './pages/add/AddVideo.jsx';
import EditVideo from './pages/edit/EditVideo.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children :[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/videos/:videoId',
        element: <SingelVideos />,
      },
      {
        path: '/videos/add',
        element: <AddVideo />
      },
      {
        path: 'videos/edit/:videoId',
        element: <EditVideo />
      },

    ]
  },
 
]);

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />

)

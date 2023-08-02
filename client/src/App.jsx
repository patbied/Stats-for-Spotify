import axios from 'axios'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Root from './pages/Root';
import TopArtists from './pages/TopArtists'
import TopTracks from './pages/TopTracks'
import About from './pages/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/top-artists',
        element: <TopArtists/>
      },
      {
        path: '/top-tracks',
        element: <TopTracks/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
])


function App() {



  

  return (
    <>
      <div style={{maxWidth:'100%',overflow:'hidden'}}>
        <RouterProvider router={router}/>
      </div>
   
    </>
  )
}

export default App

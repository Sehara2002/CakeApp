import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cakes from './Components/Cakes.jsx'
import Orders from './Components/Orders.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import ApiComponent from './Components/ApiComponent.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<div>404 Not Found</div>,
  },
  {
    path:'/cakes',
    element:<Cakes/>,
  },
  {
    path:"/contacts",
    element:<Contact/>,
  },
  {
    path:"/orders",
    element:<Orders/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/login",
    element:<Login/>,

  },{
    path:"/signup",
    element:<Signup/>,
  },{
    path:"/apiComponent",
    element:<ApiComponent/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

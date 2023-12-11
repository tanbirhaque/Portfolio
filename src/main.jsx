import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
// import PageContainer from './Layout/Home/Pages/PageContainer.jsx';
import Home from './Layout/Home/Home.jsx';
import About from './Layout/Home/Pages/About/About.jsx';
import Contact from './Layout/Home/Pages/Contact/Contact.jsx';
import Projects from './Layout/Home/Pages/Projects/Projects.jsx';
import Konika from './Layout/Home/Shared/Banner/Konika.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <About></About>
          },
          {
            path: "/projects",
            element: <Projects></Projects>
          },
          {
            path: "/contact",
            element: <Contact></Contact>
          }
        ]
      }
    ]
  },
  {
    path: '/konika',
    element: <Konika></Konika>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

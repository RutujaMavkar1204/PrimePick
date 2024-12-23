import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {RouterProvider,createHashRouter} from 'react-router-dom';
import App from './App.js';
import Home from './components/Home.js'
import Discover from './components/Discover.js';
import Search from './components/Search.js'
import MoreInfo from './components/MoreInfo.js'
import Moody from './components/Moody.js'
import MoodMovies from './components/MoodMovies.js'
const router=createHashRouter([
  {
    path:"/",
    element:<App/>,
    children:[
        {
            path:"home",
            element:<Home/>
        },
        {
            path:"discover",
            element:<Discover/>
        },
        {
            path:"moreInfo",
            element:<MoreInfo/>
        },
        {
            path:"search",
            element:<Search/>
        },
        {
          path:"moods",
          element:<Moody/>
        },
        {
          path:"mood-movies",
          element:<MoodMovies/>
        }
        
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();

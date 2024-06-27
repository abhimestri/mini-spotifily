import React, { useEffect } from 'react';
import { getUserData } from './API/api';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import MainBody from './MainBody/MainBody';
import SearchSection from './MainBody/SearchSection/SearchSection';
import ContentArea from './MainBody/ContentArea/ContentArea';
import PlaylistDetails from './PlaylistDetails/PlaylistDetails';
import { MusicContext } from "./store/MusicContext"
import "react-h5-audio-player/lib/styles.css";

function App() {
  
  useEffect(() => {
    getUserData()?.then(data => data)?.catch(err => {
      console.log({err})
      if(+err?.response?.status === 401 && err?.response?.data?.error?.message === "The access token expired"){
        console.log("in")
        window?.localStorage?.removeItem("token")
      }
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        { path: "/", element: <ContentArea/> },
        { path: "/search", element: <SearchSection /> },
        { path: "/playlist/:id", element: <PlaylistDetails /> }
      ],
    },
  ]);

  return  <RouterProvider router={router} />;
}

export default App;

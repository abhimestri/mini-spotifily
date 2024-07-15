import React, { useEffect } from 'react';
import { getUserData } from './API/api';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import MainBody from './MainBody/MainBody';
import SearchSection from './MainBody/SearchSection/SearchSection';
import ContentArea from './MainBody/ContentArea/ContentArea';
import PlaylistDetails from './PlaylistDetails/PlaylistDetails';
import { MusicContext } from "./store/MusicContext"
import "react-h5-audio-player/lib/styles.css";
import MadeForYouSection from './MainBody/MadeForYouSection/MadeForYouSection';
import CreateNewPlayList from './PlaylistDetails/CreateNewPlaylist';

function App() {
  
  useEffect(() => {
    getUserData()?.then(data => data)?.catch(err => {
      if(+err?.response?.status === 401 && err?.response?.data?.error?.message === "The access token expired"){
        window?.localStorage?.removeItem("token")
      }
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      children: [
        { path: "/", element: <ContentArea /> },
        { path: "/search", element: <SearchSection /> },
        { path: "/playlist/:id", element: <PlaylistDetails /> },
        { path: "/artists/:id", element: <PlaylistDetails /> },
        { path: "/my-playlist/:id", element: <PlaylistDetails /> },
        { path: "/featured-playlist/:id", element: <PlaylistDetails /> },
        { path: "/genre/:id", element: <MadeForYouSection /> },
        { path: "/new-playlist", element: <CreateNewPlayList /> },
      ],
    },
  ]);

  return  <RouterProvider router={router} />;
}

export default App;

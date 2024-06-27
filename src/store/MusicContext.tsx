import { createContext } from "react";

export const MusicContext = createContext({
  audioUrl: "",
  setAudioUrl: (data:any) => {
    return data
  },
});
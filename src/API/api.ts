import axios from "axios";
import { ARTISTSLIST } from "../constant";

export const getArtists = async () => {
    const parseIds = ARTISTSLIST?.join("%2C")
    return await axios.get(
      `https://api.spotify.com/v1/artists?ids=${parseIds}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage?.getItem("token")}`,
        },
      }
    );
};

export const getNewRelease = async () => {
    return await axios.get(`https://api.spotify.com/v1/browse/new-releases`, {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      },
    });
}

export const getUserData = async () => {
    return await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      },
    });
}

export const getUserPlaylist = async () => {

    let userId = ""

    getUserData()?.then(data => {
        userId = data?.data?.id
    })

    return await axios.get(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${localStorage?.getItem("token")}`,
        },
      }
    );
}

export const getCategories = async () => {
  return await axios.get(`https://api.spotify.com/v1/browse/categories?limit=40`, {
    headers: {
      Authorization: `Bearer ${localStorage?.getItem("token")}`,
    },
  });
}

export const getCategoriesPlaylist = async () => {
  return await axios?.get(
    "https://api.spotify.com/v1/browse/categories/{category_id}/playlists",
    {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      },
    }
  );
}

export const getFeaturedPlaylist = async () => {
  return await axios?.get(
    "https://api.spotify.com/v1/browse/featured-playlists?limit=40",
    {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      },
    }
  );
}

export const getAlbumDetails = async (id: any) => {
  return await axios.get(
    `https://api.spotify.com/v1/albums/${id}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      },
    }
  );
}


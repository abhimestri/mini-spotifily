import React, { useEffect, useState } from 'react'
import { MusicCard } from '../../components';
import Typography from "@mui/material/Typography";
import TopNavigation from '../TopNavigation/TopNavigation';
import axios from "axios";
import { getArtists, getFeaturedPlaylist, getNewRelease, getUserPlaylist } from '../../API/api';
import {useNavigate} from "react-router-dom"
import { parseDataForSubcontentType } from '../../utility';
import SubContentType from './SubContentType';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=27de8f310f0a46f492bd74fa156244ec&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


const ContentArea = () => {

    const [artistsList, setArtistsList] = useState<Array<any>>([])
    const [newReleaseList, setNewReleaseList] = useState<Array<any>>([])
    const [playlist, setPlaylist] = useState<Array<any>>([])
    const [featuredPlaylist, setFeaturedPlaylist] = useState<Array<any>>([])

    const navigate = useNavigate()

    useEffect(() => {
        if(artistsList?.length === 0){
            getArtists()?.then((data:any) => {
              if(data?.data){
                  setArtistsList([...parseDataForSubcontentType({
                        dataList: data?.data?.artists,
                        type: "artist",
                      })])
              }
            });
        }
    }, [artistsList])

    useEffect(() => {
        if(newReleaseList?.length === 0){
            getNewRelease()?.then((data: any) => {
                if(data?.data){
                    setNewReleaseList(
                      [...parseDataForSubcontentType({
                        dataList: data?.data?.albums?.items,
                        type: "new-release",
                      })]
                    );
                }
            });
        }
    }, [newReleaseList])

    useEffect(() => {
        if (playlist?.length === 0) {
          getUserPlaylist()?.then((data) => {
            if(data?.data){
                setPlaylist(
                  [
                    ...parseDataForSubcontentType({
                      dataList: data?.data?.items,
                      type: "playlist",
                    }),
                  ]
                );
            }
          });
        }
    }, [playlist])

    useEffect(() => {
      if (featuredPlaylist?.length === 0) {
        getFeaturedPlaylist()?.then((data) => {
          if (data?.data) {
            setFeaturedPlaylist([
                    ...parseDataForSubcontentType({
                      dataList: data?.data?.playlists?.items,
                      type: "playlist",
                    }),
                  ]);
          }
        });
      }
    }, [featuredPlaylist]);


    return (
      <div className="mt-[10vh] px-[20px]">
        <div className="mb-[36px]">
          <Typography className="!text-[24px] !font-bold !mb-[14px]">
            New Release
          </Typography>
          {/* <div className="grid grid-cols-12 gap-x-1">
            {newReleaseList?.slice(0, 6)?.map((releaseItem) => {
              return (
                <MusicCard
                  style={{ backgroundColor: "#ccc", background: "transparent" }}
                  className="col-span-2 aspect-[11/16]"
                  data={{
                    name: releaseItem?.name,
                    image: releaseItem?.images[0]?.url,
                    date: releaseItem?.release_date,
                  }}
                  onClick={() => navigate(`/playlist/${releaseItem?.id}`)}
                />
              );
            })}
          </div> */}
          <SubContentType
            listData={newReleaseList}
            navigatingRoute={"playlist"}
          />
        </div>
        <div className="mb-[2rem]">
          <Typography className="!text-[24px] !font-bold !mb-[18px]">
            Artists
          </Typography>
          {/* <div className="grid grid-cols-12 gap-x-2 items-center">
            {artistsList?.slice(0, 6)?.map((artists) => {
              return (
                // <div className="col-span-2">
                <MusicCard
                  style={{
                    backgroundColor: "#ccc",
                    background: "transparent",
                  }}
                  className="col-span-2 aspect-[11/15]"
                  data={{
                    image: artists?.images[0]?.url,
                    name: artists?.name,
                    description: artists?.type,
                  }}
                  type={"artist"}
                  onClick={() => navigate(`/artists/${artists?.id}`)}
                />
                // </div>
              );
            })}
          </div> */}
          <SubContentType
            listData={artistsList}
            type={"artist"}
            navigatingRoute={"artists"}
            style={{
              cardClassName: "aspect-[10/14]",
            }}
          />
        </div>

        <div className="mt-[40px]">
          <Typography className="!text-[24px] !font-bold !mb-[14px]">
            Your playlist
          </Typography>
          {/* <div className="grid grid-cols-12 gap-x-1">
            {playlist?.slice(0, 6)?.map((item) => {
              return (
                <MusicCard
                  style={{
                    backgroundColor: "#ccc",
                    background: "transparent",
                  }}
                  className="col-span-2 aspect-[11/15]"
                  type="playlist"
                  data={{
                    name: item?.name,
                    image: item?.images?.map((img: any) => img?.url),
                  }}
                  onClick={() => navigate(`/my-playlist/${item?.id}`)}
                />
              );
            })}
          </div> */}
          <SubContentType listData={playlist} navigatingRoute={"my-playlist"} />
        </div>
        <div className="mt-[50px] mb-[50px]">
          <Typography className="!text-[24px] !font-bold !mb-[14px]">
            Featured playlist
          </Typography>
          {/* <div className="grid grid-cols-12 gap-x-1">
            {featuredPlaylist?.slice(0, 6)?.map((item) => {
              return (
                <MusicCard
                  style={{
                    backgroundColor: "#ccc",
                    background: "transparent",
                  }}
                  className="col-span-2 aspect-[11/16]"
                  data={{
                    name: item?.name,
                    image: item?.images?.map((img: any) => img?.url),
                    description: item?.description,
                  }}
                  onClick={() => navigate(`/featured-playlist/${item?.id}`)}
                />
              );
            })}
          </div> */}
          <SubContentType
            listData={featuredPlaylist}
            navigatingRoute={"featured-playlist"}
          />
        </div>
      </div>
    );
}

export default ContentArea
import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import PlayMusicButton from '../../../components/Button/PlayMusicButton'
import { MusicContext } from '../../../store/MusicContext'
import { parseDuration } from '../../../utility'

interface TopResultSectionProps {
    data: any
}

const TopResultSection = (props: TopResultSectionProps) => {
    
    const { audioUrl, setAudioUrl } = useContext(MusicContext);

    const firstItemData = {
      name: props?.data ? props?.data[0]?.name : "",
      type: props?.data ? props?.data[0]?.type : "",
      artistName: props?.data ? props?.data[0]?.artists[0]?.name : "",
      imgUrl: props?.data ? props?.data[0]?.album?.images[0]?.url : "",
      audioUrl: props?.data ? props?.data[0]?.preview_url : "",
    };

    console.log({firstItemData})

    return (
      <>
        <div className="col-span-5">
          <Typography className="text-[22px] font-bold mb-2 font-sans">
            Top Results
          </Typography>
          <div className="group p-[20px] bg-[#1a1a1a] rounded-2xl transition ease-in duration-600 hover:bg-[#282828]">
            <img
              className="bg-[#ccc] w-[100px] h-[100px]"
              src={firstItemData?.imgUrl}
            />
            <div className="group flex justify-between overflow-hidden">
              <div className="mt-4 w-[86%]">
                <Typography className="text-[24px] font-semibold font-sans capitalize truncate">
                  {firstItemData?.name}
                </Typography>
                <div className="font-sans flex gap-x-2 items-center">
                  <Typography className="text-[14px] text-[#9b9b9b] capitalize">
                    Song
                  </Typography>{" "}
                  <div className="w-[4px] h-[4px] bg-white rounded-full"></div>
                  <Typography className="text-[14px]">
                    {firstItemData?.artistName}
                  </Typography>
                </div>
              </div>
              <div
                className="w-[14%] cursor-pointer hidden transiton ease-in-out duration-300 self-end group-hover:block hover:-translate-y-[3px]"
                onClick={() => setAudioUrl(firstItemData?.audioUrl)}
              >
                <PlayMusicButton />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7">
          <Typography className="text-[22px] font-bold mb-2 font-sans">
            Songs
          </Typography>
          <div className="grid grid-rows-12">
            {props?.data?.slice(0, 4)?.map((item: any) => {
              return (
                <div className="flex justify-between items-center row-span-3 hover:bg-[#2A2A2A] p-2 rounded-xl">
                  <div className="flex gap-x-2 items-center h-[100%]">
                    <img
                      className="bg-[#ccc] w-[6vh] h-[6vh]"
                      src={item?.album?.images[0]?.url}
                    />
                    <div>
                      <Typography className="text-[14px]">
                        {item?.name}
                      </Typography>
                      <Typography className="text-[14px] text-[#9b9b9b]">
                        {item?.artists[0]?.name}
                      </Typography>
                    </div>
                  </div>
                  <Typography className="text-[15px] font-sans text-[#9b9b9b]">
                    {parseDuration(item?.duration_ms)}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
}

export default TopResultSection
import React, {useEffect, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from '@mui/material/Typography';
import { getUserPlaylist } from "../../API/api";


const SongList = () => {
    const [playlist, setPlaylist] = useState<Array<any>>([]);

    useEffect(() => {
      if (playlist?.length === 0) {
        getUserPlaylist()?.then((data) => {
          if (data?.data) {
            setPlaylist([...data?.data?.items]);
          }
        });
      }
    }, [playlist]);

    return (
      <div className="">
        <List sx={{ width: "100%", maxWidth: 420 }}>
            {playlist?.map(item => {
                return (
                  <ListItem>
                    <div className="rounded-lg py-[6px] w-full flex gap-x-2 hover:bg-[#1A1A1A]">
                      <div className="grid grid-cols-4 rounded-lg items-center overflow-hidden bg-[#ccc] min-w-[50px] max-w-[50px] h-[50px]">
                        {item?.images?.length >= 4 ? (
                          item?.images
                            ?.slice(0, 4)
                            ?.map((img: any) => {
                              return (
                                <div className="col-span-2">
                                  <img
                                    src={img?.url}
                                    className="aspect-square"
                                    alt=""
                                  />
                                </div>
                              );
                            })
                        ) : (
                          <img
                            src={
                              item?.images ? item?.images[0]?.url : ""
                            }
                            alt=""
                            className="col-span-4"
                          />
                        )}
                      </div>
                      <div className="truncate">
                        <Typography className="!font-sans text-white !text-[16px]">
                          {item?.name}
                        </Typography>
                        <Typography className="flex gap-x-1 items-center !font-sans text-white !text-[14px] !text-[#888888] capitalize">
                          {item?.type}{" "}
                          <div className="w-[4px] h-[4px] mt-[1px] rounded-full bg-[#888888]"></div>
                          {item?.id}
                        </Typography>
                      </div>
                    </div>
                  </ListItem>
                );
            })}
         
        </List>
      </div>
    );
}

export default SongList
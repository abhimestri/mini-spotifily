import { Typography } from "@mui/material";
import PlayMusicIcon from "../assets/PlayMusicIcon.svg";
import { MusicContext } from "../store/MusicContext";
import { useContext } from "react";
import { parseDuration } from "../utility";

export const columns = (data?: any) => {
    return [
      {
        name: <Typography className="!font-sans !text-[15px]">#</Typography>,
        selector: (row: any) => {
          if (+data?.no === +row?.no) {
            return <>p</>;
          } else {
            return row?.no;
          }
        },
        center: true,
        width: "6%",
        style: {
          fontSize: "15px",
          fontFamily: "sans-serif",
        },
      },
      {
        name: (
          <Typography className="!font-sans !text-[15px]">Title</Typography>
        ),
        selector: (row: any) => row.name,
        width: "74%",
        style: {
          fontSize: "15px",
          fontFamily: "sans-serif",
        },
      },
      {
        name: (
          <Typography className="!font-sans !text-[15px]">Duration</Typography>
        ),
        selector: (row: any) => row.duration,
        width: "10%",
        center: true,
        style: {
          fontSize: "15px",
          fontFamily: "sans-serif",
        },
      },
    ];

}

interface DescriptionProps {
  type: string | "album" | "playlist" | "recently" | "artists";
  data: any;
}

export const formatDescription = (items: any) => {
  return (
    <div className="flex items-center gap-x-1">
      {items?.map((item: any, index: any) => {
        return (
          <>
            <Typography className="!text-[14px] !text-white !font-sans !font-medium">
              {item?.name}
            </Typography>
            {items?.length - 1 !== index ? (
              <div className="w-[4px] h-[4px] mt-[2px] rounded-full bg-[#FFF]"></div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export const formatDataForDescription = (props: DescriptionProps) => {
  switch (props?.type) {
    case "playlist": {
      return {
        name: props?.data?.name,
        description: formatDescription(props?.data?.artists),
        images: props?.data?.images,
        type: props?.data?.album_type,
      };
    }
    case "artists" : {
        const artistsData = props?.data?.artists?.length >= 1 && props?.data?.artists[0];
        return {
            name: artistsData?.name,
            description: `Followers: ${artistsData?.followers?.total}`,
            images: artistsData?.images,
            type: artistsData?.type
        }
    }
    case "my-playlist" :
    case "featured-playlist" : {
        return {
          name: props?.data?.name,
          description: formatDescription([{ name: props?.data?.id }]),
          images: props?.data?.images,
          type: props?.data?.type,
        };
    }
  }
};

export const getFormatedItems = (data: any, type: any) => {
    switch(type){
        case "artists" : return data ? data?.map((track: any) => {
          return {
            name: track?.name,
            duration: parseDuration(+track?.duration_ms),
            imgUrl:
              track?.album?.images?.length >= 1
                ? track?.album?.images[0]?.url
                : "",
            previewUrl: track?.preview_url,
          };
        }) :[];
        case "playlist" :return data?.map((track: any) => {
          return {
            name: track?.name,
            duration: parseDuration(+track?.duration_ms),
            imgUrl: [],
            previewUrl: track?.preview_url,
          };
        });
        case "my-playlist" :
        case "featured-playlist" : return data?.map((item: any) => {
          return {
            name: item?.track?.name,
            duration: parseDuration(item?.track?.duration_ms),
            imgUrl:
              item?.track?.album?.images?.length >= 1
                ? item?.track?.album?.images[0]?.url
                : "",
            previewUrl: item?.track?.preview_url,
          };
        });
        default: return []
    }
};

export const getDataTableItems = (type: any, data: any, setAudioUrl:any, audioUrl:any) => {
  switch (type) {
    case "playlist":
      return data?.map((dt: any) => {
        return {
          no: (
            <img
              src={PlayMusicIcon}
              className="cursor-pointer"
              onClick={() => {
                setAudioUrl(dt?.previewUrl);
              }}
            />
          ),
          name: dt?.name,
          duration: dt?.duration,
        };
      });
    case "artists":
      return data?.map((dt: any) => {
        return {
          no: (
            <img
              src={PlayMusicIcon}
              className="cursor-pointer"
              onClick={() => {
                setAudioUrl(dt?.previewUrl);
              }}
            />
          ),
          name: (
            <div className="flex gap-x-2 items-center">
              <img src={dt?.imgUrl} className="max-h-[34px] max-w-[34px] aspect-square rounded-lg overflow-hidden" />{" "}
              <Typography>{dt?.name}</Typography>{" "}
            </div>
          ),
          duration: dt?.duration,
        };
      });
    case "my-playlist":
    case "featured-playlist" : return data?.map((dt: any) => {
      return {
        no: (
          <img
            src={PlayMusicIcon}
            className="cursor-pointer"
            onClick={() => {
              setAudioUrl(dt?.previewUrl);
            }}
          />
        ),
        name: (
          <div className="flex gap-x-2 items-center">
            <img
              src={dt?.imgUrl}
              className="max-h-[34px] max-w-[34px] aspect-square rounded-lg overflow-hidden"
            />{" "}
            <Typography>{dt?.name}</Typography>{" "}
          </div>
        ),
        duration: dt?.duration,
      };
    });
    default:
      return [];
  }
};
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { parseDate } from "../../utility";

interface MusicCardProps {
    style?: any,
    className? : string | "",
    data?: {
        name?: string,
        image?: any,
        date?: any,
        description?: string;
    }
    type?: "artist" | "music" | "playlist",
    onClick?: () => void
}

const MusicCard = (props: MusicCardProps) => {
  
    return (
      <Card
        className={`p-[10px] cursor-pointer ${props?.className}`}
        sx={{
          ...props?.style,
          ":hover": {
            backgroundColor: "#1A1A1A",
          },
        }}
        //   style={{ ...props?.style }}
        onClick={props?.onClick}
      >
        {props?.type === "playlist" ? (
          <div className="rounded-lg bg-[#ccc] h-auto mb-[8px]">
            {props?.data?.image?.length >= 4 ? (
              props?.data?.image?.slice(0, 4)?.map((imgUrl: any) => {
                return <img src={imgUrl} className="fit-screen" alt="" />;
              })
            ) : (
              <img
                src={props?.data?.image ? props?.data?.image[0] : ""}
                alt=""
              />
            )}
          </div>
        ) : props?.type === "artist" ? (
          <img
            src={props?.data?.image}
            className="w-full rounded-full overflow-hidden aspect-square"
            alt=""
          />
        ) : (
          <CardMedia
            component="img"
            image={props?.data?.image}
            alt=""
            className="rounded-lg bg-[#ccc] h-[160px] mb-[8px]"
          />
        )}
        <Typography
          className={`max-w-[90%] !text-[15px] font-sans text-[#FFF] truncate mt-[6px] capitalize ${
            props?.type === "artist" && "!mt-[8px]"
          }`}
        >
          {props?.data?.name}
        </Typography>
        {props?.data?.description && (
          <Typography className="!text-[#888888] !text-[13px] line-clamp-2 capitalize">
            {props?.data?.description}
          </Typography>
        )}
        <div className="mt-[2px] flex gap-x-1 items-center">
          {props?.data?.date && (
            <Typography className="!text-[#888888] !text-[12px]">
              {parseDate({ date: new Date(props?.data?.date) })}
            </Typography>
          )}
        </div>
      </Card>
    );
};

export default MusicCard;

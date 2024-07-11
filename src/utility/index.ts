import moment from "moment";

interface parseDateProps {
    format?: string;
    date: Date
}
export const parseDate = (props: parseDateProps) => {
    return moment(props?.date)?.format(props?.format ? props?.format : "MMM Do YY");
}

interface parseDurationProps {
  time: number;
  type?: "milliseconds";
}
export const parseDuration = (time: number) => {
  return moment
    .duration(time, "milliseconds")
    ?.asMinutes()
    ?.toFixed(2)
    ?.replaceAll(".", ":");
};

interface parseDataForSubcontentTypeProps {
    dataList:any;
    type: "new-release" | "artist" | "playlist" | "album"
}

export const parseDataForSubcontentType = (
  props: parseDataForSubcontentTypeProps
) => {
    return props?.dataList?.map((item:any) => {
        return {
          id: item?.id ? item?.id : null,
          name: item?.name ? item?.name : null,
          date: item?.release_date ? item?.release_date : null,
          description: item?.type ? item?.type : null,
          images: item?.images ? item?.images : null,
        };
    })
};

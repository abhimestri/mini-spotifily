import { Typography } from "@mui/material";


export const columns = (data?: any) => {
    return [
      {
        name: <Typography className="!font-sans !text-[15px]">#</Typography>,
        selector: (row: any) => {
        //   console.log(row.no);
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
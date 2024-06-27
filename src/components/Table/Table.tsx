import React from 'react'
import DataTable, { createTheme } from "react-data-table-component";

interface CustomTableProps {
    columns: any;
    data: any;
    onRowMouseEnter?: (data: any) => void;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {

createTheme("solarized", {
  text: {
    primary: "#FFF",
    secondary: "#FFF"
  },
  background: {
    default: "transparent",
  },
  context: {
    background: "transparent",
    text: "#FFFFFF",
  },
  divider: {
    default: "#ffffff1a",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});
    return (
      <DataTable
        columns={props?.columns}
        data={props?.data}
        theme={"solarized"}
      />
    );

}

export default CustomTable


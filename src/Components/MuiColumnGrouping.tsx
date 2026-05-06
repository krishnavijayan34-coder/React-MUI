import { DataGrid,GridColDef,GridColumnVisibilityModel } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState } from "react";

const rows = [
  { id: 1, firstName: "Jon", lastName: "Snow", age: 14 },
  { id: 2, firstName: "Cersei", lastName: "Lannister", age: 31 },
  { id: 3, firstName: "Jaime", lastName: "Lannister", age: 31 },
  { id: 4, firstName: "Arya", lastName: "Stark", age: 11 },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },

  { field: "firstName", headerName: "First Name", width: 150 },

  { field: "lastName", headerName: "Last Name", width: 150 },

  { field: "age", headerName: "Age", width: 110, type: "number" },
];

const columnGroupingModel = [
  {
    groupId: "internal",
    headerName: "Internal Data",
    children: [{ field: "id" }],
  },
  {
    groupId: "nameGroup",
    headerName: "Full Name",
    children: [
      { field: "firstName" },
      { field: "lastName" },
    ],
  },
  {
    groupId: "details",
    headerName: "Details",
    children: [{ field: "age" }],
  },
];
function MuiColumnGrouping() {
    const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
    age: false, });
  return (
    <Box sx={{height:400, width:'100%'}}>
        <DataGrid rows={rows} columns={columns} 
        columnGroupingModel={columnGroupingModel}
        columnGroupHeaderHeight={40}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
      />
      
    </Box>
  );
}
export default MuiColumnGrouping;
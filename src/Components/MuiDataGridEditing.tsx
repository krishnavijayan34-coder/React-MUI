import { DataGrid,GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState } from "react";
const initialRows = [
  { id: 1, name: "John", age: 25, role: "Developer" },
  { id: 2, name: "Sara", age: 30, role: "Designer" },
  { id: 3, name: "Mike", age: 28, role: "Tester" },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90,align: "center",
    headerAlign: "center",  },

  {
    field: "name",
    headerName: "Name",
    width: 150,
    align: "center",
    headerAlign: "center",
    editable: true, 
    preProcessEditCellProps: (params) => {
      const hasError = params.props.value.length < 3;

      return { ...params.props, error: hasError };
       },
  },

  

  {
    field: "age",
    headerName: "Age",
    width: 120,
    type: "number",
    align: "center",
    headerAlign: "center",
    editable: true, 
  },

  {
    field: "role",
    headerName: "Role",
    width: 150,
    align: "center",
    headerAlign: "center",
    editable: true, 
  },
];
function MuiDataGridEditing() {
     const [rows, setRows] = useState(initialRows);
  return (
    <Box sx={{height:400, width:'100%'}}>
        <DataGrid rows={rows} columns={columns} 
         /*editMode="row" */
         isCellEditable={(params) => params.row.age > 25} 
         processRowUpdate={(newRow) => {
          setRows((prevRows) =>
            prevRows.map((row) =>
              row.id === newRow.id ? newRow : row
            )
          );
          return newRow;
        }}

        pageSizeOptions={[5]}/>

       
    </Box>
  );
}
export default MuiDataGridEditing;
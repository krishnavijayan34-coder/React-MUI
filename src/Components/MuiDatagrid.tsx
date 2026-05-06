import { DataGrid,GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const rows = [
  { id: 1, name: 'Data Grid', description: 'Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'Premium version' },
];

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 250 },
];


function MuiDatagrid() {
  return (
    <Box sx={{height:300, width:'100%'}}>
        <DataGrid rows={rows} columns={columns} checkboxSelection pageSizeOptions={[5,10]}
         initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        showToolbar  />
      
    </Box>
  );
}
export default MuiDatagrid;
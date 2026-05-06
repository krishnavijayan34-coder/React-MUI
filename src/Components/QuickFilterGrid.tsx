import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

const rows = [
  { id: 1, name: "Jon", age: 14 },
  { id: 2, name: "Arya", age: 11 },
  { id: 3, name: "Robb", age: 16 },
];

const columns = [
  { field: "id" },
  { field: "name" },
  { field: "age" },
];

// Custom Toolbar
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

export default function QuickFilterGrid() {
  return (
    <div style={{ height: 300 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
  );
}
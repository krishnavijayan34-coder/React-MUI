import { DataGrid } from "@mui/x-data-grid";

const columns = Array.from({ length: 200 }).map((_, index) => ({
  field: `col${index}`,
  headerName: `Column ${index}`,
  width: 120,
}));

const rows = Array.from({ length: 10 }).map((_, rowIndex) => {
  const row: any = { id: rowIndex };

  for (let i = 0; i < 200; i++) {
    row[`col${i}`] = `R${rowIndex}-C${i}`;
  }

  return row;
});

export default function ColumnVirtualizationGrid() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
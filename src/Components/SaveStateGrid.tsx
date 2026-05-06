import { DataGrid, GridSortModel, GridFilterModel } from "@mui/x-data-grid";
import { useState, useEffect } from "react";

const rows = [
  { id: 1, name: "Jon", age: 14 },
  { id: 2, name: "Arya", age: 11 },
];

const columns = [
  { field: "id" },
  { field: "name" },
  { field: "age" },
];

export default function SaveStateGrid() {
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  useEffect(() => {
    const saved = localStorage.getItem("gridState");
    if (saved) {
      const state = JSON.parse(saved);
      setSortModel(state.sortModel);
      setFilterModel(state.filterModel);
    }
  }, []);

  const saveState = () => {
    localStorage.setItem(
      "gridState",
      JSON.stringify({ sortModel, filterModel })
    );
  };

  return (
    <div style={{ height: 300 }}>
      <button onClick={saveState}>Save State</button>

      <DataGrid
        rows={rows}
        columns={columns}
        sortModel={sortModel}
        onSortModelChange={(m) => setSortModel(m)}
        filterModel={filterModel}
        onFilterModelChange={(m) => setFilterModel(m)}
      />
    </div>
  );
}
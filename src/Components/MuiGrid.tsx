import { Box, Grid } from "@mui/material";

function MuiGrid() {
  return (
    <Grid container rowSpacing={2} columnSpacing={1} sx={{ my: 4 }}>

      <Grid size={{ xs: 12, sm: 3 }}>
        <Box sx={{ bgcolor: "primary.light", p: 2 }}>
          Item 1
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 9 }}>
        <Box sx={{ bgcolor: "secondary.light", p: 2 }}>
          Item 2
        </Box>
      </Grid>

      <Grid size={{ xs:'auto', sm: 9 }}>
        <Box sx={{ bgcolor: "success.light", p: 2 }}>
          Item 3
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 3 }}>
        <Box sx={{ bgcolor: "error.light", p: 2 }}>
          Item 4
        </Box>
      </Grid>

    </Grid>
  );
}

export default MuiGrid;
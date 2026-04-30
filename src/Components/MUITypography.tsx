import { Typography } from "@mui/material";

function MUITypography() {
  return (
    <div>
      <Typography variant="h1">Heading h1</Typography>
      <Typography variant="h2">Heading h2</Typography>
      <Typography variant="h3" component="h1"> Heading h3 styled but h1 semantic</Typography>
      <Typography variant="h4" component="h2" gutterBottom>Heading h4 styled but h2 semantic</Typography>
      <Typography variant="h5">Heading h5</Typography>
      <Typography variant="h6">Heading h6</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione et quasi itaque pariatur cumque non quos corporis nesciunt suscipit quidem blanditiis quas voluptatem tempore, voluptatum eos numquam, nam accusamus aliquam?</Typography>
    </div>
  );
}

export default MUITypography;
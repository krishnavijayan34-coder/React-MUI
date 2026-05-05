import { Box,Card,CardContent,Typography,CardActions,Button,CardMedia } from "@mui/material";
function MuiCard() {
  return (
    <Box sx={{width:'300px'}}>
        <Card>
            <CardMedia component='img' height='140' image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="unsplash image" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MuiCard
            </Typography>
            <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta and a community of individual developers and companies.
            </Typography>
          </CardContent>
          <CardActions>
             <Button size="small">Share</Button>
             <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Box>
  );
}
export default MuiCard;
import { Box,Stack,Divider } from "@mui/material";
function MuiStack() {
  return (
    <Stack sx={{border:'1px solid'}} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} >
    <Box sx={{ backgroundColor: 'primary.main', color: 'white',height:'100px',width:'100px',
        padding:'16px','&:hover':{backgroundColor:'primary.light'}
     }}>
      Hello world
    </Box>
    <Box sx={{ display: "flex", height: "100px", width: "100px", bgcolor: "success.light", color: "white", p: 2 }}>
    </Box>
    </Stack>
  );
}
export default MuiStack;
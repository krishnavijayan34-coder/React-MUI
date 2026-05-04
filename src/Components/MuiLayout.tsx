import { Box } from "@mui/material";
function MuiLayout() {
  return (
    <>
    <Box sx={{ backgroundColor: 'primary.main', color: 'white',height:'100px',width:'100px',
        padding:'16px','&:hover':{backgroundColor:'primary.light'}
     }}>
      Hello world
    </Box>
    <Box sx={{ display: "flex", height: "100px", width: "100px", bgcolor: "success.light", color: "white", p: 2 }}>
    </Box>
    </>
  );
}
export default MuiLayout;
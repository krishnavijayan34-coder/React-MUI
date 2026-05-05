import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function MuiList() {
  return (
    <Box sx={{ width: 400, bgcolor: "gray" }}>
      <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ListItem 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ListItem 2" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ListItem 3" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
}

export default MuiList;
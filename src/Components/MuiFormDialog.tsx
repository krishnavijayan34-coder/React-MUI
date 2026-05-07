import { CheckBox } from "@mui/icons-material";
import { Button ,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Stack, TextField, FormControlLabel,Checkbox, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function MuiFormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
      <Dialog  open={open} onClose={()=>setOpen(false)} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">User Registration<IconButton onClick={handleClose} style={{float:'right'}}> <CloseIcon  color="primary"/></IconButton></DialogTitle>
        <DialogContent>
           { /*<DialogContentText id="dialog-description">
                Please fill out the form below to register.
            </DialogContentText>*/}
            <Stack spacing={2} sx={{ m: 2 }}>
                <TextField variant="outlined" label="UserName"></TextField>
                <TextField variant="outlined" label="Password"></TextField>
                <TextField variant="outlined" label="Email"></TextField>
                <TextField variant="outlined" label="Phone"></TextField>
                <FormControlLabel control={<Checkbox defaultChecked color="primary"></Checkbox>} label="I agree to the terms and conditions"></FormControlLabel>
                <Button color="primary" variant="contained">Submit</Button>
                
            </Stack>
        </DialogContent>
        <DialogActions>
           {/*<Button onClick={()=>setOpen(false)} color="error">Cancel</Button>
            <Button autoFocus onClick={()=>setOpen(false)} color="success">Submit</Button>*/}
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MuiFormDialog;
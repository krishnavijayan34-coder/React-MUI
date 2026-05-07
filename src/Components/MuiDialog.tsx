import { Button ,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";
import { useState } from "react";
function MuiDialog() {
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
      <Dialog open={open} onClose={()=>setOpen(false)} aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id="dialog-title">Submit the Test ?</DialogTitle>
        <DialogContent>
            <DialogContentText id="dialog-description">
                Are you sure you want to submit the test? You 
                will not be able to change your answers after submitting the test.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={()=>setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default MuiDialog;
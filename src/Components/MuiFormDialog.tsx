import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function MuiFormDialog({ onSubmit }: any) {

  const [open, setOpen] = useState(false);

  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    agree: false,
  });

  
  const handleClickOpen = () => {
    setOpen(true);
  };

 
  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (e: any) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>

        <DialogTitle>
          User Registration

          <IconButton
            onClick={handleClose}
            sx={{ float: "right" }}
          >
            <CloseIcon color="primary" />
          </IconButton>

        </DialogTitle>

        <DialogContent>

          <Stack spacing={2} sx={{ m: 2 }}>

            <TextField
              label="UserName"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
              }
              label="I agree to the terms and conditions"
            />

            <Button
              variant="contained"
              onClick={() => onSubmit(formData)}
            >
              Submit
            </Button>

          </Stack>

        </DialogContent>

      </Dialog>
    </>
  );
}

export default MuiFormDialog;
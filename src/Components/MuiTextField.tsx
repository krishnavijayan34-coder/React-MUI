import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      
      {/* Variants */}
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* Size & Color */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small" size="small" color="secondary" />
      </Stack>

      {/* Form Input + Validation */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "This field is required" : ""}
        />

        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />

        <TextField
          label="Read Only"
          variant="outlined"
          slotProps={{
            input: { readOnly: true },
          }}
        />
      </Stack>

      {/* Adornments */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Weight"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">kg</InputAdornment>
              ),
            },
          }}
        />
      </Stack>

    </Stack>
  );
}

export default MuiTextField;
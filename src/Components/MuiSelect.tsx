import { Box,TextField,MenuItem } from "@mui/material";
import { useState } from "react";


function SelectMui() {
    const[countries, setCountries] = useState<string[]>([]);
    console.log(countries);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountries(Array.isArray(event.target.value) ? event.target.value : [event.target.value]);
    };
  return (
    <Box sx={{ width: 250 }}>
    <TextField label="Select Country" select value={countries} onChange={handleChange} fullWidth slotProps={{ select:{ multiple : true } }} color="secondary" size="small" helperText="Please select your country">
    <MenuItem value="India">India</MenuItem>
    <MenuItem value="US">USA</MenuItem>
    <MenuItem value="AU">Australia</MenuItem>

    </TextField>
      
    </Box>
  );
}
export default SelectMui;
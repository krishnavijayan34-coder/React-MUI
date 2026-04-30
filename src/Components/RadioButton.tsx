import { Box , FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,FormHelperText} from "@mui/material"
import { ChangeEvent, useState } from "react";
function RadioButton() {
  const [value, setValue] = useState('');
  console.log(value);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
    <FormControl error>
        <FormLabel id="Job-Experience-Group-label">Years of Experience
        
        </FormLabel>
        <RadioGroup name="Job-experience-Group" aria-labelledby="Job-Experience-Group-label"
        value={value}
        onChange={handleChange} row>
            <FormControlLabel control={<Radio color="secondary" size="medium" />} label="0-2" value="0-2"/>
            <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
            <FormControlLabel control={<Radio/>} label="6-10" value="6-10"/>

        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
    </FormControl>
    </Box>
  )
}
export default RadioButton;
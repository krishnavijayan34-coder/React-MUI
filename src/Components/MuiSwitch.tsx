import { FormControlLabel,Switch } from "@mui/material"; 
import { useState } from "react";
function MuiSwitch() {
    const [checked, setChecked] = useState(false);
    console.log(checked);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <FormControlLabel label='Dark Mode' control={<Switch color="success" checked={checked} onChange={handleChange}/>}/>
        </div>
    )
}
export default MuiSwitch;
       
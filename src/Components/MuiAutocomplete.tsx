import { Stack,Autocomplete,TextField } from "@mui/material";
import { useState } from "react";
type Skill={
    id:number;
    label:string;
}
const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];
const skillOptions=skills.map((skill,index)=>({
    id:index+1,
    label:skill
}));
function MuiAutocomplete() {
    const [value, setValue] = useState<string | null>(null);
    console.log(value);
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    console.log(selectedSkill);
  return (
    <Stack spacing={2} sx={{ width: "250px" }}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }} freeSolo/>

        <Autocomplete
        options={skillOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={selectedSkill}
        onChange={(event: any, newValue: Skill | null) => {
          setSelectedSkill(newValue);
        }} />

    </Stack>
  );
}
export default MuiAutocomplete;
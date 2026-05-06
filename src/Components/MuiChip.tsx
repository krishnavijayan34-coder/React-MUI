import { Stack,Chip,Avatar } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";
function MuiChip() {
    const [chip, setChip] = useState(['Chip 1', 'Chip 2', 'Chip 3']);
    const handleDelete = (chipToDelete: string) => {
        setChip(chips => chips.filter(chip => chip !== chipToDelete));
    };
  return (
    <Stack direction={"row"} spacing={1}>
    <Chip label='Chip' color="primary" size="small" icon={<FaceIcon/>}/>
    <Chip label='Chip Outlined' color="secondary" size="small" variant="outlined" avatar={<Avatar>V</Avatar>}/>
    <Chip label='Click' color="success" onClick={() => alert('Chip clicked!')}/>
    <Chip label='Delete' color="error"  onClick={() => alert('Chip clicked!')} onDelete={() => alert('Chip deleted!')}/>
    {
        chip.map(chip => (
            <Chip key={chip} label={chip} onDelete={() =>handleDelete(chip)}/>
        ))
    }
    </Stack>
  );
}
export default MuiChip;
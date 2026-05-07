import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import MuiPicker from './Components/MuiPicker';
function App() {
   return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <MuiPicker/>
    </div>
    </LocalizationProvider>
  );
}

export default App;

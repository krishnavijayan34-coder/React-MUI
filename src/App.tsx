import "./App.css";
import { useState } from "react";
import MuiFormDialog from "./Components/MuiFormDialog";

function App() {

  const [userData, setUserData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setUserData(data);
  };

  return (
    <div className="App">

      <MuiFormDialog onSubmit={handleFormSubmit} />

      {userData && (
        <div>
          <p>Username: {userData.username}</p>
          <p>Password: {userData.password}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          
        </div>
      )}

    </div>
  );
}

export default App;
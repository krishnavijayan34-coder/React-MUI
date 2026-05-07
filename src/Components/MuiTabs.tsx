import { Box, Tab, TextField } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";

function MuiTabs() {
  const [value, setValue] = useState("1");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <TextField
            label="Enter Value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </TabPanel>

        <TabPanel value="2">
          <p>{inputValue || "No value entered"}</p>
        </TabPanel>

        <TabPanel value="3">
          <p>Extra Tab</p>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiTabs;
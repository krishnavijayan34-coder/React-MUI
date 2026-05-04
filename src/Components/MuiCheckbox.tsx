import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,FormHelperText
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function MuiCheckbox() {
 
  const [acceptTnc, setAcceptTnc] = useState(false);


  const [bookmark, setBookmark] = useState(false);

 
  const [skills, setSkills] = useState({
    html: false,
    css: false,
    java: false,
  });

  console.log("TnC:", acceptTnc);
  console.log("Bookmark:", bookmark);
  console.log("Skills:", skills);

  // Handlers
  const handleTncChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };

  const handleBookmarkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBookmark(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkills({
      ...skills,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      
      <FormControlLabel
        control={
          <Checkbox checked={acceptTnc} onChange={handleTncChange} size="small" color="secondary" />
        }
        label="Accept Terms & Conditions"
      />

      
      <FormControlLabel
        control={
          <Checkbox
            checked={bookmark}
            onChange={handleBookmarkChange}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon /> }
          />
        }
        label="Bookmark this"
      />

      
      <FormControl>
        <FormLabel>Choose Skills</FormLabel>

        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                name="html"
                checked={skills.html}
                onChange={handleSkillsChange}
              />
            }
            label="HTML"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="css"
                checked={skills.css}
                onChange={handleSkillsChange}
              />
            }
            label="CSS"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="java"
                checked={skills.java}
                onChange={handleSkillsChange}
              />
            }
            label="Java"
          />
        </FormGroup>
        <FormHelperText>Choose at least one skill</FormHelperText>
      </FormControl>
    </div>
  );
}

export default MuiCheckbox;
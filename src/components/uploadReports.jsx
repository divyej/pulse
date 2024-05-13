import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const UploadButton = ({ fileName, setFileName, handleFileUpload }) => {
  //   const [fileName, setFileName] = useState('');

  //   const handleFileUpload = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       setFileName(file.name);
  //     }
  //   };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <label htmlFor="file-upload">
        <Button variant="contained" component="span">
          Upload File
        </Button>
        <input
          id="file-upload"
          type="file"
          hidden
          onChange={handleFileUpload}
        />
      </label>
      {fileName && <span>{fileName}</span>}
    </Stack>
  );
};

export default UploadButton;

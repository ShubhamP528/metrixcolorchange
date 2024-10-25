import React, { useState } from "react";
import axios from "axios";

const FileUploadWithProgress = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadUrl, setUploadUrl] = useState(""); // Store resumable upload URL

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const initiateUpload = async () => {
    if (!file) {
      alert("Please select a file first");
      return;
    }

    // First, request the backend to create a resumable upload URL
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/courtroom/fileUpload",
        formData
      );
      setUploadUrl(response.data.data.uploadUrl);

      // Now proceed with uploading the file using the resumable upload URL
      uploadFileWithProgress(response.data.data.uploadUrl);
    } catch (error) {
      console.error("Error initiating upload:", error);
    }
  };

  const uploadFileWithProgress = async (url) => {
    const xhr = new XMLHttpRequest();

    // Track upload progress with the XMLHttpRequest
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded * 100) / event.total);
        setUploadProgress(progress);
      }
    };

    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", file.type);

    // Send the file
    xhr.send(file);

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log("File uploaded successfully!");
      } else {
        console.error("Error uploading file:", xhr.responseText);
      }
    };
  };

  return (
    <div>
      <h2>File Upload with Progress (Resumable Upload)</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={initiateUpload}>Upload File</button>

      {uploadProgress > 0 && (
        <div>
          <p>Upload Progress: {uploadProgress}%</p>
          <progress value={uploadProgress} max="100">
            {uploadProgress}%
          </progress>
        </div>
      )}
    </div>
  );
};

export default FileUploadWithProgress;

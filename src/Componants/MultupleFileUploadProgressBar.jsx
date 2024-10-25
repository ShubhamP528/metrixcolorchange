import React, { useState } from "react";
import axios from "axios";

const MultipleFileUploadWithProgress = () => {
  const [files, setFiles] = useState([]);
  const [progressList, setProgressList] = useState({}); // Track individual file progress

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const initiateUpload = async () => {
    if (files.length === 0) {
      alert("Please select files first");
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      // Send request to get resumable upload URLs for all files
      const response = await axios.post(
        "http://localhost:8000/api/v1/documentDrafter/uploadResumableFiles",
        formData
      );

      const uploadUrls = response.data; // Array of upload URLs
      uploadFilesWithProgress(uploadUrls);
    } catch (error) {
      console.error("Error initiating upload:", error);
    }
  };

  const uploadFilesWithProgress = (uploadUrls) => {
    const totalFileSize = Array.from(files).reduce(
      (acc, file) => acc + file.size,
      0
    );
    let totalBytesUploaded = 0;

    Array.from(files).forEach((file, index) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const individualProgress = (event.loaded / event.total) * 100;

          setProgressList((prevProgress) => ({
            ...prevProgress,
            [file.name]: individualProgress,
          }));

          totalBytesUploaded = Object.values(progressList).reduce(
            (acc, currProgress) => acc + (currProgress * file.size) / 100,
            0
          );

          const overallProgress = Math.round(
            (totalBytesUploaded * 100) / totalFileSize
          );
          setProgressList((prevProgress) => ({
            ...prevProgress,
            total: overallProgress,
          }));
        }
      };

      xhr.open("PUT", uploadUrls[index].uploadUrl, true);
      xhr.setRequestHeader("Content-Type", file.type);

      xhr.send(file);

      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(`${file.name} uploaded successfully!`);
        } else {
          console.error(`Error uploading ${file.name}:`, xhr.responseText);
        }
      };
    });
  };

  return (
    <div>
      <h2>Multiple File Upload with Progress</h2>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={initiateUpload}>Upload Files</button>

      {Object.keys(progressList).map((fileName, index) => (
        <div key={index}>
          <p>
            {fileName === "total" ? "Total Progress" : `Uploading ${fileName}`}:
            {Math.round(progressList[fileName])}%
          </p>
          <progress value={progressList[fileName]} max="100">
            {Math.round(progressList[fileName])}%
          </progress>
        </div>
      ))}
    </div>
  );
};

export default MultipleFileUploadWithProgress;

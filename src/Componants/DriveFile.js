import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";

const GoogleDrivePicker = () => {
  const [openPicker, data] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        "1013135670873-p4t4ef4m5qvpr5j993ar1tr5k58g136d.apps.googleusercontent.com",
      developerKey: "AIzaSyDSW4OuWpzk19KMGdylGkDuZzhFD2tagXQ",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: async (data) => {
        console.log(data);
        if (data?.docs) {
          const file = data.docs[0]; // Get the first selected file
          console.log("Selected file:", file);

          try {
            // Check if it's a Google Docs Editors file or a binary file
            const fileData = await fetchFileFromGoogleDrive(
              file.id,
              file.mimeType
            );
            console.log("File content:", fileData);

            // Send the file data to your backend
            await sendFileToBackend(file, fileData);
          } catch (error) {
            console.error("Error fetching file data:", error);
          }
        } else {
          console.log("No file selected or auth token missing");
        }
      },
    });
  };

  // Fetch file data based on its MIME type (Google Docs Editors files or binary)
  const fetchFileFromGoogleDrive = async (fileId, mimeType) => {
    const baseUrl = `https://www.googleapis.com/drive/v3/files/${fileId}`;
    let url;

    // Check if the file is a Google Docs Editors file
    if (
      mimeType === "application/vnd.google-apps.document" ||
      mimeType === "application/vnd.google-apps.spreadsheet" ||
      mimeType === "application/vnd.google-apps.presentation"
    ) {
      // Use export for Docs Editors files
      const exportMimeType =
        mimeType === "application/vnd.google-apps.document"
          ? "application/pdf"
          : mimeType === "application/vnd.google-apps.spreadsheet"
          ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          : "application/vnd.openxmlformats-officedocument.presentationml.presentation";

      url = `${baseUrl}/export?mimeType=${exportMimeType}`;
    } else {
      // Use direct download for binary files
      url = `${baseUrl}?alt=media`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
      },
    });

    if (!response.ok) {
      const resp = await response.text();
      console.log(resp);
      throw new Error("Failed to fetch file from Google Drive");
    }

    const fileBlob = await response.blob(); // Get the file content as a blob
    return fileBlob;
  };

  const sendFileToBackend = async (file, fileData) => {
    const formData = new FormData();
    formData.append("file", fileData, file.name); // Append file content
    formData.append("fileName", file.name); // Append additional metadata

    const response = await fetch(
      "http://localhost:8000/api/v1/courtroom/newcase",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to upload file to backend");
    }

    console.log("File successfully sent to backend");
  };

  return (
    <div>
      <h1>Google Drive Picker Example</h1>
      <button onClick={handleOpenPicker}>Open Google Drive Picker</button>
    </div>
  );
};

export default GoogleDrivePicker;

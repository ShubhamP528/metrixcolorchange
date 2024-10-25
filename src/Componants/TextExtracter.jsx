import React, { useState } from "react";
import axios from "axios";

const TextExtractor = () => {
  const [file, setFile] = useState(null);
  const [formattedText, setFormattedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:9080/extract-text",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormattedText(response.data.text);
    } catch (error) {
      console.error("Error uploading file:", error);
      setError("Failed to extract text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Text Extractor</h1>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.bmp"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload and Extract Text"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {formattedText && (
        <div
          style={{
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h2>Extracted Text:</h2>
          <p>{formattedText}</p>
        </div>
      )}
    </div>
  );
};

export default TextExtractor;

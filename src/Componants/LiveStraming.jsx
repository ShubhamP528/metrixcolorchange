import React, { useState, useEffect } from "react";

const LiveStreamComponent = () => {
  const [messages, setMessages] = useState(""); // To store the streamed messages
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0); // To show the progress

  const fetchStreamedData = async () => {
    setIsLoading(true);
    setProgress(0);

    try {
      // Fetch API with streaming support
      const response = await fetch("http://20.198.24.104/api/v1/gpt/generate", {
        method: "POST",
        body: JSON.stringify({
          prompt: "What is wealth act?",
          context:
            "What is the finance laws? Based on the provided context information...",
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
      });

      console.log(response);

      if (!response.body) {
        throw new Error("ReadableStream not supported in this browser.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let totalBytes = 0;
      let message = ""; // Temporarily store incoming chunks

      // Read the streamed data
      const readStream = async () => {
        const { done, value } = await reader.read();

        if (done) {
          setIsLoading(false);
          setProgress(100); // Set progress to 100% when done
          return; // Stream is done
        }

        totalBytes += value.length; // Track the size of streamed data

        // Decode and append the chunk of data
        const chunk = decoder.decode(value, { stream: true });
        message += chunk;

        // Update the state to display the data in UI
        setMessages((prevMessages) => prevMessages + chunk);

        // You can set a progress percentage based on data streamed
        setProgress(
          (totalBytes / response.headers.get("Content-Length")) * 100
        );

        // Continue reading the next chunk
        readStream();
      };

      readStream();
    } catch (err) {
      console.error("Error during fetch:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStreamedData();
  }, []);

  return (
    <div>
      <h2>Live Streaming</h2>

      {isLoading ? <p>Receiving messages...</p> : <p>All messages received.</p>}

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "200px",
          overflowY: "auto",
          whiteSpace: "pre-wrap", // Preserve formatting of streamed text
        }}
      >
        {messages}
      </div>

      {/* Progress Bar */}
      {isLoading && (
        <div style={{ marginTop: "10px" }}>
          <div style={{ height: "10px", background: "#ddd", width: "100%" }}>
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: "green",
                transition: "width 0.5s",
              }}
            />
          </div>
          <p>{Math.round(progress)}% completed</p>
        </div>
      )}
    </div>
  );
};

export default LiveStreamComponent;

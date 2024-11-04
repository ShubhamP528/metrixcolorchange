import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRefs = useRef([]);
  const socketRef = useRef();
  const peerConnections = useRef({}); // Store peer connections

  useEffect(() => {
    socketRef.current = io("http://localhost:5000", { withCredentials: true });

    const handleNewUser = async (userId) => {
      const peerConnection = new RTCPeerConnection();

      // Get local stream and add it to the connection
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = stream;

      stream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, stream);
      });

      // Handle incoming remote stream
      peerConnection.ontrack = (event) => {
        const remoteVideo = document.createElement("video");
        remoteVideo.srcObject = event.streams[0];
        remoteVideo.play();
        remoteVideoRefs.current.push(remoteVideo);
        document.body.appendChild(remoteVideo); // Append to the DOM or a specific container
      };

      // Emit a signal to notify new user
      socketRef.current.emit("join", userId);

      // Store the peer connection
      peerConnections.current[userId] = peerConnection;

      // Handle ICE candidates
      peerConnection.onicecandidate = ({ candidate }) => {
        if (candidate) {
          socketRef.current.emit("ice-candidate", { candidate, userId });
        }
      };
    };

    socketRef.current.on("user-joined", handleNewUser);

    // Clean up on unmount
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        style={{ width: "300px" }}
      />
      {/* Render remote video elements */}
      {remoteVideoRefs.current.map((video, index) => (
        <div key={index}>{video}</div>
      ))}
    </div>
  );
};

export default VideoCall;

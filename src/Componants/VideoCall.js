import React, { useEffect, useRef, useContext } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../context/AuthContext";

const VideoCall = () => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const socket = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.current = io("http://localhost:5000");
    const peerConnection = new RTCPeerConnection();

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream
          .getTracks()
          .forEach((track) => peerConnection.addTrack(track, stream));
      });

    peerConnection.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    socket.current.on("offer", async (offer) => {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(offer)
      );
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.current.emit("answer", answer);
    });

    socket.current.on("answer", (answer) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.current.on("ice-candidate", (candidate) => {
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current.emit("ice-candidate", event.candidate);
      }
    };

    return () => {
      socket.current.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl mb-4">Welcome, {user.username}</h2>
      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        className="w-full h-auto mb-4"
      />
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        className="w-full h-auto"
      />
    </div>
  );
};

export default VideoCall;

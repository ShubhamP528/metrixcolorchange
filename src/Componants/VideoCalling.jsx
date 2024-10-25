// import React, { useRef, useEffect, useState } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:5000");

// function VideoCalling() {
//   const [stream, setStream] = useState(null);
//   const [remoteStream, setRemoteStream] = useState(null);
//   const videoRef = useRef();
//   const remoteVideoRef = useRef();
//   const peerRef = useRef();

//   useEffect(() => {
//     // Get user media (video and audio)
//     navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((currentStream) => {
//         setStream(currentStream);
//         if (videoRef.current) {
//           videoRef.current.srcObject = currentStream;
//         }
//       });

//     // Join the room
//     socket.emit("join-room", "room1", socket.id);

//     socket.on("user-connected", (userId) => {
//       console.log("User connected: " + userId);
//       callUser(userId);
//     });
//   }, []);

//   const callUser = (userId) => {
//     const peer = new RTCPeerConnection();
//     peerRef.current = peer;

//     stream.getTracks().forEach((track) => {
//       peer.addTrack(track, stream);
//     });

//     peer.ontrack = (event) => {
//       const [remoteStream] = event.streams;
//       setRemoteStream(remoteStream);
//       if (remoteVideoRef.current) {
//         remoteVideoRef.current.srcObject = remoteStream;
//       }
//     };

//     peer.createOffer().then((offer) => {
//       peer.setLocalDescription(offer);
//       socket.emit("send-offer", offer, userId);
//     });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex flex-col gap-4">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           className="w-80 h-60 bg-gray-500 rounded-md"
//         ></video>
//         <video
//           ref={remoteVideoRef}
//           autoPlay
//           className="w-80 h-60 bg-gray-500 rounded-md"
//         ></video>
//       </div>
//     </div>
//   );
// }

// export default VideoCalling;

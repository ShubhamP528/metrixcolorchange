import React, { useEffect, useRef, useState } from "react";
import SimplePeer from "simple-peer";
import process from "process"; // Polyfill for process

const App = () => {
  const [myStream, setMyStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);

  const myVideo = useRef();
  const remoteVideo = useRef();

  useEffect(() => {
    // Start WebSocket connection
    const ws = new WebSocket("ws://localhost:5000");
    setSocket(ws);

    // Get user media (camera and microphone)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        myVideo.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error);
      });

    ws.onmessage = (message) => {
      const { type, data } = JSON.parse(message.data);
      switch (type) {
        case "offer":
          handleOffer(data);
          break;
        case "answer":
          handleAnswer(data);
          break;
        case "candidate":
          handleCandidate(data);
          break;
        default:
          break;
      }
    };
  }, []);

  const createPeer = (initiator) => {
    const newPeer = new SimplePeer({
      initiator,
      trickle: true,
      stream: myStream,
    });

    newPeer.on("signal", (data) => {
      const messageType =
        data.type === "offer"
          ? "offer"
          : data.type === "answer"
          ? "answer"
          : "candidate";
      socket.send(JSON.stringify({ type: messageType, data }));
    });

    newPeer.on("stream", (remoteStream) => {
      remoteVideo.current.srcObject = remoteStream;
      setConnected(true);
    });

    newPeer.on("error", (err) => console.error("Peer error:", err));

    return newPeer;
  };

  const handleOffer = (offer) => {
    const newPeer = createPeer(false);
    newPeer.signal(offer);
    setPeer(newPeer);
  };

  const handleAnswer = (answer) => {
    if (peer) {
      peer.signal(answer);
    }
  };

  const handleCandidate = (candidate) => {
    if (peer) {
      peer.signal(candidate);
    }
  };

  const startCall = () => {
    const newPeer = createPeer(true);
    setPeer(newPeer);
  };

  return (
    <div>
      <h1>WebRTC Video Call</h1>
      <div>
        <video ref={myVideo} autoPlay muted style={{ width: "300px" }} />
        <video
          ref={remoteVideo}
          autoPlay
          style={{ width: "300px", display: connected ? "block" : "none" }}
        />
      </div>
      <button onClick={startCall} disabled={!!peer}>
        Start Call
      </button>
    </div>
  );
};

export default App;

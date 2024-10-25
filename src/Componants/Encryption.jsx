import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

// Function to decrypt data using AES
const decryptData = (encryptedData, rawKey) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, rawKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

// Function to encrypt data using AES
const encryptData = (data, rawKey) => {
  return CryptoJS.AES.encrypt(data, rawKey).toString();
};

const key = "a0d8f302ead96493eaefe7c00ef0188aeb5c939beb30e9450eabeda9106d1a41";

export default function Encryption() {
  const [key, setKey] = useState("");
  useEffect(() => {
    const getKey = async () => {
      const data = await fetch("http://localhost:8900/towWaycommunication", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        const response = await data.json();
        console.log(response);

        const realData = await decryptData(
          response.encryptedData,
          response.key
        );

        console.log(realData);
        setKey(realData);
      }
    };
    getKey();
  }, []);
  return (
    <div>
      Encryption
      {key}
    </div>
  );
}

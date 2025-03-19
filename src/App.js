import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function HomePage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("API 호출 오류:", error));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">AI 법률 지원</h1>
      <p>{message}</p>
    </div>
  );
}

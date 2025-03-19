import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

export default function HomePage() {
  const [message, setMessage] = useState("");
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/`)
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error("API 호출 오류:", error));

    fetch(`${process.env.REACT_APP_BACKEND_URL}/faq`)
      .then((response) => response.json())
      .then((data) => setFaq(data))
      .catch((error) => console.error("FAQ 데이터 호출 오류:", error));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">AI 법률 지원</h1>
      <p className="mb-6">{message}</p>

      {/* FAQ 섹션 */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">자주 묻는 질문 (FAQ)</h2>
        {faq.length > 0 ? (
          faq.map((item, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg mb-4">
              <h3 className="text-xl font-semibold text-blue-300">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))
        ) : (
          <p>FAQ 데이터를 불러오는 중...</p>
        )}
      </div>
    </div>
  );
}

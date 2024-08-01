// src/components/DownloadButton.jsx
import React from "react";
import "../DownloadButton.css";

const DownloadButton = () => {
  return (
    <div className="download-button-container">
      <a
        href="https://drive.google.com/file/d/1TFG_jpMe_D6MUVti0K16vu3SAGAgmdOu/view?usp=drive_link"
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;

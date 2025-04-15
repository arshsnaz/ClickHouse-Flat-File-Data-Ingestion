import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus("");
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8080/api/upload/csv", formData);
      setStatus(res.data);
    } catch (error) {
      setStatus("Upload failed: " + error.message);
    }
  };

  return (
    <div className="p-6 rounded-lg bg-gradient-to-r from-green-500 via-teal-600 to-blue-500 shadow-xl max-w-md mx-auto mt-8">
      <h3 className="text-white text-lg font-semibold mb-4 text-center">Upload Flat File (CSV)</h3>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={handleUpload}
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
        Upload
      </button>
      {status && <p className="mt-4 text-sm text-gray-700 text-center">{status}</p>}
    </div>
  );
};

export default FileUploader;

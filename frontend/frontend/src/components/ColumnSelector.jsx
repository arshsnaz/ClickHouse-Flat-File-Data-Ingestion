import React, { useEffect, useState } from "react";
import axios from "axios";

const ColumnSelector = () => {
  const [columns, setColumns] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [previewData, setPreviewData] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/upload/columns")
      .then((res) => setColumns(res.data))
      .catch((err) => console.error("Error fetching columns:", err));
  }, []);

  const handleToggle = (column) => {
    setSelected((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column]
    );
  };

  const handleExport = () => {
    axios
      .get("http://localhost:8080/api/upload/export", {
        responseType: "blob", // Ensure the response is treated as a blob (file)
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "clickhouse_data.csv"); // Specify the default download filename
        document.body.appendChild(link);
        link.click(); // Trigger the download
      })
      .catch((err) => {
        console.error("Export failed:", err);
        alert("Export failed. See console for details.");
      });
  };

  const handlePreview = () => {
    axios
      .get("http://localhost:8080/api/upload/preview")
      .then((res) => {
        setPreviewData(res.data);
        setPreviewVisible(true);
      })
      .catch((err) => {
        console.error("Preview fetch failed:", err);
        alert("Failed to preview data.");
      });
  };

  const handleIngest = () => {
    if (selected.length === 0) {
      alert("Please select at least one column to ingest.");
      return;
    }

    const tableName = prompt("Enter the ClickHouse table name:");
    if (!tableName) return;

    setLoading(true);
    axios
      .post("http://localhost:8080/api/upload/ingest", {
        tableName: tableName,
        columns: selected,
      })
      .then(() => {
        alert("Ingestion successful!");
        setUploadSuccess(true);
      })
      .catch((err) => {
        console.error("Ingestion failed:", err);
        alert("Ingestion failed. See console for details.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 rounded bg-white shadow-md max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4 text-center">Select Columns to Ingest</h2>
      
      {columns.length === 0 ? (
        <p className="text-gray-500">No columns available. Upload a CSV file first.</p>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {columns.map((col, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selected.includes(col)}
                onChange={() => handleToggle(col)}
                className="checkbox-style"
              />
              <span>{col}</span>
            </label>
          ))}
        </div>
      )}

      <button
        onClick={handleIngest}
        disabled={loading}
        className={`mt-4 w-full py-2 px-4 rounded text-white ${loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"}`}
      >
        {loading ? "Ingesting..." : "Ingest to ClickHouse"}
      </button>

      <button
        onClick={handleExport}
        className="mt-4 w-full py-2 px-4 rounded text-white bg-purple-600 hover:bg-purple-700"
      >
        Export to CSV
      </button>

      <button
        onClick={handlePreview}
        className="mt-4 w-full py-2 px-4 rounded text-white bg-blue-600 hover:bg-blue-700"
      >
        Preview First 100 Rows
      </button>

      {previewVisible && previewData.length > 0 && (
        <div className="mt-6 overflow-auto max-h-[400px] border p-2 rounded bg-gray-100 text-sm">
          <h3 className="font-semibold mb-2">CSV Preview:</h3>
          <table className="min-w-full table-auto border">
            <thead>
              <tr>
                {Object.keys(previewData[0]).map((key) => (
                  <th key={key} className="border px-2 py-1 bg-gray-200">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewData.map((row, index) => (
                <tr key={index}>
                  {Object.keys(row).map((col) => (
                    <td key={col} className="border px-2 py-1">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    
  );
};

export default ColumnSelector;

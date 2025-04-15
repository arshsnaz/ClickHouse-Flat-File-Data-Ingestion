import React from "react";
import FileUploader from "./components/FileUploader.jsx";
import ColumnSelector from "./components/ColumnSelector.jsx";

const IngestionPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Flat File → ClickHouse Ingestion</h1>
      <FileUploader />
      <ColumnSelector />
    </div>
  );
};


export default IngestionPage;

import React from 'react';

function DataPreview({ selectedColumns, setPreviewData }) {
  const preview = () => {
    // Placeholder logic: In real case, request backend
    const sample = selectedColumns.reduce((acc, col) => {
      acc[col] = `${col}_value`;
      return acc;
    }, {});
    setPreviewData([sample]);
  };

  return (
    <div>
      <h3>Preview Data</h3>
      <button onClick={preview}>Load Preview</button>
    </div>
  );
}

export default DataPreview;
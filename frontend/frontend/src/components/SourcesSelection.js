import React from 'react';

function SourceSelection({ source, setSource }) {
  return (
    <div>
      <label>Select Source:</label>
      <select value={source} onChange={e => setSource(e.target.value)}>
        <option value=''>--Choose--</option>
        <option value='ClickHouse'>ClickHouse</option>
        <option value='FlatFile'>Flat File</option>
      </select>
    </div>
  );
}

export default SourceSelection;
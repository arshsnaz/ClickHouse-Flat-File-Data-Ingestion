import React, { useState } from 'react';

function FlatFileForm({ setColumns, setStatus }) {
  const [filename, setFilename] = useState('');

  const loadSchema = () => {
    setStatus('Loading schema from flat file...');
    setTimeout(() => {
      setColumns(['col1', 'col2', 'col3']);
      setStatus('Columns loaded from flat file.');
    }, 1000);
  };

  return (
    <div>
      <h3>Flat File Configuration</h3>
      <input placeholder='File name (with .csv)' value={filename} onChange={e => setFilename(e.target.value)} />
      <button onClick={loadSchema}>Load Columns</button>
    </div>
  );
}

export default FlatFileForm;

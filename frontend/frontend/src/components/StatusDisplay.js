import React from 'react';

function StatusDisplay({ status }) {
  return (
    <div>
      <h4>Status:</h4>
      <p>{status}</p>
    </div>
  );
}

export default StatusDisplay;
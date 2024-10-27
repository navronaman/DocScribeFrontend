// src/components/DropdownList.jsx
import React from 'react';

const DropdownList = ({ value, onChange }) => {
  return (
    <select style={styles.dropdown} value={value} onChange={onChange}>
      <option value="">Select Report Type</option>
      <option value="blood">Blood Test</option>
      <option value="urine">Urine Test</option>
      <option value="liver">Liver</option>
      <option value="mri">MRI Scan</option>
      <option value="blood">X-Ray</option>
      <option value="blood">fMRI Scan</option>
      <option value="blood">Doc</option>
    </select>
  );
};

const styles = {
  dropdown: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '4px',
    width: '90%',
    maxWidth: '600px',
  },
};

export default DropdownList;

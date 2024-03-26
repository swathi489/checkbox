
import React, { useState } from 'react';
import './App.css'; 
function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        Check me!
      </label>
      <p>{checked ? 'Checked' : 'Unchecked'}</p>
    </div>
  );
}

export default Checkbox;

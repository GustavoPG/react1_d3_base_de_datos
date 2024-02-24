// components/Alert.jsx
import React from 'react';

const Alert = ({ alertText, alertType, alertState }) => {

  return (
    <>
      {alertState ?
        <div className={`alert alert-${alertType} text-center`} role="alert">{alertText}</div>
        : null
      }
    </>
  );
}

export default Alert;
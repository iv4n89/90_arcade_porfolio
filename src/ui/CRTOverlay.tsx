import React from 'react';

const CRTOverlay: React.FC = () => {
  return (
    <div className="crt-overlay">
      <div className="crt-scanlines"></div>
      <div className="crt-vignette"></div>
    </div>
  );
};

export default CRTOverlay;

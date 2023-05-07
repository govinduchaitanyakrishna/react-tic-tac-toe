import React from "react";

export const Logo = function (props) {
  return (
    <div className="lg-container">
      <img
        src={
          "https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
        }
        alt="logo/svg"
      />
      <label className="lg-title">Analytics</label>
    </div>
  );
};

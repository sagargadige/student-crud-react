import React from "react";

const ICONS = {
  success: "OK",
  info: "IN",
  warning: "WA",
  error: "ER",
};

const TITLES = {
  success: "Success",
  info: "Notice",
  warning: "Warning",
  error: "Error",
};

const AppToast = ({ show, type, message, onClose }) => {
  if (!show || !message) {
    return null;
  }

  return (
    <div className={`app-toast app-toast-${type}`} role="status" aria-live="polite">
      <div className="app-toast-pulse" aria-hidden="true" />
      <div className="app-toast-icon">{ICONS[type] || "IN"}</div>
      <div className="app-toast-content">
        <p className="app-toast-title">{TITLES[type] || "Notice"}</p>
        <p className="app-toast-message">{message}</p>
      </div>
      <button
        type="button"
        className="app-toast-close"
        aria-label="Close notification"
        onClick={onClose}
      >
        x
      </button>
    </div>
  );
};

export default AppToast;

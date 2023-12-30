import React from "react";
import css from "./ConfirmDialog.module.css";

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={css.confirmDialog}>
      <p>{message}</p>
      <div className={css.btnWrap}>
        <button onClick={handleConfirm}>Yes</button>
        <button onClick={handleCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmDialog;

import React from "react";
import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertText, alertType } = useAppContext();

  return <div className={`alert ${alertType}`}>{alertText}</div>;
};

export default Alert;

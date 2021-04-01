import React, { useEffect, useState } from "react";
import "./Button.scss";

const Button = ({ type, children }) => {
  const [buttonType, setButtonType] = useState({
    primary: false,
    secondary: false,
  });
  useEffect(() => {
    if (type === "primary") {
      setButtonType({ ...buttonType, primary: true });
    }
  }, []);
  return (
    <>
      {buttonType.primary && (
        <button className="button primaryButton">{children}</button>
      )}
      {buttonType.secondary && (
        <button className="button secondaryButton">{children}</button>
      )}
    </>
  );
};

export default Button;

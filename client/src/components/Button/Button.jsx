import React, { useEffect, useState } from "react";
import "./Button.scss";

const Button = ({ type, children }) => {
  const [buttonType, setButtonType] = useState({
    primary: false,
    secondary: false,
    gradient: false,
  });
  useEffect(() => {
    switch (type) {
      case "primary":
        setButtonType({ ...buttonType, primary: true });
        break;
      case "secondary":
        setButtonType({ ...buttonType, secondary: true });
        break;
      case "gradient":
        setButtonType({ ...buttonType, gradient: true });
        break;
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
      {buttonType.gradient && (
        <button className="button gradientButton">{children}</button>
      )}
    </>
  );
};

export default Button;

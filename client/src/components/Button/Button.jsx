import React from "react";
import "./Button.scss";

const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

export default Button;

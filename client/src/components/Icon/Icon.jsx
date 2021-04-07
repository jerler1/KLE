// https://dev.to/barrbozzo/the-right-way-to-use-svg-icons-with-react-30o3
import React, { useEffect, useState } from "react";

function Icon({ name, ...otherProps }) {
  const [iconModule, setIconModule] = useState(null);

  useEffect(() => {
    import(`../../assets/icons/${name}.svg`)
      .then((module) => {
        setIconModule(module);
      })
      .catch((error) => {
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [name]);

  const renderIcon = () => {
    if (!iconModule) return null;

    const Component = iconModule.ReactComponent;
    
    return <Component {...otherProps} />;
  };
  return <>{renderIcon()}</>;
};

export default Icon;

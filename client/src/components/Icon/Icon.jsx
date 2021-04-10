// https://dev.to/barrbozzo/the-right-way-to-use-svg-icons-with-react-30o3
import React, { useEffect, useState, useRef } from "react";

function Icon({ name, ...otherProps }) {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = await import(
          `../../assets/icons/svg/${name}.svg`
        ).ReactComponent;
      } catch (err) {
        console.log(`${name} icon does not exist: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  const renderIcon = () => {
    if (!loading && ImportedIconRef.current) {
      const { current: ImportedIcon } = ImportedIconRef;
      return <ImportedIcon {...otherProps} />;
    }
    return null;
  };
  return <>{renderIcon()}</>;
}

export default Icon;

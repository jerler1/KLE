// https://codesandbox.io/s/react-dynamic-svg-import-ts-kzx7n?fontsize=14&hidenavigation=1&theme=dark
import React, { useEffect, useState, useRef } from "react";

function Icon({ name, ...otherProps }) {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/svg/${name}.svg`
          )
        ).default;
      } catch (err) {
        console.log(`${name} icon does not exist: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...otherProps} />;
  }
  return null;
}

export default Icon;

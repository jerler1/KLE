import React, { useEffect, useState } from "react";
import "./CallForAction.scss";
import { partnersCFA, portfolioCFA, whoCFA } from "../../assets/index";

const CallForAction = ({
  alt,
  message,
  buttonMessage,
  onClick,
  pictureSource,
}) => {
  const [callForActionImage, setCallForActionImage] = useState(null);
  useEffect(() => {
    pictureSource === "portfolio"
      ? setCallForActionImage(portfolioCFA)
      : pictureSource === "partners"
      ? setCallForActionImage(partnersCFA)
      : pictureSource === "who"
      ? setCallForActionImage(whoCFA)
      : null;
  }, [pictureSource]);
  return (
    <section className="contactCFAContainer">
      <div className="CFAImage">
        <img src={callForActionImage} alt={alt} />
      </div>
      <div className="cfaTextWrapper">
        <div className="cfaText">
          <p>{message}</p>
          <Button className="button primaryButton" onClick={onClick}>
            {buttonMessage}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallForAction;

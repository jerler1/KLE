import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { email, phone } from "../../assets/index";
import Icon from "../../components/Icon/Icon";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.scss";

const Contact = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 800px)" });
  const {
    REACT_APP_USER_ID,
    REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID,
  } = process.env;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  init(REACT_APP_USER_ID);

  const toastifySuccess = () => {
    toast.success("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        email: data.email,
        phone: data.phone,
        time: data.time,
        message: data.message,
      };
      await emailjs
        .send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, templateParams)
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log("THERE IS AN ERROR", error);
        });
      reset();
      toastifySuccess();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <div className="contactContainer">
      <PageHeader
        message="Contact Us"
        absoluteURL="Contact-Whole"
        alignment="bottomAligned"
        gradientAlignment="gradientOverlayBottomRight"
      />
      <section className="contactSection">
        <div className="contactInformationWrapper">
          <div className="contactInformationContent">
            <p>
              Kinetic Lighting and Electric is based in Mill Valley, CA and
              works in Marin, SF and the East Bay.
            </p>
            <div className="contactMobileBackground">
              <div className="contactPhoneNumber">
                <div
                  className={
                    !isTabletOrMobile ? "desktopPhone" : "inactive absolute"
                  }
                >
                  <Icon name="phoneWhite" alt="phone" width="75" height="50" />
                  <p>415.569.7167</p>
                </div>
                <div
                  className={
                    isTabletOrMobile ? "mobilePhone" : "inactive absolute"
                  }
                >
                  <a
                    className="button secondaryButton"
                    href="tel:415-569-7167"
                    aria-label="Phone Link"
                  >
                    <span>
                      <img src={phone} alt="phone" />
                    </span>
                    Call Us
                  </a>
                  <p>415.569.7167</p>
                </div>
              </div>
              <div className="contactEmail">
                <div
                  className={
                    !isTabletOrMobile ? "desktopEmail" : "inactive absolute"
                  }
                >
                  <Icon name="emailWhite" alt="email" width="75" height="50" />
                  <p>hello@kineticelectricsf.com</p>
                </div>
                <div
                  className={
                    isTabletOrMobile ? "mobileEmail" : "inactive absolute"
                  }
                >
                  <a
                    className="button secondaryButton"
                    href="mailto:hello@kineticelectricsf.com"
                    aria-label="Email Link"
                  >
                    <span>
                      <img src={email} alt="email" />
                    </span>
                    Email Us
                  </a>
                  <p>hello@kineticelectricsf.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactFormWrapper">
          <div className="contactFormContent">
            <h3>Send us a message</h3>
            <form
              className="contactForm"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="emailInputWrapper">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="email@domain.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
                {errors.email && (
                  <span className="errorMessage">
                    Please enter a valid email address.
                  </span>
                )}
              </div>
              <div className="phoneInputWrapper">
                <label className="label">Phone</label>
                <input
                  className="input"
                  type="tel"
                  placeholder="optional"
                  {...register("phone")}
                />
              </div>
              <div className="timeInputWrapper">
                <label className="label">Best time to contact you</label>
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. After work 5pm."
                  {...register("time")}
                />
              </div>
              <div className="messageInputWrapper">
                <label className="label">Your Message</label>
                <textarea
                  className="input"
                  type="text"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="errorMessage">Please enter a message.</span>
                )}
              </div>
              <div className="buttonWrapper">
                <button className="button primaryButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;

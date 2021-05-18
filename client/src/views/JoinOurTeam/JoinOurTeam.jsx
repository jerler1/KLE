import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./JoinOurTeam.scss";

const JoinOurTeam = () => {
  const { REACT_APP_USER_ID, REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID } =
    process.env;
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
        name: data.name,
        email: data.email,
        phone: data.phone,
        time: data.time,
        message: data.message,
        resume: data.resume,
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
        message="Join Our Team"
        absoluteURL="Team-Whole"
        alignment="bottomAligned"
        gradientAlignment="gradientOverlayBottomRight"
      />
      <section className="contactSection">
        <div className="contactInformationWrapper">
          <div className="contactInformationContent">
            <p>We’re always looking for people to help us shine.</p>
            <p>
              Whether you’re a journeyman electrician or you’ve just graduated
              from school, if you have a desire to work hard, continue learning,
              and communicate openly, we want to work with you.{" "}
            </p>
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
              <div className="nameInputWrapper">
                <label className="label">Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="janey electricalio"
                  {...register("name", {
                    required: true,
                    // pattern: /^[a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?/,
                  })}
                />
                {errors.name && (
                  <span className="errorMessage">
                    Please enter a valid name.
                  </span>
                )}
              </div>
              <div className="emailInputWrapper">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="email@domain.com"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
              <div className="attachmentWrapper">
                <label className="label">Attach Resume</label>
                <input className="input" type="file" {...register("resume", { required: true })} />
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

export default JoinOurTeam;

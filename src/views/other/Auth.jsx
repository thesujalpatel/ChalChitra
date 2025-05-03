import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./../../assets/css/forms.css";
import { highLightField } from "../../assets/js/script.js";
import userService from "../../server/services/userServices.js";
import { motion as m } from "framer-motion";

function Authentication() {
  const navigate = useNavigate();
  useEffect(() => {
    highLightField();
  });
  const [form, setForm] = useState({});
  const [submitLable, setSubmitLabel] = useState("Submit");

  const UpdateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const phoneORemail = form.phoneORemail;

  //   if (phoneORemail === "") {
  //     toast.error("Please fill the fields");
  //     return;
  //   }
  //   if (phoneORemail.includes("@")) {
  //     await userService.sendEmail(phoneORemail);
  //   } else {
  //     await userService
  //       .verifyPhone(`+91${phoneORemail}`)
  //       .then((result) => {
  //         setVerify(result);
  //         toast.success(`OTP sent to\n+91-${phoneORemail}`);
  //         a(
  //           ".form-r-1",
  //           { x: "-200vw", y: "-50%" },
  //           { duration: 1, type: "spring" }
  //         );
  //         document.getElementById("otp").select();
  //         gsap.set(".form-r-2", { duration: 0, x: "150vw" });
  //         a(
  //           ".form-r-2",
  //           { x: "-50%", y: "-50%" },
  //           { duration: 1, type: "spring", stiffness: 100, damping: 13 }
  //         );
  //       })
  //       .catch((err) => {
  //         toast.error("Invalid Phone Number");
  //       });
  //   }
  // };

  // const handleSubmitOtp = (e) => {
  //   e.preventDefault();
  //   try {
  //     verify
  //       .confirm(form.otp)
  //       .then(async (result) => {
  //         toast.success("Logged In\nRedirecting...");
  //         const data = {
  //           phone: "+91" + form.phoneORemail,
  //           name: form.name,
  //         };
  //         await userService.addUser(data);
  //         setTimeout(() => {
  //           navigate("/home");
  //         }, 3000);
  //       })
  //       .catch((err) => {
  //         toast.error("Invalid Verification Code");
  //       });
  //   } catch (err) {
  //     toast.error("Invalid Phone Number");
  //   }
  // };
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setSubmitLabel("Loading...");

    const email = form.email;
    const password = form.password;
    if (email === "" || password === "") {
      toast.error("Please fill the fields");
      setSubmitLabel("Submit");
      return;
    }
    userService
      .emailPassword(email, password)
      .then(async () => {
        setTimeout(() => {
          navigate("/notes");
        }, 3000);
        const data = {
          email: form.email,
          name: form.name ? form.name : "GuestUser",
          password: form.password,
        };
        await userService.addUser(data);
      })
      .catch((err) => {
        toast.error("An error occurred while logging in. Please try again.");
        console.error(err);
      })
      .finally(() => {
        setSubmitLabel("Submit");
      });
  };
  return (
    <>
      <div className="universe">
        <div className="form-con form-email">
          <form onSubmit={handleSubmitEmail} className="form" id="signup">
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-user fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("name", e.target.value)}
                type="text"
                className="input"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-user fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("email", e.target.value)}
                type="text"
                className="input"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-lock fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("password", e.target.value)}
                type="password"
                className="input"
                id="password"
                placeholder="Password"
              />
            </div>
            <m.input
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              type="submit"
              id="submitRegister"
              value={submitLable}
            />
          </form>
          <div className="side-form">
            <div className="sf-con">
              <div className="sf-title">
                <i className="fa-solid fa-id-card fa-xl"></i>
                <h2>Verify</h2>
              </div>
              <div className="sfc">
                <p>Sign In/Up with your Email</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form-con form-r-1">
          <form onSubmit={handleSubmit} className="form" id="signup">
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-phone fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("phoneORemail", e.target.value)}
                type="text"
                className="input"
                id="phoneORemail"
                placeholder="Phone"
              />
            </div>
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-user fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("name", e.target.value)}
                type="text"
                className="input"
                id="name"
                placeholder="Name"
              />
            </div>
            <input type="submit" id="submitRegister" value="Submit" />
          </form>
          <div className="side-form">
            <div className="sf-con">
              <div className="sf-title">
                <i className="fa-solid fa-id-card fa-xl"></i>
                <h2>Verify</h2>
              </div>
              <div className="sfc">
                <p>Login with your phone number</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-con form-r-2">
          <form onSubmit={handleSubmitOtp} className="form" id="otpVerify">
            <div className="ii-con">
              <div className="ic">
                <i className="fa-solid fa-lock fa-lg"></i>
              </div>
              <input
                onChange={(e) => UpdateForm("otp", e.target.value)}
                type="number"
                className="input"
                id="otp"
                placeholder="Enter OTP"
              />
            </div>
            <input type="submit" value="Verify" />
          </form>
        </div>
        <div id="recaptcha-container"></div> */}
      </div>
    </>
  );
}
export default Authentication;

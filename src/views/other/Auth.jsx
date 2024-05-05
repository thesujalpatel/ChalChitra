import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { gsap } from "gsap";
import { animate as a } from "framer-motion";
import "./../../assets/css/forms.css";
import { highLightField } from "../../assets/js/script.js";
import userService from "../../server/services/userServices.js";

function Authentication() {
  const navigate = useNavigate();
  useEffect(() => {
    highLightField();
  });
  const [form, setForm] = useState({});
  const [verify, setVerify] = useState(null);

  const UpdateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneORemail = form.phoneORemail;

    if (phoneORemail === "") {
      toast.error("Please fill the fields");
      return;
    }
    if (phoneORemail.includes("@")) {
      await userService.sendEmail(phoneORemail);
    } else {
      await userService
        .verifyPhone(`+91${phoneORemail}`)
        .then((result) => {
          setVerify(result);
          toast.success(`OTP sent to\n+91-${phoneORemail}`);
          a(
            ".form-r-1",
            { x: "-200vw", y: "-50%" },
            { duration: 1, type: "spring" }
          );
          document.getElementById("otp").select();
          gsap.set(".form-r-2", { duration: 0, x: "150vw" });
          a(
            ".form-r-2",
            { x: "-50%", y: "-50%" },
            { duration: 1, type: "spring", stiffness: 100, damping: 13 }
          );
        })
        .catch((err) => {
          toast.error("Invalid Phone Number");
        });
    }
  };
  const handleSubmitOtp = (e) => {
    e.preventDefault();
    try {
      verify
        .confirm(form.otp)
        .then(async (result) => {
          toast.success("Logged In\nRedirecting...");
          const data = {
            phone: "+91" + form.phoneORemail,
            name: form.name,
          };
          await userService.addUser(data);
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        })
        .catch((err) => {
          toast.error("Invalid Verification Code");
        });
    } catch (err) {
      toast.error("Invalid Phone Number");
    }
  };
  return (
    <>
      <div className="universe">
        <div className="form-con form-r-1">
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
        <div id="recaptcha-container"></div>
      </div>
    </>
  );
}
export default Authentication;

// <div className="ii-con">
// <div className="ic">
//   <i className="fa-solid fa-envelope fa-lg"></i>
// </div>
// <input
//   onChange={(e) => setEmail(e.target.value)}
//   type="text"
//   className="input"
//   name="email"
//   id="email"
//   placeholder="Email"
// />
// </div>
// <div className="ii-con">
// <div className="ic">
//   <i className="fa-solid fa-phone fa-lg"></i>
// </div>
// <input
//   onChange={(e) => setPhone1(e.target.value)}
//   type="number"
//   className="input"
//   name="phone1"
//   id="phone"
//   placeholder="Phone"
// />
// <input
//   onChange={(e) => setPhone2(e.target.value)}
//   type="number"
//   className="input"
//   name="phone2"
//   id="phone"
//   placeholder="Phone"
// />
// </div>
// <div className="ii-con">
// <div className="ic">
//   <i className="fa-solid fa-key fa-lg"></i>
// </div>
// <input
//   onChange={(e) => setPassword(e.target.value)}
//   type="password"
//   className="input"
//   name="password"
//   id="password"
//   placeholder="Password"
// />
// <input
//   onChange={(e) => setVpassword(e.target.value)}
//   type="password"
//   className="input"
//   name="vpassword"
//   id="password"
//   placeholder="Re-Write Password"
// />
// </div>
// <div className="ii-con">
// <div className="ic">
//   <i className="fa-solid fa-quote-left fa-lg"></i>
// </div>
// <textarea
//   onChange={(e) => setDescription(e.target.value)}
//   name="description"
//   className="input description"
//   id="description"
//   placeholder="Description"
// ></textarea>
// </div>
// <div className="ii-con">
//   <div className="ic">
//     <i className="fa-solid fa-person-circle-check fa-lg"></i>
//   </div>
//   <select name="role" className="input">
//     <option selected disabled hidden>
//       Select role
//     </option>
//     <option value="judge">Judge</option>
//     <option value="lawyer">Lawyer</option>
//     <option value="user">User</option>
//   </select>
// </div>
// <div className="ii-con">
//   <div className="ic">
//     <i className="fa-regular fa-id-badge fa-lg"></i>
//   </div>
//   <input
//     type="file"
//     className="input"
//     name="pfp"
//     id="pfp"
//     accept="image/*"
//   />
// </div>

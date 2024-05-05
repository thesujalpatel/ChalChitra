import React from "react";
import "./../../assets/css/footer.css";
import { Link } from "react-router-dom";
function FixFooter() {
  return (
    <div className="footer-fix">
      <div className="footer-fix-section">
        <div className="footer-fix-sub-title">MADE BY</div>
        <div className="footer-fix-title ">Sujal Patel</div>
        <div className="social">
          <Link
            className="so-op"
            to="https://www.instagram.com/_thesujalpatel_/"
            target="_blank"
          >
            <div className="icon-con">
              <i class="fa-brands fa-instagram"></i>
            </div>
            Instagram
          </Link>
          <Link
            className="so-op"
            to="https://www.linkedin.com/in/sujal-patel-227b3829a/"
            target="_blank"
          >
            <div className="icon-con">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            Linkedin
          </Link>
          <Link
            className="so-op"
            to="https://github.com/thesujalpatel"
            target="_blank"
          >
            <div className="icon-con">
              <i class="fa-brands fa-github"></i>
            </div>
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
export default FixFooter;

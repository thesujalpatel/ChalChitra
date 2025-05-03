import React from "react";
import "./../../assets/css/footer.css";
import { Link } from "react-router-dom";
function FixFooter() {
  return (
    <div className="footer-fix">
      <div className="footer-fix-section">
        <Link
          to="https://thesujalpatel.github.io"
          target="_blank"
          className="footer-fix-sub-title"
        >
          Made with <i className="fa-solid fa-heart love"></i> by Sujal</Link>
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

        <div className="copyright">
          &copy; {new Date().getFullYear()} Sujal Patel. All rights reserved.
        </div>
      </div>
    </div>
  );
}
export default FixFooter;

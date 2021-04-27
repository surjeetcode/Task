import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <>
    <hr/>
      <div className="footer">
        <div className="d-flex align-items-center text-center">
          <div className="footer-text">Copyright © 2019</div>
          <div className="footer-text">HodlInfo.com</div>
          <div className="footer-text">
            Developed By{" "}
            <a
            className="footer_link"
              rel="nofollow"
              href="https://www.quadbtech.com"
              target="_blank"
              
            >
              {" "}
              QuadBTech
            </a>
          </div>
          <div className="footer-text pointer">
            <a href="mailto:support@hodlinfo.com" className="footer-text-link">
              Support
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

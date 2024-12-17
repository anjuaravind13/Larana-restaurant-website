import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-top-area">
        <div className="footer-top-area-col-1">
          <h5>CONTACT US</h5>
          <p>
            T. <a href="tel:123440567899">+12 344 0567899</a> <br />
            M. <a href="mailto:larana@example.com">fidalgo@example.com</a>
          </p>
        </div>
        <div className="footer-top-area-col-2">
          <h5>ADDRESS</h5>
          <p>
            "1224, East Hill Kozhikode"
            <br />
            "673005"
          </p>
        </div>
        <div className="footer-top-area-col-3">
          <h5>OPENING HOURS</h5>
          <p>
            Everyday : From 12.30 To 23.00
            <br />
            Kitchen Closes At 22.00
          </p>
        </div>
      </div>

      <div className="footer-bottom-area">

        <div className="footer-section-1">
          <img src="./logo-larana.png" alt="" />
        </div>

        <div className="footer-section-2">
          <div className="footer-social-media">
            <span class="material-icons-1">
              <a href="https://www.pinterest.com/"> PINTEREST</a>
            </span>
            <span class="material-icons-2">
              <a href="https://www.facebook.com/"> FACEBOOK</a>
            </span>
            <span class="material-icons-3">
              <a href="https://www.instagram.com/">INSTAGRAM</a>
            </span>
          </div>
          <div className="footer-copyright">
            <p>© 2024 ALA, ALL RIGHTS RESERVED</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Footer;

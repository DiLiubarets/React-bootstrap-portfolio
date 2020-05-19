import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a
        href="https://www.linkedin.com/in/dina-liubarets-4848251a6/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/dinabydaily/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://github.com/DiLiubarets" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/di_liubarets/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

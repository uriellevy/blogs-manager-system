import React from "react";
import Logo from "../img/logo.png";
import { DICT } from "../consts/consts";

const Footer = () => {
  const {FOOTER_FIRST, FOOTER_SECOND} = DICT;
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        {FOOTER_FIRST}<b>{FOOTER_SECOND}</b>.
      </span>
    </footer>
  );
};

export default Footer;
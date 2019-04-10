import React from 'react';

import '../App/App.css';

const Footer = ({fixed}) => {
  return (
    <footer className={fixed ? "footer-fixed" : "footer"}>
      <span className="footer__legal"> &copy;Send-it courier services 2019</span>
    </footer>
  );
};

export default Footer;

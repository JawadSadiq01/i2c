import { Logo } from "../../assets/images";
import "./Footer.css";
import ContactBtn from "../contactBtn/ContactBtn";
const Footer = () => {
  return (
   <div className="footer">
    <div className="footerMain">
      <div className="footerLogo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footerLinks">
        <ul>
          <li>FAQs</li>
          <li>Privacy Policy</li>
          <li>Others</li>
          <li><ContactBtn /></li>
        </ul>
      </div>
    </div>
    <p className="copyright">Copyright © 2023 i2c inc. All rights reserved.</p>
   </div>
  );
};

export default Footer;

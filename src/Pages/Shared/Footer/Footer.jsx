import Logo from "../../../assets/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 pb-4 ">
        <div>
          <div className="flex items-center">
            <img className="w-24" src={Logo} alt="" />
            <h2 className="text-4xl font-medium">FLLS</h2>
          </div>
          <p>
            Foreign Language Learning School
            <br />
            Teaching language skill since 2007.
          </p>
        </div>
        <div>
          <span className="footer-title text-xl">Contact Info</span>
          <div className="flex flex-col gap-2">
            <p>Phone: 0088-3674-3972</p>
            <p>Phone: 0088-5599-4532</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div>
          <span className="footer-title text-xl">Social Links</span>
          <div className="flex items-center gap-3 text-md">
            <FaFacebook></FaFacebook> Facebook
          </div>
          <div className="flex items-center gap-3 text-md">
            <FaTwitter></FaTwitter> Twitter
          </div>
          <div className="flex items-center gap-3 text-md">
            <FaInstagramSquare></FaInstagramSquare> Instagram
          </div>
          <div className="flex items-center gap-3 text-md">
            <FaLinkedin></FaLinkedin> Linkedin
          </div>
        </div>
        <div>
          <span className="footer-title text-xl">Address</span>
          <p>
            123 Main Street <br />
            Anytown, USA 12345
          </p>
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center pb-2">
        <p className="text-center m-0 text-xl">
          <small>© copyright of my design.</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;

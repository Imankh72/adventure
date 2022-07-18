import { Link } from "react-router-dom";
import {
  FaTypo3,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const FooterIcons = () => {
  return (
    <section className="flex flex-col items-center gap-12">
      <div className="w-[150px] flex flex-col text-left gap-4">
        <Link to="/" className="flex gap-1 text-3xl">
          TRVL <FaTypo3 />
        </Link>
        <span className="">TRVL &copy; 2022</span>
      </div>
      <div className="flex items-center justify-center gap-16 text-3xl">
        <FaFacebookF className="social-links" />
        <FaInstagram className="social-links" />
        <FaYoutube className="social-links" />
        <FaTwitter className="social-links" />
        <FaLinkedin className="social-links" />
      </div>
    </section>
  );
};

export default FooterIcons;

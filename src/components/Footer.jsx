import FooterForm from "./FooterForm";
import FooterIcons from "./FooterIcons";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-gray-50 flex flex-col justify-center items-center py-16 px-6 text-center gap-16">
      <FooterForm />
      <FooterLinks />
      <FooterIcons />
    </footer>
  );
};

export default Footer;

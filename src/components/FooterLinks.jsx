import { useEffect, useState } from "react";
import { footerLinksData } from "../data/footerLinksData";

const FooterLinks = () => {
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    setFooterLinks(footerLinksData);
  }, [footerLinks]);

  return (
    <section className="w-[80%] flex justify-center flex-wrap gap-20">
      {footerLinks.map(({ id, title, links }) => (
        <div key={id} className="text-left flex-1 flex flex-col">
          <h6 className="font-bold text-2xl mb-6">{title}</h6>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="font-bold my-1">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default FooterLinks;

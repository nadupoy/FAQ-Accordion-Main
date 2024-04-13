import { links } from "../constants";

const Footer = () => {
  return (
    <footer className="text-center text-xs mt-4">
      <p className="text-grayish-purple">
        Challenge by{" "}
        <a href={links.frontendMentor} target="_blank" className="text-dark-purple no-underline hover:cursor-pointer visited:text-dark-purple visited:no-underline">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href={links.gitHub} target="_blank" className="text-dark-purple no-underline hover:cursor-pointer visited:text-dark-purple visited:no-underline">
          g_sampao
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;

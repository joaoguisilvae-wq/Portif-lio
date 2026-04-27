import type { Translation } from "../types";

interface FooterProps {
  copy: Translation;
}

const Footer = ({ copy }: FooterProps) => {
  return (
    <div className="text-center text-sm text-primary py-4 font-inter fixed bottom-0 w-full backdrop-blur-md z-50 flex justify-around items-center px-4 h-16 border-t border-primary/13 font-jetbrains">
      <p>{copy.footerTagline}</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/joaoguisilvae-wq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors duration-200"
          aria-label={copy.footerGithub}
        >
          {copy.footerGithub}
        </a>
        <a
          href="https://www.instagram.com/joaogui.silvaeugenio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary transition-colors duration-200"
          aria-label={copy.footerInsta}
        >
          {copy.footerInsta}
        </a>
        <a
          href="mailto:joaogui.silvae@gmail.com"
          className="text-primary transition-colors duration-200"
          aria-label={copy.footerEmail}
        >
          {copy.footerEmail}
        </a>
      </div>
    </div>
  );
};

export default Footer;

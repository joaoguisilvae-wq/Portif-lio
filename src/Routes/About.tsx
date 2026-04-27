import type { Dispatch, SetStateAction } from "react";

type Locale = "pt" | "es" | "en";

interface AboutProps {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  copy: Record<string, string>;
}

const About = ({
  locale: _locale,
  setLocale: _setLocale,
  copy: _copy,
}: AboutProps): React.ReactNode => {
  return <div>About</div>;
};

export default About;

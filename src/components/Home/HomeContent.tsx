import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Translation } from "../../types";

interface HomeProps {
  copy: Translation;
}

const HomeContent = ({ copy }: HomeProps) => {
  const now = new Date();

  const day = format(now, "dd");
  const month = format(now, "MM");
  const year = format(now, "yyyy");
  const hours = format(now, "HH:mm");

  function formatNumberToRoman(num: number): string {
    const romanNumerals: { [key: number]: string } = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "LX",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      1000: "M",
      2000: "MM",
    };

    const digits = num.toString().split("").map(Number);
    let result = "";

    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i] * Math.pow(10, digits.length - 1 - i);
      if (digit > 0) {
        result += romanNumerals[digit] || "";
      }
    }

    return result;
  }

  const formatedDay = formatNumberToRoman(parseInt(day));
  const formatedMonth = formatNumberToRoman(parseInt(month));
  const formatedYear = formatNumberToRoman(parseInt(year));

  const dateAndHour = `${formatedDay}/${formatedMonth}/${formatedYear} - ${hours}`;

  return (
    <>
      <div className="flex text-sm justify-around mt-20">
        <span>{copy.topMeta}</span> <span>{dateAndHour}</span>
      </div>
      <div className="flex justify-around mt-6 text-sm">
        <div className="items-center justify-center gap-3 mt-6 pl-10">
          <p className="text-primary pl-7">{copy.kicker}</p>
          <div className="text-9xl font-cormorant">
            <h1 className="text-primary text-glow">{copy.titleStart}</h1>
            <h2>{copy.titleEnd}</h2>
          </div>
          <p>{copy.descriptionStart}</p>
          <p>{copy.descriptionEnd}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 mt-10 text-5xl font-cormorant">
          <Link
            to="/projects"
            className="flex items-center gap-4 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">1</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkProjects}
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-4 mr-24 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">2</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkAbout}
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-4 transition-all duration-300 hover:text-primary"
          >
            <span className="text-primary text-base">3</span>
            <span className="w-6 h-[1px] bg-foreground/20"></span>
            {copy.linkContact}
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeContent;

import { format } from "date-fns";

const DateComponent = () => {
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
    <div>
      <span className="font-sans">{dateAndHour}</span>
    </div>
  );
};

export default DateComponent;

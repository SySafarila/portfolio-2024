import { useEffect, useState } from "react";
import months from "./months";

type GenerateDateType = {
  raw_date: number;
};

const GenerateDate = (value: GenerateDateType): string => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const raw = new Date(value.raw_date);
    const date = raw.getDate();
    const month = raw.getMonth();
    const year = raw.getFullYear();
    setDate(`${date} ${months[month]} ${year}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return date;
};

export default GenerateDate;

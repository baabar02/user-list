// import { format } from "date-fns";

import { compareAsc, format, formatDate } from "date-fns";

const result = format(Date(), "yyyy MMMM dd");

console.log(result);

const today = Date();

const addMin = format(today + 2);
console.log(addMin);

const dates = [
  new Date(1995, 6, 2),
  new Date(2000, 5, 30),
  new Date(2025, 4, 2),
];
console.log(dates);

dates.sort(compareAsc);

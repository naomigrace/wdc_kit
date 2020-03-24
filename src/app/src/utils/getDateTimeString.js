import { format } from "date-fns"

export default (date, time) =>
  `${format(date, "eeee, LLLL Lo")} ${
    time ? `| ${time}` : ``
  }`

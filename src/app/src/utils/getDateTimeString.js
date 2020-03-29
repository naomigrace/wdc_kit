import { format } from "date-fns"

export default (date, time) =>
  `${format(date, "EEEE MM/dd")}${time ? `, ${time}` : ``}`

import { format } from "date-fns"

export default (date, time) => {
  try {
    return `${format(date, "EEEE MM/dd")}${time ? `, ${time}` : ``}`
  } catch (e) {
    console.error(e)
  }
}
  

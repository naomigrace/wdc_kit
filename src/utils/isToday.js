const isToday = someDate => {
  const today = new Date()

  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  )
}

export const isTomorrow = someDate => {
  const today = new Date()

  return (
    someDate.getDate() == today.getDate() + 1 &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  )
}


export default isToday

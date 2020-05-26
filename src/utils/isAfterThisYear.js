const isAfterThisYear = someDate => {
  const today = new Date()
  return someDate.getFullYear() > today.getFullYear()
}

export default isAfterThisYear

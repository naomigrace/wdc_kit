const determineTitleAndSub = (title, title2, description) => {
  let determineTitle, determineSubTitle

  if (title && !title2) {
    determineTitle = title
    determineSubTitle = description || null
  } else if (!title && title2) {
    determineTitle = title2
    determineSubTitle = description || null
  } else if (title && title2) {
    determineTitle = title
    determineSubTitle = title2
  }

  return { determineTitle, determineSubTitle }
}

export default determineTitleAndSub
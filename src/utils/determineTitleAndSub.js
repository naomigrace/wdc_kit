const determineTitleAndSub = (title, title2) => {
  let determinedTitle, determinedSubTitle;

  //  if there's only one of title2 and description, it should go in the space below
  if (title && !title2) {
    determinedTitle = title;
    determinedSubTitle = null;
  } else if (!title && title2) {
    determinedTitle = title2;
    determinedSubTitle = null;
  } else if (title && title2){
    determinedTitle = title;
    determinedSubTitle = title2;
  }

  // capitalize the first letter of the subtitle
  determinedSubTitle =
    determinedSubTitle &&
    determinedSubTitle.charAt(0).toUpperCase() + determinedSubTitle.slice(1);

  return { determinedTitle, determinedSubTitle };
};

export default determineTitleAndSub;

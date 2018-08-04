export const getUserFromFlickrString = string => {
  if(!string) return undefined
  return string.substring(
    string.lastIndexOf('("') + 2,
    string.lastIndexOf('")')
  );
};

export const getCaptionFromFlickrString = string => {
  if(!string) return undefined
  const firstParagraph = string.match(/<p>(.*?)<\/p>/g)[2]
  if(!firstParagraph) return undefined
  return firstParagraph.replace(/<\/?[^>]+(>|$)/g, "");
}

export const getLargeImageFromFlickrM = m => {
  if(!m) return undefined
  return m.replace("_m.", "_h.")
}

export const getTagsFromFlickrString = string => {
  if(!string) return undefined
  return string.split(" ")
}

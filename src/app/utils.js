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

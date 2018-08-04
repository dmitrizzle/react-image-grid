import { getUserFromFlickrString, getCaptionFromFlickrString } from "./utils";

test("Returns user name from Flickr's HTML", () => {
  expect(getUserFromFlickrString('nobody@flickr.com ("chichic_")')).toMatch(
    "chichic_"
  );
});
test("Returns caption from Flickr's HTML", () => {
  expect(
    getCaptionFromFlickrString(
      ' <p><a href="https://www.flickr.com/people/chichic_/">chichic_</a> posted a photo:</p> <p><a href="https://www.flickr.com/photos/chichic_/24554397512/" title=""><img src="https://farm2.staticflickr.com/1464/24554397512_5b05702fa0_m.jpg" width="240" height="159" alt="" /></a></p> <p>Camera: Contax Aria<br /> Film: Lomography CINE200 Tungsten</p>'
    )
  ).toMatch("Camera: Contax Aria Film: Lomography CINE200 Tungsten");
});

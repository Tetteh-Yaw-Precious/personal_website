const size = {
  mobileS: "20rem",
  mobileM: "23rem",
  mobileL: "26.5625rem",
  tablet: "48rem",
  laptop: "64rem",
  laptopL: "90rem",
  desktop: "160rem",
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

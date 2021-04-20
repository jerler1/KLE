function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const portfolioPictures = {
  elizabeth: [
    ...importAll(
      require.context("./Elizabeth-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  ],
  fiveHundredAndSixthStreet: [
    ...importAll(
      require.context("./506th-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  ],
  ellsworth: [
    ...importAll(
      require.context("./Ellsworth-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  ],
  sanAnselmo: [
    ...importAll(require.context("./San-Anselmo", false, /\.(png|jpe?g|svg)$/)),
  ],
  shasta: [
    ...importAll(require.context("./Shasta", false, /\.(png|jpe?g|svg)$/)),
  ],
};

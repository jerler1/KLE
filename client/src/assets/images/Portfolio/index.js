export const portfolioPictures = {
  elizabeth: [
    ...importAll(
      require.context("./Elizabeth-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  ],
  fiveHundredAndSixthStreet: [
    ...importAll(require.context("./506-Street", false, /\.(png|jpe?g|svg)$/)),
  ],
  ellsworth: [
    ...importAll(require.context("./Ellsworth", false, /\.(png|jpe?g|svg)$/)),
  ],
  sanAnselmo: [
    ...importAll(require.context("./San-Anselmo", false, /\.(png|jpe?g|svg)$/)),
  ],
  shasta: [
    ...importAll(require.context("./Shasta", false, /\.(png|jpe?g|svg)$/)),
  ],
};

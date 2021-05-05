function importAll(r) {
  return r.keys().map(r);
}

export const portfolioPictures = [
  {
    key: "Elizabeth",
    name: "Elizabeth Street",
    shortDescription: "Short",
    mainPicture: require("./Elizabeth-Street/Elizabeth-1.jpg").default,
    pictures: importAll(
      require.context("./Elizabeth-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "506th",
    name: "506th Street",
    shortDescription: "Short",
    mainPicture: require("./576th-Street/main.jpg").default,
    pictures: importAll(
      require.context("./576th-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Ellsworth",
    name: "Ellsworth Street",
    shortDescription: "Short",
    mainPicture: require("./Ellsworth-Street/EllsworthDusksetX.jpg").default,
    pictures: importAll(
      require.context("./Ellsworth-Street", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Anselmo",
    name: "San Anselmo",
    shortDescription: "Short",
    mainPicture: require("./San-Anselmo/Raymond_Kitch.png").default,
    pictures: importAll(
      require.context("./San-Anselmo", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Shasta",
    name: "Shasta",
    shortDescription: "Short",
    mainPicture: require("./Shasta/Bocci_HexTile.jpeg").default,
    pictures: importAll(
      require.context("./Shasta", false, /\.(png|jpe?g|svg)$/)
    ),
  },
];

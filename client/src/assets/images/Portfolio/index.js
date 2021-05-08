function importAll(r) {
  return r.keys().map(r);
}

export const portfolioPictures = [
  {
    key: "Noe",
    name: "Noe Valley",
    mainPicture: require("./Noe-Valley/Elizabeth-1.jpg").default,
    pictures: importAll(
      require.context("./Noe-Valley", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Diamond",
    name: "Diamond Heights",
    mainPicture: require("./Diamond-Heights/main.jpg").default,
    pictures: importAll(
      require.context("./Diamond-Heights", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Bernal",
    name: "Bernal Heights",
    mainPicture: require("./Bernal-Heights/EllsworthDusksetX.jpg").default,
    pictures: importAll(
      require.context("./Bernal-Heights", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Anselmo",
    name: "San Anselmo",
    mainPicture: require("./San-Anselmo/San_Anselmo_Kitchen_Main.png").default,
    pictures: importAll(
      require.context("./San-Anselmo", false, /\.(png|jpe?g|svg)$/)
    ),
  },
  {
    key: "Berkeley",
    name: "Berkeley",
    mainPicture: require("./Berkeley/Bocci_HexTile.jpeg").default,
    pictures: importAll(
      require.context("./Berkeley", false, /\.(png|jpe?g|svg)$/)
    ),
  },
];

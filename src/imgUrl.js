// Kuva-URL-apuri: Contentful-osoitteet (alkavat "//") saavat https:-prefiksin
// ja mahdolliset muunnosparametrit; paikalliset Vite-importit palautetaan
// sellaisenaan (parametrit eivät päde niihin).
export const imgUrl = (url, params = "") =>
  url?.startsWith("//") ? `https:${url}${params}` : url;

export default imgUrl;

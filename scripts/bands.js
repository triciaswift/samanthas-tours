import { getBands } from "./database.js"

export const BandList = () => {
	// Invokes the band objects from database
  const bands = getBands();

  // Puts the band list in alphabetical order
  bands.sort(function (a,b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  })

  // HTML string of Band List
  let bandHTML = "<ul>";

  for (const band of bands) {
    bandHTML += `
    <li data-type="band"
        data-name="${band.name}"
    >${band.name}</li>`
  }

  bandHTML += "</ul>"

  return bandHTML;
}
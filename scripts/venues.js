import { getVenues } from "./database.js"

export const VenueList = () => {
	// Invokes the venue objects from database
  const venues = getVenues();

  // Puts the venue list in alphabetical order
  venues.sort(function (a,b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  })

  // HTML string of Venue List
  let venueHTML = "<ul>";

  for (const venue of venues) {
    venueHTML += `
    <li data-type="venue"
        data-name="${venue.name}"
    >${venue.name}</li>`
  }

  venueHTML += "</ul>"

  return venueHTML;
}

// Event Listener for Venue Items
// document.addEventListener("click", (clickEvent) => {
//   const itemClicked = clickEvent.target;

//   if (itemClicked === "venue") {
//     const venueName = itemClicked.dataset.name
//     window.alert(`${venueName} booked ${}`)
//   }
// })
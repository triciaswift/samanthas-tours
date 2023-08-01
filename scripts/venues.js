import { getVenues, getBands, getBookings } from "./database.js";

export const VenueList = () => {
  // Invokes the venue objects from database
  const venues = getVenues();

  // Puts the venue list in alphabetical order
  venues.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  // HTML string of Venue List
  let venueHTML = "<ul>";

  for (const venue of venues) {
    venueHTML += `
    <li data-type="venue"
        data-name="${venue.name}"
        data-id="${venue.id}"
    >${venue.name}</li>`;
  }

  venueHTML += "</ul>";

  return venueHTML;
};

// Event Listener for Venue Items
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "venue") {
    const venueName = itemClicked.dataset.name;
    const venueId = itemClicked.dataset.id;
    let bandName = "";
    // match venue's id to booking's venueId
    const bookings = getBookings();
    const bands = getBands();
    for (const booking of bookings) {
      if (parseInt(venueId) === booking.venueId) {
        // match thr booking's bandId to the band's id
        for (const band of bands) {
          if (booking.bandId === band.id) {
            bandName += `${band.name}\n`;
          }
        }
      }
    }
    window.alert(`${venueName} booked:\n\n${bandName}`);
  }
});

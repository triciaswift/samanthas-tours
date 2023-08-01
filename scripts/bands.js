import { getBands, getBookings, getVenues } from "./database.js";

export const BandList = () => {
  // Invokes the band objects from database
  const bands = getBands();

  // Puts the band list in alphabetical order
  bands.sort(function (a, b) {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  // HTML string of Band List
  let bandHTML = "<ul>";

  for (const band of bands) {
    bandHTML += `
    <li data-type="band"
        data-name="${band.name}"
        data-id="${band.id}"
    >${band.name}</li>`;
  }

  bandHTML += "</ul>";

  return bandHTML;
};

// Event Listener for Band Items
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "band") {
    const bandName = itemClicked.dataset.name;
    const bandId = itemClicked.dataset.id;
    let venueName = "";
    // match band's id to booking's bandId
    const bookings = getBookings();
    const venues = getVenues();
    for (const booking of bookings) {
      if (parseInt(bandId) === booking.bandId) {
        // match the booking's venueId to the venue's id
        for (const venue of venues) {
          if (booking.venueId === venue.id) {
            venueName += `${venue.name}\n`;
          }
        }
      }
    }
    window.alert(`${bandName} is playing at:\n\n${venueName}`);
  }
});

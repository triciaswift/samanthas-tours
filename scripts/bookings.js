import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();

// Function whose responsibility it is to find the band for the booking
export const findBand = (booking, allBands) => {
  let bookingBand = null;

  for (const band of allBands) {
    if (band.id === booking.bandId) {
      bookingBand = band;
    }
  }
  return bookingBand;
};

// Function whose responsibility it is to find the venue for the booking
export const findVenue = (booking, allVenues) => {
  let bookingVenue = null;

  for (const venue of allVenues) {
    if (venue.id === booking.venueId) {
      bookingVenue = venue;
    }
  }
  return bookingVenue;
};

export const Bookings = () => {
  // HTML string of Bookings
  let bookingHTML = "<ul>";

  for (const booking of bookings) {
    const band = findBand(booking, bands);
    const venue = findVenue(booking, venues);

    bookingHTML += `
   <li data-type="booking"
      data-bandId="${booking.bandId}"
      >${band.name} are playing at The ${venue.name} on ${new Date(
      booking.date
    ).toLocaleDateString()}</li>`;
  }

  bookingHTML += "</ul>";

  return bookingHTML;
};

// Event Listener for Bookings List
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "booking") {
    const bandId = itemClicked.dataset.bandid;
    let message = "";
    for (const band of bands) {
      if (parseInt(bandId) === band.id) {
        message = `${band.name}\n${band.genre}\nFormed in ${band.year}\n${band.members} band members`;
      }
    }
    window.alert(message);
  }
});

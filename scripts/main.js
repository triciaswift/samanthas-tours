import { VenueList } from "./venues.js";
import { BandList } from "./bands.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<article class="bookings">
  <h2>Bookings</h2>
</article>

<article class="details">
  <section class="detail--column list details__venues">
    <h2>Venues</h2>
    ${VenueList()}
  </section>
  <section class="detail--column list details__bands">
    <h2>Bands</h2>
    ${BandList()}
  </section>
</article>`;

mainContainer.innerHTML = applicationHTML;
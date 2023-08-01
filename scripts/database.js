const database = {
  venues: [
    {
      id: 1,
      name: "Garden Gala",
      address: "123 Blossom Lane",
      sqFootage: 2000,
      maxOccupancy: 100
    },
    {
      id: 2,
      name: "Cosmic Circus",
      address: "456 Star Avenue",
      sqFootage: 1500,
      maxOccupancy: 80
    },
    {
      id: 3,
      name: "Pirate's Paradise",
      address: "789 Treasure Island",
      sqFootage: 3000,
      maxOccupancy: 150
    },
    {
      id: 4,
      name: "Enchanted Meadows",
      address: "101 Magic Lane",
      sqFootage: 1800,
      maxOccupancy: 90
    },
    {
      id: 5,
      name: "Arcade Mania",
      address: "222 Game Street",
      sqFootage: 2500,
      maxOccupancy: 120
    }
  ],
  bands: [
    {
      id: 1,
      name: "Electric Storm",
      members: 4,
      genre: "Rock",
      year: 2005
    },
    {
      id: 2,
      name: "Funky Fusion",
      members: 6,
      genre: "Funk",
      year: 2010
    },
    {
      id: 3,
      name: "Galactic Groove",
      members: 5,
      genre: "Disco",
      year: 2008
    },
    {
      id: 4,
      name: "Jazztastic",
      members: 3,
      genre: "Jazz",
      year: 2015
    },
    {
      id: 5,
      name: "Rhythmic Rebels",
      members: 7,
      genre: "Hip Hop",
      year: 2012
    },
    {
      id: 6,
      name: "Soul Serenade",
      members: 4,
      genre: "Soul",
      year: 2003
    },
    {
      id: 7,
      name: "Tropical Beats",
      members: 5,
      genre: "Reggae",
      year: 2011
    },
    {
      id: 8,
      name: "Whimsical Wanderers",
      members: 3,
      genre: "Indie",
      year: 2018
    }
  ],
  bookings: [
    {
      id: 1,
      bandId: 1,
      venueId: 1,
      date: "08/05/23"
    },
    {
      id: 2,
      bandId: 2,
      venueId: 1,
      date: "08/05/23"
    },
    {
      id: 3,
      bandId: 3,
      venueId: 2,
      date: "08/05/23"
    },
    {
      id: 4,
      bandId: 1,
      venueId: 2,
      date: "08/05/23"
    },
    {
      id: 5,
      bandId: 2,
      venueId: 3,
      date: "08/05/23"
    },
    {
      id: 6,
      bandId: 3,
      venueId: 3,
      date: "08/05/23"
    },
    {
      id: 7,
      bandId: 4,
      venueId: 4,
      date: "08/14/23"
    },
    {
      id: 8,
      bandId: 5,
      venueId: 5,
      date: "08/14/23"
    },
    {
      id: 9,
      bandId: 6,
      venueId: 1,
      date: "08/14/23"
    },
    {
      id: 10,
      bandId: 4,
      venueId: 1, 
      date: "08/14/23"
    },
    {
      id: 11,
      bandId: 5,
      venueId: 4,
      date: "08/14/23"
    },
    {
      id: 12,
      bandId: 6,
      venueId: 5,
      date: "08/22/23"
    },
    {
      id: 13,
      bandId: 7,
      venueId: 4,
      date: "08/22/23"
    },
    {
      id: 14,
      bandId: 8,
      venueId: 5,
      date: "08/30/23"
    },
    {
      id: 15,
      bandId: 7,
      venueId: 2,
      date: "08/30/23"
    },
    {
      id: 16,
      bandId: 8,
      venueId: 3,
      date: "09/08/23"
    },
  ]
}

export const getVenues = () => {
  return structuredClone(database.venues);
}

export const getBands = () => {
  return structuredClone(database.bands);
}

export const getBookings = () => {
  return structuredClone(database.bookings);
}
// ---------------------------------------------------------------------------
// LOCAL TRACK DATABASE
// Replaces the old RapidAPI / Spotify audio-features calls.
//
// NOTE: These values are approximations of Spotify's audio features (the
// real endpoint is no longer available). Tweak any number you like - every
// chart in the app reads from this one object.
//
// Row format:
//   [title, artist, year, danceability, energy, acousticness,
//    instrumentalness, liveness, speechiness, valence, tempo, loudness, key, mode]
// ---------------------------------------------------------------------------

const rows = {
  // ---- Taylor Swift ----
  "1vrd6UOGamcKNGnSHJQlSt": ["Love Story", "Taylor Swift", 2008, 0.617, 0.741, 0.131, 0, 0.083, 0.031, 0.307, 119, -3.9, 2, 1],
  "5sdQOyqq2IDhvmx2lHOpwd": ["You Belong With Me", "Taylor Swift", 2009, 0.687, 0.771, 0.164, 0, 0.112, 0.039, 0.444, 130, -4.3, 6, 1],
  "0cqRj7pUJDkTCEsJkx8snD": ["Shake It Off", "Taylor Swift", 2014, 0.647, 0.8, 0.065, 0, 0.334, 0.165, 0.942, 160, -5.4, 7, 1],
  "1p80LdxRV74UKvL8gnD7ky": ["Blank Space", "Taylor Swift", 2014, 0.76, 0.703, 0.103, 0, 0.091, 0.054, 0.57, 96, -5.4, 5, 1],
  "0V3wPSX9ygBnCm8psDIegu": ["Anti-Hero", "Taylor Swift", 2022, 0.637, 0.643, 0.1, 0.0002, 0.192, 0.052, 0.533, 97, -6.6, 4, 1],

  // ---- Ed Sheeran ----
  "1VdZ0vKfR5jneCmWIUAMxK": ["The A Team", "Ed Sheeran", 2011, 0.642, 0.323, 0.677, 0, 0.091, 0.039, 0.289, 85, -9.0, 9, 1],
  "5ubHAQtKuFfiG4FXfLP804": ["Lego House", "Ed Sheeran", 2011, 0.608, 0.711, 0.3, 0, 0.106, 0.037, 0.463, 154, -6.2, 5, 1],
  "34gCuhDGsG4bRPIf9bb02f": ["Thinking Out Loud", "Ed Sheeran", 2014, 0.781, 0.445, 0.474, 0, 0.184, 0.03, 0.591, 79, -6.1, 2, 1],
  "7qiZfU4dY1lWllzX7mPBI3": ["Shape of You", "Ed Sheeran", 2017, 0.825, 0.652, 0.581, 0, 0.093, 0.08, 0.931, 96, -3.2, 1, 0],
  "6PQ88X9TkUIAUIZJHW2upE": ["Bad Habits", "Ed Sheeran", 2021, 0.807, 0.893, 0.045, 0, 0.366, 0.035, 0.537, 126, -3.7, 11, 0],

  // ---- Imagine Dragons ----
  "62yJjFtgkhUrXktIoSjgP2": ["Radioactive", "Imagine Dragons", 2012, 0.448, 0.784, 0.106, 0, 0.668, 0.063, 0.236, 136, -3.7, 9, 1],
  "5qaEfEh1AtSdrdrByCP7qR": ["Demons", "Imagine Dragons", 2013, 0.505, 0.71, 0.19, 0, 0.329, 0.032, 0.428, 90, -4.3, 3, 1],
  "0pqnGHJpmpxLKifKRmU6WP": ["Believer", "Imagine Dragons", 2017, 0.776, 0.78, 0.062, 0, 0.081, 0.128, 0.666, 125, -4.3, 10, 0],
  "2FY7b99s15jUprqC0M5NCT": ["Natural", "Imagine Dragons", 2018, 0.704, 0.611, 0.217, 0, 0.098, 0.041, 0.22, 100, -6.0, 5, 0],
  "1r9xUipOqoNwggBpENDsvJ": ["Enemy", "Imagine Dragons", 2021, 0.728, 0.783, 0.237, 0, 0.086, 0.049, 0.566, 77, -4.8, 11, 0],

  // ---- Coldplay ----
  "3AJwUDP919kvQ9QcozQPxg": ["Yellow", "Coldplay", 2000, 0.429, 0.661, 0.002, 0.0001, 0.234, 0.028, 0.285, 173, -7.2, 11, 1],
  "75JFxkI2RXiU7L9VXzMkle": ["The Scientist", "Coldplay", 2002, 0.557, 0.442, 0.732, 0.0, 0.11, 0.024, 0.213, 146, -7.5, 5, 1],
  "1mea3bSkSGXuIRvnydlB5b": ["Viva la Vida", "Coldplay", 2008, 0.486, 0.617, 0.095, 0, 0.109, 0.029, 0.417, 138, -7.1, 5, 0],
  "0FDzzruyVECATHXKHFs9eJ": ["A Sky Full of Stars", "Coldplay", 2014, 0.545, 0.675, 0.063, 0.0, 0.209, 0.028, 0.162, 125, -6.5, 6, 0],
  "3FeVmId7tL5YN8B7R3imoM": ["My Universe", "Coldplay", 2021, 0.746, 0.598, 0.277, 0, 0.1, 0.05, 0.603, 105, -6.8, 2, 1],

  // ---- Adele ----
  "0Z5ok0QLLttAKsujOZYOXf": ["Chasing Pavements", "Adele", 2008, 0.478, 0.53, 0.289, 0, 0.138, 0.032, 0.277, 80, -6.6, 5, 1],
  "4OSBTYWVwsQhGLF9NHvIbR": ["Rolling in the Deep", "Adele", 2010, 0.73, 0.769, 0.138, 0, 0.06, 0.03, 0.507, 105, -5.1, 8, 1],
  "1zwMYTA5nlNjZxYrvBB2pV": ["Someone Like You", "Adele", 2011, 0.56, 0.321, 0.903, 0, 0.098, 0.033, 0.282, 135, -8.1, 9, 1],
  "4sPmO7WMQUAf45kwMOtONw": ["Hello", "Adele", 2015, 0.578, 0.43, 0.31, 0, 0.086, 0.035, 0.288, 79, -6.1, 5, 0],
  "5HCyWlXZPP0y6Gqq8TgA20": ["Easy On Me", "Adele", 2021, 0.604, 0.366, 0.578, 0, 0.13, 0.028, 0.13, 142, -7.9, 5, 1],

  // ---- Billie Eilish ----
  "2uIX8YMNjGMD7441kqyyNU": ["Ocean Eyes", "Billie Eilish", 2016, 0.6, 0.35, 0.85, 0.06, 0.12, 0.04, 0.2, 145, -10.1, 1, 1],
  "2Fxmhks0bxGSBdJ92vM42m": ["bad guy", "Billie Eilish", 2019, 0.701, 0.425, 0.328, 0.13, 0.1, 0.375, 0.562, 135, -10.9, 7, 0],
  "4LRPiXqCikLlN15c3yImP7": ["everything i wanted", "Billie Eilish", 2019, 0.704, 0.225, 0.902, 0.0, 0.106, 0.099, 0.243, 120, -14.5, 6, 0],
  "2p8IUWQDrpjuFltbdgLOag": ["Happier Than Ever", "Billie Eilish", 2021, 0.332, 0.378, 0.771, 0.0, 0.084, 0.072, 0.296, 81, -11.2, 9, 0],
  "6wf7Yu7cxBSPrRlWeSeK0Q": ["What Was I Made For", "Billie Eilish", 2023, 0.444, 0.17, 0.9, 0.0, 0.1, 0.04, 0.1, 78, -14.0, 0, 1],

  // ---- Drake ----
  "best-i-ever-had": ["Best I Ever Had", "Drake", 2009, 0.431, 0.673, 0.02, 0, 0.1, 0.328, 0.456, 162, -6.3, 1, 1],
  "0wwPcA6wtMf6HUMpIRdeP7": ["Hotline Bling", "Drake", 2015, 0.891, 0.628, 0.0, 0, 0.099, 0.055, 0.552, 135, -7.9, 2, 0],
  "6DCZcSspjsKoFjzjrWoCdn": ["God's Plan", "Drake", 2018, 0.754, 0.449, 0.033, 0, 0.552, 0.109, 0.357, 77, -9.2, 7, 1],
  "127QTOFJsJQp5LbJbu3A1y": ["Toosie Slide", "Drake", 2020, 0.83, 0.49, 0.321, 0, 0.113, 0.206, 0.845, 81, -8.8, 1, 1],
  "1bDbXMyjaUIooNwFE9wn0N": ["Rich Flex", "Drake", 2022, 0.561, 0.509, 0.02, 0, 0.3, 0.3, 0.424, 154, -7.8, 4, 0],

  // ---- Ariana Grande ----
  "2bCnHkB9wrWdCHWWSqJCsF": ["Problem", "Ariana Grande", 2014, 0.742, 0.804, 0.019, 0, 0.165, 0.1, 0.66, 103, -5.0, 1, 0],
  "into-you": ["Into You", "Ariana Grande", 2016, 0.623, 0.734, 0.016, 0, 0.145, 0.107, 0.366, 108, -5.9, 9, 1],
  "5JCoSi02qi3jJeHdZXMmR8": ["No Tears Left to Cry", "Ariana Grande", 2018, 0.699, 0.713, 0.04, 0, 0.294, 0.059, 0.354, 122, -5.7, 9, 0],
  "6ocbgoVGwYJhOv1GgI9NsF": ["7 rings", "Ariana Grande", 2019, 0.778, 0.317, 0.592, 0, 0.088, 0.334, 0.327, 140, -10.7, 1, 0],
  "3sSpndy72fFDMOAMpFQxgD": ["positions", "Ariana Grande", 2020, 0.737, 0.802, 0.468, 0, 0.093, 0.088, 0.682, 144, -4.9, 0, 1],

  // ---- The Weeknd ----
  "7eqoqGkKwgOaWNNHx90uEZ": ["Wicked Games", "The Weeknd", 2011, 0.54, 0.55, 0.05, 0.0, 0.14, 0.04, 0.24, 120, -9.0, 4, 0],
  "56k2ztFw7hQRzDeoe80pJo": ["Can't Feel My Face", "The Weeknd", 2015, 0.704, 0.76, 0.018, 0, 0.105, 0.03, 0.734, 108, -5.0, 9, 0],
  "5aAx2yezTd8zXrkmtKl66Z": ["Starboy", "The Weeknd", 2016, 0.679, 0.587, 0.165, 0, 0.137, 0.276, 0.486, 186, -7.0, 7, 1],
  "0VjIjW4GlUZAMYd2vXMi3b": ["Blinding Lights", "The Weeknd", 2019, 0.514, 0.73, 0.001, 0.0001, 0.09, 0.06, 0.334, 171, -5.9, 1, 1],
  "5QO79kh1waicV47BqGRL3g": ["Save Your Tears", "The Weeknd", 2020, 0.68, 0.826, 0.021, 0.0, 0.543, 0.031, 0.644, 118, -5.4, 0, 1],

  // ---- Eminem ----
  "5Z01UMMf7V1o0MzF86s6WJ": ["The Real Slim Shady", "Eminem", 2000, 0.949, 0.661, 0.03, 0, 0.045, 0.057, 0.76, 104, -4.1, 5, 0],
  "1v7L65Lzy0j0vdpRjJewt1": ["Lose Yourself", "Eminem", 2002, 0.689, 0.735, 0.01, 0, 0.1, 0.264, 0.06, 171, -4.0, 2, 1],
  "7lQ8MOhq6IN2w8EYcFNSUk": ["Not Afraid", "Eminem", 2010, 0.855, 0.7, 0.02, 0, 0.1, 0.3, 0.35, 116, -4.5, 8, 0],
  "2FnHpqOXnVeHqT43l8gNLr": ["Rap God", "Eminem", 2013, 0.76, 0.91, 0.03, 0, 0.061, 0.269, 0.05, 148, -3.4, 5, 0],
  "7dt6x5M1jzdTEt8oCbisTK": ["Godzilla", "Eminem", 2020, 0.808, 0.888, 0.05, 0, 0.11, 0.2, 0.5, 166, -3.3, 1, 1],

  // ---- Extra songs only used on the Compare page ----
  "3z8h0TU7ReDPLIbEnYhWZb": ["Bohemian Rhapsody", "Queen", 1975, 0.392, 0.402, 0.288, 0, 0.243, 0.054, 0.228, 72, -9.9, 0, 0],
  "40riOy7x9W7GXjyGp4pjAv": ["Hotel California", "Eagles", 1976, 0.579, 0.508, 0.01, 0.0, 0.07, 0.027, 0.609, 147, -9.4, 11, 0],
  "5CQ30WqJwcep0pYcV4AMNc": ["Stairway to Heaven", "Led Zeppelin", 1971, 0.338, 0.34, 0.58, 0.003, 0.116, 0.04, 0.2, 82, -12.0, 9, 0],
  "1AdYZ6X00nXmO613Y7GJOl": ["I Miss You", "blink-182", 2003, 0.54, 0.7, 0.006, 0, 0.1, 0.03, 0.4, 110, -5.0, 9, 0],
  "003vvx7Niy0yvhvHt4a68B": ["Mr. Brightside", "The Killers", 2004, 0.355, 0.918, 0.001, 0, 0.099, 0.08, 0.24, 148, -4.4, 1, 1],
  "6SOzNLaZF6gHGgh7qU56hE": ["Fire Fire", "Flyleaf", 2007, 0.4, 0.9, 0.0, 0, 0.2, 0.05, 0.3, 140, -4.5, 4, 1],
  "5xEM5hIgJ1jjgcEBfpkt2F": ["Complicated", "Avril Lavigne", 2002, 0.585, 0.776, 0.04, 0, 0.3, 0.04, 0.43, 78, -5.0, 0, 1],
  "1LkoYGxmYpO6QSEvY5C0Zl": ["Scotty Doesn't Know", "Eagles", 2004, 0.6, 0.8, 0.02, 0, 0.1, 0.1, 0.7, 150, -5.5, 4, 1],
  "5Q0Nhxo0l2bP3pNjpGJwV1": ["Party In The U.S.A", "Miley Cyrus", 2009, 0.652, 0.698, 0.001, 0, 0.1, 0.042, 0.47, 97, -4.8, 10, 1],
  "6Z8R6UsFuGXGtiIxiD8ISb": ["Safe And Sound", "Capital Cities", 2011, 0.66, 0.84, 0.03, 0, 0.1, 0.04, 0.8, 118, -5.2, 0, 1],
  "7ygpwy2qP3NbrxVkHvUhXY": ["Wonderwall", "Oasis", 1995, 0.378, 0.904, 0.0, 0, 0.1, 0.04, 0.44, 174, -4.0, 2, 1],
  "1zB4vmk8tFRmM9UULNzbLB": ["Thunder", "Imagine Dragons", 2017, 0.6, 0.81, 0.0, 0, 0.17, 0.05, 0.3, 168, -4.8, 0, 1],
  "1XGmzt0PVuFgQYYnV2It7A": ["Payphone", "Maroon 5, Wiz Khalifa", 2012, 0.74, 0.75, 0.01, 0, 0.1, 0.07, 0.52, 110, -4.9, 5, 0],
  "5cF0dROlMOK5uNZtivgu50": ["Attention", "Charlie Puth", 2017, 0.775, 0.613, 0.1, 0, 0.1, 0.06, 0.78, 100, -5.0, 3, 0],
  "1TEjSXPdAakDotj2Wji3PU": ["Hot N Cold", "Katy Perry", 2008, 0.706, 0.841, 0.0, 0, 0.1, 0.05, 0.86, 132, -4.5, 1, 0],
  "0nrRP2bk19rLc0orkWPQk2": ["Wake Me Up", "Avicii", 2013, 0.532, 0.783, 0.0, 0, 0.16, 0.05, 0.64, 124, -5.7, 2, 1],
  "67WTwafOMgegV6ABnBQxcE": ["Some Nights", "fun.", 2012, 0.67, 0.73, 0.02, 0, 0.1, 0.05, 0.4, 107, -5.0, 1, 1],
  "20I6sIOMTCkB6w7ryavxtO": ["Call Me Maybe", "Carly Rae Jepsen", 2011, 0.783, 0.58, 0.01, 0, 0.1, 0.04, 0.66, 120, -6.5, 7, 1],
  "4cluDES4hQEUhmXj6TXkSo": ["What Makes You Beautiful", "One Direction", 2011, 0.726, 0.787, 0.01, 0, 0.1, 0.07, 0.89, 125, -4.1, 4, 1],
  "1JSTJqkT5qHq8MDJnJbRE1": ["Every Breath You Take", "The Police", 1983, 0.82, 0.45, 0.54, 0, 0.1, 0.03, 0.74, 117, -9.0, 8, 1],
  "1SLikaDhWhhhnLJC58bkFI": ["Life Is a Highway", "Rascal Flatts", 2006, 0.55, 0.9, 0.03, 0, 0.1, 0.05, 0.7, 120, -5.0, 7, 1],
  "6HMFtoMvv6n6Q2eOyPFyne": ["Walk of Life", "Dire Straits", 1985, 0.75, 0.8, 0.1, 0, 0.1, 0.04, 0.9, 172, -6.0, 5, 1],
  "7snQQk1zcKl8gZ92AnueZW": ["Sweet Child O' Mine", "Guns N' Roses", 1987, 0.447, 0.9, 0.0, 0.1, 0.1, 0.05, 0.6, 125, -5.0, 2, 1],
};

const KEY_NAMES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

// Turns every row into a full object, keyed by track ID.
export const trackLibrary = Object.fromEntries(
  Object.entries(rows).map(([id, r]) => [
    id,
    {
      id,
      title: r[0],
      artist: r[1],
      year: r[2],
      danceability: r[3],
      energy: r[4],
      acousticness: r[5],
      instrumentalness: r[6],
      liveness: r[7],
      speechiness: r[8],
      valence: r[9],
      tempo: r[10],
      loudness: r[11],
      key: r[12],
      keyName: KEY_NAMES[r[12]],
      mode: r[13], // 1 = major, 0 = minor
    },
  ])
);

// Songs shown in the dropdowns on the Compare page (same list as before).
export const compareSongIDs = [
  "3z8h0TU7ReDPLIbEnYhWZb", "40riOy7x9W7GXjyGp4pjAv", "5CQ30WqJwcep0pYcV4AMNc",
  "1AdYZ6X00nXmO613Y7GJOl", "003vvx7Niy0yvhvHt4a68B", "6SOzNLaZF6gHGgh7qU56hE",
  "5xEM5hIgJ1jjgcEBfpkt2F", "1LkoYGxmYpO6QSEvY5C0Zl", "5Q0Nhxo0l2bP3pNjpGJwV1",
  "7qiZfU4dY1lWllzX7mPBI3", "6Z8R6UsFuGXGtiIxiD8ISb", "7ygpwy2qP3NbrxVkHvUhXY",
  "1zB4vmk8tFRmM9UULNzbLB", "1XGmzt0PVuFgQYYnV2It7A", "5cF0dROlMOK5uNZtivgu50",
  "1TEjSXPdAakDotj2Wji3PU", "0nrRP2bk19rLc0orkWPQk2", "67WTwafOMgegV6ABnBQxcE",
  "20I6sIOMTCkB6w7ryavxtO", "4cluDES4hQEUhmXj6TXkSo", "1JSTJqkT5qHq8MDJnJbRE1",
  "1SLikaDhWhhhnLJC58bkFI", "6HMFtoMvv6n6Q2eOyPFyne", "7snQQk1zcKl8gZ92AnueZW",
];

export const compareSongs = compareSongIDs.map((id) => trackLibrary[id]);

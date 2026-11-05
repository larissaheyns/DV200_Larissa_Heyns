# 🎵 Music Application
### Exploring Music Through Data

An interactive music exploration application built with React, designed to help users discover, compare and visualise musical characteristics through charts and artist timelines.

Developed as part of **DV200 — Interactive Development** at Open Window.

---

## ✨ About the Project

The Music Application explores how data visualisation can make musical characteristics easier to understand.

Users can compare two songs, examine audio features such as danceability, energy and tempo, and explore how an artist's music has changed over time.

The application combines a curated local music dataset with interactive React components and Chart.js visualisations.

## 🎧 Key Features

### Music Dashboard
- Explore music through a visually distinctive interface.
- View selected songs and their audio characteristics.
- Navigate between the dashboard, comparison and timeline sections.

### Song Comparison
- Select two songs to compare.
- View audio features through multiple chart types.
- Update visualisations dynamically when different songs are selected.

### Artist Timeline
- Select an artist from the available collection.
- Explore songs arranged by release year.
- Visualise changes in musical characteristics over time.

### Album Artwork
- Retrieve available artwork using Spotify's public oEmbed endpoint.
- Display generated fallback artwork when an image is unavailable.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Component-based frontend development |
| JavaScript | Application logic and interactions |
| CSS | Styling, layout and visual effects |
| React Router | Navigation between pages |
| Chart.js | Data visualisation |
| react-chartjs-2 | React integration for charts |
| Bootstrap / React Bootstrap | Interface components and styling support |
| Create React App | Project setup and development tooling |

## 📊 Data and API Integration

The application originally explored using an external API to retrieve music audio-feature data.

However, limitations involving API availability and pricing made this approach unsuitable for continued development.

To maintain the application's comparison and visualisation features, the project was adapted to use a **curated local dataset**.

The dataset is stored in `src/data/tracks.js` and contains audio-feature values used throughout the application.

**Important:** The local audio-feature values are approximations for demonstration and visualisation purposes. They should not be treated as verified Spotify measurements.

For artwork, the application attempts to retrieve images through Spotify's public oEmbed endpoint. When an image cannot be retrieved, a generated fallback cover is displayed.

This approach reduces dependence on paid API services while preserving the application's core functionality.

## 📁 Project Structure

```text
src/
├── components/
│   ├── api.js
│   ├── TrackCharts.js
│   ├── OneLineGraph.js
│   ├── ArtistShowcase.js
│   └── ...
├── data/
│   └── tracks.js
├── pages/
│   ├── Landing.js
│   ├── Compare.js
│   └── Timeline.js
├── App.js
└── App.css
```

## 🚀 Getting Started

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/larissaheyns/DV200_Larissa_Heyns.git
```

2. Navigate to the project folder:

```bash
cd DV200_Larissa_Heyns
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
```

This creates an optimised production build in the `build` folder.

## 🧠 Challenges and Lessons Learned

### API Limitations

One of the biggest challenges was adapting the project after encountering limitations with the original music API.

This taught me to consider API reliability, pricing and long-term availability when planning an application.

### Interactive Data Visualisation

Building the comparison and timeline features helped me understand how React state and Chart.js can work together to update visualisations based on user selections.

### Application Structure

Separating data retrieval, chart components and individual pages helped me develop a better understanding of reusable components and application organisation.

## 🔮 Future Improvements

- Expand the available music and artist dataset.
- Improve search and filtering functionality.
- Explore reliable alternatives for retrieving verified audio-feature data.
- Refine responsiveness and accessibility.
- Introduce additional interactive music visualisations.

## 🌐 Repository

[View the Music Application on GitHub](https://github.com/larissaheyns/DV200_Larissa_Heyns)

## 👩‍💻 Developer

**Larissa Heyns**

DV200 — Interactive Development  
Open Window

[GitHub Profile](https://github.com/larissaheyns)

---

*Exploring the connection between music, data and interactive development.*

import express from "express";
import path from "path";
import filterWeatherDataAtHour from "./functions/filterWeatherData.js";
import { fileURLToPath } from 'url';
import { getLocationDataByText, getLocationDataByCoordinates, getWeatherDataById } from "./http/yrAPI.js";
import { localURL, APP_PORT } from "./config.js";
const app = express();
const PORT = APP_PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/forecast", async (req, res) => {
  const { q, latitude, longitude, hour } = req.query;
  let name;
  let id;
  try {
    if (q) {
      const locationData = await getLocationDataByText(q);
      id = locationData.id;
      name = locationData.name;
    } else if (latitude && longitude) {
      const locationData = await getLocationDataByCoordinates(latitude, longitude);
      id = locationData.id;
      name = locationData.name;
    } else {
      const locationData = await getLocationDataByText("Moskva"); /*By default Moskva*/
      id = locationData.id;
      name = locationData.name;
    }
    let weatherDataFull = await getWeatherDataById(id);
    let weatherData = weatherDataFull.shortIntervals;
    const targetHour = hour ? parseInt(hour, 10) : 14;
    const weatherAtHour = filterWeatherDataAtHour(weatherData, targetHour);

    res.json({ locationInfo: name, days: weatherAtHour });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data");
  }
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Weather service is running on ${localURL}`);
  });
}

export default app;

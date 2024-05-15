import assert from 'assert';
import axios from 'axios';
import { localURL } from "../config.js";
console.log(localURL);
const forecastURL = localURL + "/forecast";
describe("Weather API", function () {
  this.timeout(5000);

  it("should GET weather data with location info and days array", async function () {
    try {
      const response = await axios.get(forecastURL);
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );
      });
    } catch (error) {
      throw new Error("Error fetching weather data: " + error.message);
    }
  });

  it("should GET weather data for a specific hour (14:00)", async function () {
    try {
      const response = await axios.get(`${forecastURL}?hour=14`);
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );

        const time = item.time.split(":");
        const hours = parseInt(time[0]);

        assert.strictEqual(hours, 14, "Hour should be 14:00");
      });
    } catch (error) {
      throw new Error(
        "Error fetching or testing weather data: " + error.message
      );
    }
  });

  it("should GET weather data for a different hour (e.g., 9:00)", async function () {
    try {
      const response = await axios.get(`${forecastURL}?hour=9`);
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );

        const time = item.time.split(":");
        const hours = parseInt(time[0]);

        assert.strictEqual(hours, 9, "Hour should be 9:00");
      });
    } catch (error) {
      throw new Error(
        "Error fetching or testing weather data: " + error.message
      );
    }
  });

  it("should GET weather data for 'Moskva' using query parameter 'q'", async function () {
    try {
      const response = await axios.get(`${forecastURL}?q=Moskva`);
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert.strictEqual(
        weatherData.locationInfo,
        "Moskva",
        "Location name should be 'Moskva'"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );
      });
    } catch (error) {
      throw new Error("Error fetching weather data: " + error.message);
    }
  });

  it("should GET weather data for 'Oslo' using query parameter 'q'", async function () {
    try {
      const response = await axios.get(`${forecastURL}?q=Oslo`);
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert.strictEqual(
        weatherData.locationInfo,
        "Oslo",
        "Location name should be 'Oslo'"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );
      });
    } catch (error) {
      throw new Error("Error fetching weather data: " + error.message);
    }
  });

  it("should GET weather data for 'Moskva' using latitude and longitude", async function () {
    try {
      const latitude = 55.7558;
      const longitude = 37.6176;
      const response = await axios.get(
        `${forecastURL}?latitude=${latitude}&longitude=${longitude}`
      );
      const weatherData = response.data;

      assert(typeof weatherData === "object", "Response data is not an object");
      assert(
        "locationInfo" in weatherData,
        "Response data is missing locationInfo"
      );
      assert.strictEqual(
        weatherData.locationInfo,
        "Moskva",
        "Location name should be 'Moskva'"
      );
      assert(
        Array.isArray(weatherData.days),
        "days in response data is not an array"
      );

      weatherData.days.forEach((item) => {
        assert(typeof item === "object", "Data item is not an object");
        assert(
          "date" in item && "time" in item && "temperature" in item,
          "Data item is missing required properties"
        );
        assert(
          "symbol" in item.additionalInfo &&
            "wind" in item.additionalInfo &&
            "pressure" in item.additionalInfo &&
            "humidity" in item.additionalInfo,
          "Additional info is missing required properties"
        );
      });
    } catch (error) {
      throw new Error("Error fetching weather data: " + error.message);
    }
  });
});

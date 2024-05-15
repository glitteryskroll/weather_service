// filterWeatherData.js

/**
 * Фильтрует данные прогноза по заданному времени.
 * @param {Array} weatherData - Массив данных прогноза.
 * @param {number} targetHour - Целевой час для фильтрации.
 * @returns {Array} Отфильтрованные данные прогноза.
 */

function filterWeatherDataAtHour(weatherData, targetHour) {
    return weatherData
      .filter((item) => {
        const startDate = new Date(item.start);
        return startDate.getHours() === targetHour;
      })
      .map((item) => ({
        date: item.start.split("T")[0],
        time: item.start.split("T")[1],
        temperature: item.temperature.value,
        additionalInfo: {
          symbol: item.symbol,
          wind: item.wind,
          pressure: item.pressure,
          humidity: item.humidity,
        },
      }));
  }
  
  export default filterWeatherDataAtHour;
  
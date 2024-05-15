/* yr.no api file */
import axios from "axios";

export const getLocationDataByText = async (text) => {
  const url = `https://www.yr.no/api/v0/locations/Search?q=${encodeURIComponent(text)}`;
  const response = await axios.get(url);
  const result = response.data._embedded.location[0];
  const id = result["id"];
  const name = result.name;
  return { id, name };
}

export const getLocationDataByCoordinates = async (latitude, longitude) => {
  const locationUrl = `https://www.yr.no/api/v0/locations/Search?lat=${latitude}&lon=${longitude}&accuracy=1000&language=nn`;
  const response = await axios.get(locationUrl);
  const result = response.data._embedded.location[0];
  const id = result["id"];
  const name = result.name;
  return { id, name };
}

export const getWeatherDataById = async (id) => {
    const url = `https://www.yr.no/api/v0/locations/${id}/forecast`;
    const response = await axios.get(url);
    return response.data;
  }
  
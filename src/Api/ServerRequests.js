import axios from "axios";

const racesEndpointUrl = 'http://localhost:8089/races'

export const getRaces = (onCompletedCallback, onErrorCallback) => {

    axios.get("http://localhost:8089/races")
        .then((response) => { onCompletedCallback(response.data.races) })
        .catch((error) => {
            console.log(error.message)
            onErrorCallback(error)
        });
}

export const getTop100Races = async () => {
    debugger
    try {
      const response = await axios.get(`${racesEndpointUrl}/?pageSize=100`);
      console.log(response);
      return response.data.races
    } catch (error) {
      console.log(error);
    }
  };

export const postRace = async (race) => {
    debugger
    try {
      const response = await axios.post(racesEndpointUrl, race);
      console.log(response);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

export const putRace = async (race) => {
    try {
      const response = await axios.post(`${racesEndpointUrl}/${race.id}`, race);
      console.log(response);
      return response.data
    } catch (error) {
      console.log(error);
    }
  };

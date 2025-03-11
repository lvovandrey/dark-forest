import axios from "axios";

const apiInstanceRaces = axios.create({
  baseURL: 'http://localhost:8089/races/'
})

export const APIRaces = {
  getRaces(currentPage, pageSize) {
    return apiInstanceRaces.get(`?page=${currentPage}&pageSize=${pageSize}`)
      .then((response) => response.data)
  },

  getRace(raceId) {
    return apiInstanceRaces.get(`${raceId}`)
      .then((response) => response.data)
  },

  getTop100Races() {
    return apiInstanceRaces.get('?page=1&pageSize=100')
      .then((response) => response.data.races)
  },

  postRace(race, token) {
    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }

    return apiInstanceRaces.post('', race, config)
      .then((response) => response.data)
  },

  putRace (race) {
      apiInstanceRaces.put(`${race.id}`, race)
        .then((response) => response.data) 
  }
}

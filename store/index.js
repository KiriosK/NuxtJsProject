import axios from 'axios'

export const state = () => ({
  cities: []
})

export const mutations = {
  changeCities(state, newCities) {
    state.cities = newCities
  }
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await axios.get('http://localhost:3000/data.json')
    commit('changeCities', res.data.cities)
  },
  addCity({ state, commit }, city) {
    commit(
      'changeCities',
      [...state.cities, city]
    )
  },
  deleteCity({ state, commit }, id) {
    commit(
      'changeCities',
      state.cities.filter(city => city.id !== id)
    )
  }
}

<template>
  <form
    id="form"
    @submit="addCity"
  >
    <p>
      <label for="cityName">CityName</label>
      <input
        id="cityName"
        v-model="cityName"
        type="text"
        name="cityName"
      >
    </p>
    <p>
      <label for="temperature">Temperature(°C)</label>
      <input
        id="temperature"
        v-model="temperature"
        type="number"
        name="temperature"
      >
    </p>    
    <p>
      <label for="windSpeed">WindSpeed(km/h)</label>
      <input
        id="windSpeed"
        v-model="windSpeed"
        type="number"
        name="windSpeed"
      >
    </p>
    <p>
      <label for="windDirection">Direction</label>
      <select
        id="windSpeed"
        v-model="windDirection"
        name="windDirection"
      >
        <option 
          v-for="(direction, id) in directions"
          :key="id"
        >
          {{ direction }} 
        </option>
      </select>
    </p>
    <p>
      <label for="pressure">Pressure(mb)</label>
      <input
        id="pressure"
        v-model="pressure"
        type="number"
        name="pressure"
      >
    </p>
    <p>
      <button
        :disabled="!formFilled"
        @click="addCity"
      >
        Submit 
      </button>
    </p>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      cityName: '',
      temperature: null,
      windSpeed: null,
      windDirection: '',
      pressure: null,
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    }
  },
  computed: {
    formFilled() {
      return this.cityName && this.temperature && this.windSpeed && this.windDirection && this.pressure 
    }
  },
  methods: {
    addCity(event) {
      const newCity = {
        name: this.cityName,
        temperature: this.temperature,
        windSpeed: this.windSpeed,
        windDirection: this.windDirection,
        pressure: this.pressure
      }
      this.$store.dispatch(
        'addCity',
        newCity
      )
      this.dataClear()
      event.preventDefault()
    },
    dataClear(){
      this.cityName = ''
      this.temperature = null
      this.windSpeed = null 
      this.windDirection = ''
      this.pressure = null
    }
  }
}
</script>

<style>
#form {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
#form label {
  margin-right: 1rem;
}
#form p {
  display: flex;
  margin: 0.5rem;
  justify-content: space-between;
}
</style>

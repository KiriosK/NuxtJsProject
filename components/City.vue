<template>
  <div class="city">
    <h2>{{ city.name }}</h2>
    <div class="temperature">
      {{ city.temperature }}°C
    </div>
    <div>
      <span> Wind: {{ city.windSpeed }} km/h</span>
      <span> {{ city.windDirection }} </span>
    </div>
    <p> Pressure: {{ city.pressure }} mb</p>
    <button 
      class="deleteButton"
      @click="deleteCity(city.id)"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    deleteCity(id) {
      this.$store.dispatch('deleteCity', id)
    }
  }
}
</script>

<style>
.city {
  padding: 1rem;
  border: solid black 1px;
}

.deleteButton {
  margin-top: 1rem;
  background: white;
  font-size: 1rem;
  padding: 1rem;
}
.deleteButton:hover {
  background: red;
}
</style>


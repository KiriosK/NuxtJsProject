<template>
  <div class="city">
    <p>{{ city.name }}</p>
    <p> Temperature: {{ city.temperature }} </p>
    <p> Wind: {{ city.windSpeed }} km/h {{ city.windDirection }} </p>
    <p> Pressure: {{ city.pressure }} mb</p>
    <button @click="deleteCity(city.id)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      default: function() {
        return {
          name: "Kappa"
        }
      }
    }
  },
  methods: {
    deleteCity(id) {
      this.$store.dispatch('deleteCity', id)
    }
  }
}
</script>

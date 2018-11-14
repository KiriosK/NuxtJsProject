<template>
  <div class="listContainer">
    <City 
      v-for="city in paginatedCities"
      :city="city"
      :key="city.id"
    />
    <span>
      <button 
        :disabled="pageNumber === 0" 
        @click="prevPage"
      >
        Previous
      </button>
      Page: {{ pageNumber + 1 }}
      <button 
        :disabled="pageNumber >= pageCount - 1" 
        @click="nextPage"
      >
        Next
      </button>
      <p> Cities in list: {{ cities.length }}</p>
    </span>
  </div>
</template>

<script>
import City from "./City.vue"

export default {
  components: {
    City
  },
  data: () => {
    return {
      pageNumber: 0,
      size: 2
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    },
    pageCount() {
      const len = this.cities.length
      const s = this.size
      return Math.ceil(len/s);
    },
    paginatedCities(){
      const start = this.pageNumber * this.size
      const end = start + this.size;
      return this.cities.slice(start, end);
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  }
}
</script>

<style>
.listContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 70vh;
}
</style>


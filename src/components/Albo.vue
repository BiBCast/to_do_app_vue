<template>
  <div>
    <h1>Items</h1>
    <div>{{ this.items }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      items: [] // Store the fetched items here
    }
  },
  created () {
    this.fetchItems() // Fetch items when the component is created
  },
  methods: {
    fetchItems () {
      // Make an API GET request using Axios
      axios
        .get('https://random-data-api.com/api/v2/users?size=2&is_xml=true') // Replace with your API endpoint
        .then(response => {
          // Handle the successful response
          this.items = response.data
          console.log(this.items)
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error fetching items:', error)
        })
    }
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

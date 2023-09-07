<template>
  <div>
    <h1>Login:</h1>
    <div>
      <p>Welcome {{ retrievedContent }}</p>
      <input v-model="inputText" type="text" placeholder="Enter text" />
      <button @click="retrieveContent">Save name</button>
    </div>
    <router-link
      :to="{
        path: '/home',
        query: { loginName: this.retrievedContent }
      }"
      >Time to create task!</router-link
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputText: '',
      retrievedContent: ''
    }
  },
  methods: {
    retrieveContent () {
      this.retrievedContent = this.inputText
    }
  }
}
</script>

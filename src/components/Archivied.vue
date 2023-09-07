<script setup>
import { store, Task } from './store'
</script>

<template>
  <div>
    <h1>Archived Tasks</h1>
    <label for="user_filter">Select a User:</label>
    <select id="user_filter" v-model="SelectedUser">
      <option v-for="user in Users" :key="user">{{ user }}</option>
    </select>
    <br />
    <label for="task_filter">Filter task</label>
    <input
      id="task_filter"
      v-model="inputText"
      type="text"
      placeholder="Enter text"
    />
    <br />
    <ul>
      <li v-for="task in filteredUser" :key="task.Index">
        {{ task.User }} - {{ task.NameTask }}
      </li>
    </ul>
    <router-link
      :to="{
        path: '/home',
        query: {
          loginName: this.$route.query.loginName
        }
      }"
      >Back</router-link
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      SelectedUser: '', // Store the selected date
      Users: [], // Store the date options
      inputText: ''
    }
  },
  mounted () {
    this.populateTask() // Populate the date options when the component is mounted
  },
  computed: {
    filteredUser () {
      let filteredTask = []
      if (this.SelectedUser !== '')
        filteredTask = store.Task.filter(
          task => task.User === this.SelectedUser
        )
      else {
        filteredTask = store.Task.filter(task => task.Archivied === true)
      }
      let lowerCaseFilterText = this.inputText.toLowerCase()
      if (this.inputText !== '')
        filteredTask = filteredTask.filter(
          task =>
            task.User.includes(lowerCaseFilterText) ||
            task.NameTask.includes(lowerCaseFilterText)
        )

      return filteredTask
    }
  },

  methods: {
    populateTask () {
      this.Users.push(
        ...store.Task.map(e => e.User).filter((element, index) => {
          return store.Task.map(e => e.User).indexOf(element) === index
        })
      )
    }
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

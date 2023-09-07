<script setup>
import { store, Task } from './store'
</script>

<template>
  <div>
    <router-link
      :to="{
        path: '/completed',
        query: {
          loginName: this.$route.query.loginName
        }
      }"
      >View Archived Tasks</router-link
    >

    <h1>Todo List</h1>
    <router-link
      :to="{
        path: '/login'
      }"
      >Back to login</router-link
    >
    <p>Name: {{ this.$route.query.loginName }}</p>
    <input
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Add a new task"
    />
    <ul>
      <li v-for="task in store.Task" :key="task.Index">
        <span>{{ task.User }}</span>
        <input type="checkbox" v-model="task.Archivied" />
        <span v-if="!editingTaskIndex || editingTaskIndex !== task.Index">{{
          task.NameTask
        }}</span>
        <input
          v-else
          v-model="editedTask"
          @keyup.enter="updateTask(task)"
          @blur="updateTask(task)"
        />
        <button @click="editTask(task)">Edit</button>
        <button @click="removeTask(task)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTask: '',
      editedTask: '',
      editingTaskIndex: null
    }
  },
  methods: {
    addTask () {
      if (this.newTask.trim() !== '') {
        store.Task.push(
          new Task(this.newTask.trim(), false, this.$route.query.loginName)
        )
        this.newTask = ''
      }
    },
    editTask (task) {
      this.editedTask = task.NameTask
      this.editingTaskIndex = task.Index
      console.log(task.Index)
    },
    updateTask (task) {
      if (this.editedTask.trim() !== '') {
        task.NameTask = this.editedTask.trim()
        this.editedTask = ''
        this.editingTaskIndex = null
      }
    },
    removeTask (task) {
      store.Task.splice(task, 1)
      if (this.editingTaskIndex === task.Index) {
        this.editedTask = ''
        this.editingTaskIndex = null
      }
    }
  }
}
</script>

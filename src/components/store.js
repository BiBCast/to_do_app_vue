import { reactive } from 'vue'
export class Task {
  NameTask = ''
  Archivied = ''
  User = ''
  static Index = 1

  constructor (NameTask, Archivied, User) {
    this.NameTask = NameTask
    this.Archivied = Archivied
    this.User = User
    this.Index = Task.getNextIndex()
  }
  static getNextIndex () {
    return Task.Index++
  }
  getNameTask () {
    return this.NameTask
  }
  getUser () {
    return this.User
  }
  getArchivied () {
    return this.Archivied
  }
}
export const store = reactive({
  Task: []
})

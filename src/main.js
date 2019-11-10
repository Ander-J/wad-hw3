import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

class User {
  constructor(firstname, lastname, birthdate, faculty, gpa) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.faculty = faculty;
    this.gpa = gpa;
  }
}

class Course {
  constructor(title, semester, grade) {
    this.title = title;
    this.semester = semester;
    this.grade = grade;
  }
}

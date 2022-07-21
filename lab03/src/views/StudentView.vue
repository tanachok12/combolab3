<template>
  <h1>Events for Good</h1>
  <div class="student">
    <StudentCompo
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentService from '@/services/StudentService'
import StudentCompo from '../components/StudentCompo.vue'
export default {
  name: 'EventListView',
  components: {
    StudentCompo
  },
  data() {
    return {
      students: null
    }
  },
  created() {
    StudentService.getEvents()
      .then((response) => {
        this.students = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>

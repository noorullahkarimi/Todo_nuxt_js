<template>
  <div class="w-100 ">
      <div class="form-group">
        <label for="exampleInputEmail1">work should do</label>
        <input 
        type="text" class="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter work"
        v-model="input">
      </div>
      <!-- <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div> -->
      <!-- <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div> -->
      <button @click="saveWork" type="button" class="btn btn-primary">save</button>
      <button @click="showAllData" type="button" class="btn btn-primary">showAllData</button>
      <div>
        <ul class="list-group list-group-light">
          <li v-for="(todo, index) in todos" :key="index" 
          class="list-group-item d-flex justify-content-between align-items-center">


          <div>
            <div class="fw-bold">{{ todo.title }}</div>
            <div class="text-muted">
              
            </div>
          </div>
          <span class="badge rounded-pill badge-warning" v-if="todo.isActive">Active</span>
          <span class="badge rounded-pill badge-success" v-else>Done</span>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      input: '',
      todos: {}
    }
  },
  methods:{
    async saveWork(){
        await this.$store.dispatch("setTodos", {input: this.input});
    },
     showAllData(){
      this.todos = this.$store.state.todos;
    }
  }
}
</script>

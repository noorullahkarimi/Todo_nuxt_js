export const state = () => ({
    todos: []
  })
  
  export const mutations = {
    SET_TODOS(state, data) {
      state.todos.push({title: data.input, isActive: 'false'});
    },
    UPDATE(state, id){
        state.todos[id].isActive = false;
    }
  }
  
  export const actions = {
    setTodos({ commit }, data) {
      commit("SET_TODOS", data);
    }
  }
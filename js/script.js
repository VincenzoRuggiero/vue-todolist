const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        {
          text: "Fare i compiti",
          done: false,
        },

        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Fare il bucato",
          done: false,
        },
      ],

      newTodo: "",
    };
  },

  methods: {
    addNewItem(content) {
      this.todos.push({ text: content, done: false });
      this.clearInput();
    },

    clearInput() {
      this.newTodo = "";
    },

    removeTodo(itemToDelete) {
      let item = this.todos.indexOf(itemToDelete);

      if (item > -1) {
        this.todos.splice(item, 1);
      }
    },
  },
}).mount("#app");

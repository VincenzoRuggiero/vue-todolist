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

      newTodo: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    addNewItem(content) {
      this.newTodo.text = content;
      this.todos.push(this.newTodo);
    },
  },
}).mount("#app");

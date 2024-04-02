import { createServer, Model } from 'miragejs';

createServer({
  models: {
    todo: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema, request) => {
      return schema.todos.all();
    });

    this.post('/todos', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.todos.create(attrs);
    });

    this.patch('/todos/:id', (schema, request) => {
      const todo = schema.todos.find(request.params.id);

      return todo.update({ completed: !todo.attrs.completed });
    });
  },

  seeds(server) {
    server.create('todo', {
      id: 1,
      name: 'Learn React',
      priority: 'High',
      completed: false,
    });
    server.create('todo', {
      id: 2,
      name: 'Learn Redux',
      priority: 'Medium',
      completed: true,
    });
    server.create('todo', {
      id: 3,
      name: 'Learn JavaScript',
      priority: 'Low',
      completed: false,
    });
  },
});

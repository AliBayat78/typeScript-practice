namespace TodoApp.Model {
  export interface Todo {
    id: number
    name: string
    state: TodoState
  }
}

namespace TodoApp.Model {
  export enum TodoState {
    New,
    Active,
    Complete,
    Delete,
  }
}

namespace DataAccess {
  import Todo = TodoApp.Model.Todo
  interface ITodoService {
    add(todo: Todo): Todo
    delete(todoId: number): void
    getAll(): Todo[]
    getbyId(todoId: number): Todo
  }
}

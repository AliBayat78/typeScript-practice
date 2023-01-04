interface Todo {
  id: number
  name: string
  state: TodoState
}

enum TodoState {
  New,
  Active,
  Complete,
  Delete,
}

interface ITodoService {
    add(todo: Todo): Todo
    delete(todoId: number): void
    getAll(): Todo[]
    getbyId(todoId: number): Todo
}
interface IIdGenerator {
  nextId: number
}

class TodoService implements ITodoService, IIdGenerator {
  private static lastId: number = 0

  constructor(private todos: Todo[]) {}

  get nextId() {
    return TodoService.getNextId()
  }

  set nextId(nextId) {
    TodoService.lastId = nextId
  }

  static getNextId() {
    return (TodoService.lastId += 1)
  }

  add(todo: Todo): Todo {
    todo.id = this.nextId
    this.todos.push(todo)
    return todo
  }

  delete(todoId: number): void {
    let toDelete = this.getbyId(todoId)
    let deletedIndex = this.todos.indexOf(toDelete)
    this.todos.splice(deletedIndex, 1)
  }

  getbyId(todoId: number): Todo | any {
    let filter = this.todos.filter((i) => i.id == todoId)
    if (filter.length) {
      return filter[0]
    } else {
      return null
    }
  }

  getAll() {
    return this.todos
  }
}

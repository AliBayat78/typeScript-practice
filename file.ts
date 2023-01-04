interface Todo {
  name: string
  state: TodoState
}

enum TodoState {
  New,
  Active,
  Complete,
  Delete,
}

class TodoService {
  private static lastId: number = 0

  constructor(private todos: Todo[]) {}

  private get nextId() {
    return TodoService.getNextId()
  }

  private set nextId(nextId) {
    TodoService.lastId = nextId
  }

  static getNextId() {
    return TodoService.lastId +=1
  } 

  public add(todo: Todo) {
    let newId = this.nextId
  }

  public getAll() {
    return this.todos
  }
}

abstract class TodoStateChanger {
  constructor(private newState: TodoState) {}

  abstract canChangeState(todo: Todo): boolean

  changeState(todo: Todo): Todo {
    if (this.canChangeState(todo)) {
      todo.state = this.newState
    }
    return todo
  }
}

class CompleteTodoStateChanger extends TodoStateChanger {
  constructor() {
    super(TodoState.Complete)
  }
  canChangeState(todo: Todo): boolean {
    return !!todo && (todo.state == TodoState.Active || todo.state == TodoState.Delete)
  }
}

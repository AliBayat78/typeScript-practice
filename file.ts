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

class TodoStateChanger {
  constructor(private newState: TodoState) {}

  canChangeState(todo: Todo): boolean {
    return !!todo
  }
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
}
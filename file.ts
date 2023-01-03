interface Todo {
  name: string
  status: TodoState
}

enum TodoState {
  New,
  Active,
  Complete,
  Delete,
}

let todo = {
  name: 'Bank',
  state: TodoState.Active,
}

console.log(todo.state)

class SmartTodo {
  name: string
  _state: TodoState

  constructor(name: string, _state: TodoState) {
    this.name = name
    this._state = _state
  }

  get state() {
    return this._state
  }

  set state(newState) {
    if (newState == TodoState.Complete) {
      var canBeComplete = this.state == TodoState.Active || this.state == TodoState.Delete
      if (!canBeComplete) {
        throw 'Todo must be active or Deleted in ...'
      }
    }
    this._state = newState
  }
}

let result = new SmartTodo('Bank', TodoState.New)

console.log(result)

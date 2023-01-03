"use strict";
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Delete"] = 3] = "Delete";
})(TodoState || (TodoState = {}));
let todo = {
    name: 'Bank',
    state: TodoState.Active,
};
console.log(todo.state);
class SmartTodo {
    constructor(name, _state) {
        this.name = name;
        this._state = _state;
    }
    get state() {
        return this._state;
    }
    set state(newState) {
        if (newState == TodoState.Complete) {
            var canBeComplete = this.state == TodoState.Active || this.state == TodoState.Delete;
            if (!canBeComplete) {
                throw 'Todo must be active or Deleted in ...';
            }
        }
        this._state = newState;
    }
}
let result = new SmartTodo('Bank', TodoState.New);
console.log(result);

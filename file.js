"use strict";
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 0] = "New";
    TodoState[TodoState["Active"] = 1] = "Active";
    TodoState[TodoState["Complete"] = 2] = "Complete";
    TodoState[TodoState["Delete"] = 3] = "Delete";
})(TodoState || (TodoState = {}));
class TodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    canChangeState(todo) {
        return !!todo;
    }
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}

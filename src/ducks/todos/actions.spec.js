import * as types from "./constants";
import * as actions from "./actions";

describe("todo actions", () => {
  it("addTodo should create ADD_TODO action", () => {
    expect(actions.addTodo("Interview with Helen")).toEqual({
      type: types.ADD_TODO,
      text: "Interview with Helen"
    });
  });

  it("deleteTodo should create DELETE_TODO action", () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    });
  });

  it("editTodo should create EDIT_TODO action", () => {
    expect(actions.editTodo(1, "Interview with Helen everywhere")).toEqual({
      type: types.EDIT_TODO,
      id: 1,
      text: "Interview with Helen everywhere"
    });
  });

  it("completeTodo should create COMPLETE_TODO action", () => {
    expect(actions.completeTodo(1)).toEqual({
      type: types.COMPLETE_TODO,
      id: 1
    });
  });

  it("completeAll should create COMPLETE_ALL action", () => {
    expect(actions.completeAll()).toEqual({
      type: types.COMPLETE_ALL
    });
  });

  it("clearCompleted should create CLEAR_COMPLETED action", () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED
    });
  });
});

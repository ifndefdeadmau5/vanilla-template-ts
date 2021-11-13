import { AppState } from "..";
import { Todo } from "../getTodos";

const getTodoCount = (todos: Todo[]) => {
  const notCompleted = todos.filter((todo) => !todo.completed);

  const { length } = notCompleted;
  if (length === 1) {
    return "1 Item left";
  }

  return `${length} Items left`;
};
export default (targetElement: Element, state: AppState) => {
  const { todos } = state;
  const element: any = targetElement.cloneNode(true);
  element.textContent = getTodoCount(todos);
  return element;
};

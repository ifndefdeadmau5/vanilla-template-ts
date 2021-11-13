import { AppState } from "..";
import { Todo } from "../getTodos";

const getTodoElement = (todo: Todo) => {
  const { text, completed } = todo;

  return `
    <li ${completed ? 'class="completed"' : ""}>
      <div class="view">
        <input 
          ${completed ? "checked" : ""}
          class="toggle" 
          type="checkbox">
        <label>${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${text}">
    </li>`;
};

export default (targetElement: Element, state: AppState) => {
  const { currentFilter, todos } = state;

  // to work with 'detached' element, use `cloneNode()`
  const element: any = targetElement.cloneNode(true);
  element.innerHTML = todos.map(getTodoElement).join("");

  return element;
};

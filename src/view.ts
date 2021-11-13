import { AppState } from ".";
import todosView from "./views/todos";
import filtersView from "./views/filters";
import counterView from "./views/counter";

export default (targetElement: Element, state: AppState) => {
  // to work with 'detached' element, use `cloneNode()`
  const element: any = targetElement.cloneNode(true);

  const list = element.querySelector(".todo-list");
  const counter = element.querySelector(".todo-count");
  const filters = element.querySelector(".filters");

  list.replaceWith(todosView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  return element;
};

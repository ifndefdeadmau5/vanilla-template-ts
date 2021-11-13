import { AppState } from "..";

export default (targetElement: Element, state: AppState) => {
  const { currentFilter, todos } = state;

  // to work with 'detached' element, use `cloneNode()`
  const element: any = targetElement.cloneNode(true);

  Array.from(element.querySelectorAll("li a")).forEach((a: Element) => {
    if (a.textContent === currentFilter) {
      a.classList.add("selected");
    } else {
      a.classList.remove("selected");
    }
  });

  return element;
};

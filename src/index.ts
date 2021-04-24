import getTodos from "./getTodos";
import view from "./view";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

export type AppState = typeof state;

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  console.log(state);
  main.replaceWith(newMain);
});

if (module.hot) {
  module.hot.accept("./view.ts", function () {});
}

import getTodos from "./getTodos";
import view from "./view";
import init from "./displayFPS";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

export type AppState = typeof state;

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    console.log("rendering");
    const newMain = view(main, state);
    main.replaceWith(newMain);
  });
};

const timer = window.setInterval(() => {
  state.todos = getTodos();
  render();
}, 5000);

render();

if (module.hot) {
  module.hot.accept("./view.ts", function () {});
}

init();

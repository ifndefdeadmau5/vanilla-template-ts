// import some from "./some";

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");

//   element.innerHTML = ["Hello", "webpack"].join(" ");
//   btn.onclick = some;
//   btn.innerText = "you what?";

//   element.appendChild(btn);

//   return element;
// }
import getTodos from "./getTodos";
import view from "./view";

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const main = document.querySelector(".todoapp");

window.requestAnimationFrame(() => {
  const newMain = view(main, state);
  main.replaceWith(newMain);
});

if (module.hot) {
  module.hot.accept("./view.ts", function () {});
}

import some from "./some";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = ["Hello", "webpack"].join(" ");
  btn.onclick = some;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./some.ts", function () {
    some();
  });
}

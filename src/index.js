function component() {
  const element = document.createElement("div");

  element.innerHTML = "helloooo";

  return element;
}

document.body.appendChild(component());

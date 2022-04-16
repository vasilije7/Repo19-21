let shift = false;
let capsLock = false;

let text = [];

const keys = document.getElementsByClassName("key");

const keyPressed = (e) => {
  console.log(e);
};

const setKeyCss = (id, css) => {
  keys.namedItem(id).sty;
};

window.onclick = (e) => {
  if (e.target.id == "key-SHIFT") {
    shift = !shift;
  } else if (e.target.id == "key-CL") {
    capsLock = !capsLock;
  } else if (e.target.id == "key-BS" && text.length > 0) {
    text.pop();
  } else if (e.target.id == "key-SPACE") {
    text.push(" ");
  } else if (e.target.id == "key-US") {
    text.push("_");
  } else if (e.target.id == "key-MINUS") {
    text.push("-");
  } else if (e.target.id == "key-OK") {
    alert(text.join(""));
  } else if (e.target.id.includes("key") && e.target.id.length === 5) {
    text.push(e.target.innerHTML);
    shift ? (shift = false) : {};
  }

  redrawKeyboard();
};

const redrawKeyboard = () => {
  document.getElementById("text-area").innerHTML = text.join("");
  capsLock
    ? (keys.namedItem("key-CL").style.opacity = 0.5)
    : (keys.namedItem("key-CL").style.opacity = 1);
  shift
    ? (keys.namedItem("key-SHIFT").style.opacity = 0.5)
    : (keys.namedItem("key-SHIFT").style.opacity = 1);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i].id.length === 5 && !Number.isInteger(keys[i].id[4]))
      keys[i].innerHTML =
        shift || capsLock ? keys[i].id[4].toUpperCase() : keys[i].id[4];
  }
};

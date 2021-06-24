import Link from "./link.js";
import List from "./list.js";
const list = new List();
list.append(43);
list.append(13);
list.append(24);
list.getHead().getChain();

let linkD = document.createElement("button");
document.body.appendChild(linkD);
linkD.innerHTML = list.getvalue().getData();

let clearB = document.createElement("button");
clearB.addEventListener("click", clear);
document.body.appendChild(clearB);
clearB.innerHTML = "Clear";

function clear() {
  list.clear();
}

let currPosB = document.createElement("button");
currPosB.addEventListener("click", currPos);
document.body.appendChild(currPosB);
currPosB.innerHTML = "currPos";

function currPos() {
  currPosB.innerHTML = list.currPos();
}

let nextB = document.createElement("button");
nextB.addEventListener("click", next);
document.body.appendChild(nextB);
nextB.innerHTML = "next";

function next() {
  linkD.innerHTML = list.next().getData();
}

let prevB = document.createElement("button");
prevB.addEventListener("click", prev);
document.body.appendChild(prevB);
prevB.innerHTML = "previous";

function prev() {
  linkD.innerHTML = list.prev().getData();
}

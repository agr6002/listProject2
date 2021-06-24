import List from "./list.js";

// TO DO : add a button that causes shuffle of the list

// TO DO : add a button that causes sort of the list

const NEXT_COLOR = "green";
const PRIOR_COLOR = "red";
const EDGE_WEIGHT = 2;
const VERTEX_COLOR = "black";
const VERTEX_RADIUS = 5;
const PI2 = Math.PI * 2;

let first = null;
const list = new List();
const can = document.getElementById("can");
can.addEventListener("click", handleClick);
can.addEventListener("contextmenu", handleCM);
document
  .getElementById("shuffleButton")
  .addEventListener("click", list.shuffle);
document.getElementById("sortButton").addEventListener("click", list.sort);
const con = can.getContext("2d");

window.resize = resize;
resize();
requestAnimationFrame(animate);

function animate() {
  con.clearRect(0, 0, can.width, can.height);
  con.fillStyle = VERTEX_COLOR;
  con.lineWidth = EDGE_WEIGHT;
  let link = list.head.next;
  let dx, dy, offsetX, offsetY;
  while (link !== list.tail) {
    // draw the next link
    dx = link.next.pos.x - link.pos.x;
    dy = link.next.pos.y - link.pos.y;
    if (Math.abs(dy / dx) > 1) {
      offsetX = VERTEX_RADIUS;
      offsetY = 0;
    } else {
      offsetX = 0;
      offsetY = VERTEX_RADIUS;
    }
    con.strokeStyle = NEXT_COLOR;
    con.beginPath();
    con.moveTo(link.pos.x + offsetX, link.pos.y + offsetY);
    con.lineTo(link.next.pos.x + offsetX, link.next.pos.y + offsetY);
    con.stroke();

    // draw the prior link
    dx = link.prior.pos.x - link.pos.x;
    dy = link.prior.pos.y - link.pos.y;
    if (Math.abs(dy / dx) > 1) {
      offsetX = VERTEX_RADIUS;
      offsetY = 0;
    } else {
      offsetX = 0;
      offsetY = VERTEX_RADIUS;
    }
    con.strokeStyle = PRIOR_COLOR;
    con.beginPath();
    con.moveTo(link.pos.x - offsetX, link.pos.y - offsetY);
    con.lineTo(link.prior.pos.x - offsetX, link.prior.pos.y - offsetY);
    con.stroke();

    // draw the vertex
    con.beginPath();
    con.arc(link.pos.x, link.pos.y, VERTEX_RADIUS, 0, PI2);
    con.fill();
    link = link.next;

    // draw the index number beside the vertex -- TO DO
  }
  requestAnimationFrame(animate);
}

/**
 * Select the link that is closest to the position that is right-clicked.
 * Store that as the "first" link. And when a second link is right-clicked, you
 * swap the two positions;
 * @param {*} e
 */
function handleCM(e) {
  e.preventDefault();
  if (!first) {
    first = {
      x: e.layerX,
      y: e.layerY,
    };
  } else {
    list.swap(
      list.getLinkByPosition(first.x, first.y),
      list.getLinkByPosition(e.layerY, e.layerY)
    );
    first = null;
  }
}

function handleClick(e) {
  e.preventDefault();
  list.append(e.layerX, e.layerY);
}

function resize() {
  can.width = window.innerWidth - 10;
  can.height = window.innerHeight - 10;
  list.head.pos.x = 0;
  list.head.pos.y = can.height / 2;
  list.tail.pos.x = can.width;
  list.tail.pos.y = can.height / 2;
}

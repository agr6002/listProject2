import Link from "./link.js";

export default class List {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.tail.prior = this.head;
  }
  append(x, y) {
    const link = new Link(x, y, this.tail.prior, this.tail);
    this.tail.prior = this.tail.prior.next = link;
  }

  console() {
    let link = this.head.next;
    while (link != this.foot) {
      console.log(link);
      link = link.next;
    }
  }

  /**
   * Gets the link that is closest to the given x, y coordinates.
   * @param {*} x
   * @param {*} y
   */
  getLinkByPosition(x, y) {
    let closestLink = this.head.next;
    let link = closestLink.next;
    while (link !== this.foot) {
      if (
        this.getPositive(x - link.pos.x) + this.getPositive(y - link.pos.y) <
        this.getPositive(x - closestLink.pos.x) +
          this.getPositive(y - closestLink.pos.y)
      ) {
        closestLink = link;
      }
      link = link.next;
    }
    return closestLink;
  }

  getPositive(value) {
    if (value > 0) {
      return value;
    } else {
      return -value;
    }
  }

  len() {
    let len = -1;
    let current = this.head;
    while (current !== this.tail) {
      len += 1;
      current = current.next;
    }
    return len;
  }

  /**
   * Shuffles all of the links into a random order.
   */
  shuffle() {
    for (let i = 0; i < this.len(); i++) {
      this.swap(
        this.getLinkByPosition(
          Math.floor(Math.random() * (window.innerWidth - 10)),
          Math.floor(Math.random() * (window.innerHeight - 10))
        ),
        this.getLinkByPosition(
          Math.floor(Math.random() * (window.innerWidth - 10)),
          Math.floor(Math.random() * (window.innerHeight - 10))
        )
      );
    }
    console.log("shuffle");
  }

  /**
   * Sorts the links by their index.
   */
  sort() {
    console.log(this.head);
    let link = this.head.next;
    let proir = this.head;
    for (let i = 1; i < this.len(); i++) {
      console.log(this.len());
      console.log(i);
      while (link.index != i) {
        if (link.index == i) {
          proir.next = link;
        }
        link = link.next;
        console.log(link);
      }
    }
    console.log("sort");
  }

  /**
   * Swap the links A and B in the list (don't just change their data);
   * @param {*} linkA
   * @param {*} linkB
   */
  swap(linkA, linkB) {
    let linkAprior = linkA.prior;
    let linkAnext = linkA.next;
    linkA.prior = linkB.prior;
    linkA.prior.next = linkA;
    linkA.next = linkB.next;
    linkA.next.prior = linkA;
    linkB.prior = linkAprior;
    linkB.prior.next = linkB;
    linkB.next = linkAnext;
    linkB.next.prior = linkB;
    console.log("swap");
  }
}

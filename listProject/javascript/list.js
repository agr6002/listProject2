import Link from "./link.js";

export default class List {
  constructor() {
    this.tail = null;
    this.head = null;
    this.current = null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  /**
   * Append an element at the end of the list.
   * Client must ensure that the list's capacity is not exceeded.
   * @param {*} data The element to be appended.
   */
  append(data) {
    if (this.tail) {
      this.tail = this.tail.setNext(new Link(data));
    } else {
      this.head = new Link(data);
      this.tail = this.head;
      this.current = this.head;
    }
  }

  /**
   * Remove all contents from the list, so it is once again empty.
   * Client is responsible for reclaiming storage used by the list elements.
   */
  clear() {
    let element = this.head;
    let ognext = element;
    while (element !== null) {
      ognext = element.getNext();
      element.setNext(null);
      element = ognext;
    }
    this.head = null;
    this.foot = null;
  }

  /**
   * @return The position of the current element.
   */
  currPos(element = this.current) {
    let notFound = true;
    let p = 0;
    let test = this.head;
    while (notFound) {
      if (test === element) {
        return p;
      } else if (p >= this.length() || element === null) {
        return "not found";
      }
      test = test.getNext();
      p += 1;
    }
  }

  /**
   * @return The current element.
   */
  getvalue() {
    return this.current;
  }

  /**
   * @returns The element at a position
   */
  elementAtPos(pos) {
    let element = this.head;
    for (let i = 1; i < pos; i++) {
      element = this.head.getNext();
    }
    return element;
  }

  /**
   * Insert an element at the current location.
   * Client must ensure that the list's capacity is not exceeded.
   * @param {*} item The element to be inserted.
   */
  insertCurr(item, element = this.current) {
    this.insert(item, currPos(element));
  }

  /**
   * Insert an element at a spacific position.
   * Client must ensure that the list's capacity is not exceeded.
   * @param {*} item The element to be inserted.
   */
  insert(item, pos) {
    if (this.length() < pos && pos < 0) {
      return false;
    }
    if (pos !== 0 && pos < this.length() - 1) {
      let element = this.elementAtPos(pos - 1);
      let ogNext = element.getNext();
      element.setNext(item);
      item.setNext(ogNext);
    } else if (pos !== 0) {
      this.elementAtPos(pos - 1).setNext(item);
    } else {
      item.setNext(this.head);
      this.head = item;
    }
  }

  /**
   * @return The number of elements in the list.
   */
  length() {
    let len = 1;
    let current = this.head;
    while (current !== this.tail) {
      len += 1;
      current = current.getNext();
    }
    return len;
  }

  /**
   * Set current position to the end of the list.
   */
  moveToEnd(element = this.current) {
    this.remove(element);
    this.insert(element, this.length);
  }

  /**
   * Set current position.
   * @param {*} pos The position to make current.
   */
  moveToPos(pos, element = this.current) {
    this.remove(element);
    this.insert(element, pos);
  }

  /**
   * Set current position to the start of the list.
   */
  moveToStart(element = this.current) {
    this.remove(element);
    this.insert(element, 0);
  }

  /**
   * Move current position one step right.  No change if already at end.
   */
  next() {
    if (!this.current.getNext()) {
      return this.current;
    } else {
      return (this.current = this.current.getNext());
    }
  }

  /**
   * Move current position one step left.  No change if already at beginning.
   */
  prev() {
    if (!this.elementAtPos(this.currPos(this.current) - 1)) {
      return this.current;
    } else {
      return (this.current = this.elementAtPos(this.currPos(this.current) - 1));
    }
  }

  /**
   * Remove and return the current element.
   * @return The element that was removed.
   */
  remove(element = this.current) {
    const e1 = this.elementAtPos(this.currPos(element) - 1);
    const e2 = this.elementAtPos(this.currPos(element) + 1);
    e.setNext(e2);
  }
}

let nextIndex = 0;

export default class Link {
  constructor(x, y, prior, next) {
    this.index = nextIndex++;
    this.pos = { x: x, y: y };
    this.prior = prior;
    this.next = next;
  }
}

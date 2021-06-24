export default class Link {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  getChain() {
    console.log(this.getData());
    if (this.getNext()) {
      this.getNext().getChain();
    }
  }

  getData() {
    return this.data;
  }

  getNext() {
    return this.next;
  }

  // getPos() {
  //   return this.pos;
  // }
  3;

  setData(data) {
    return (this.data = data);
  }

  setNext(next) {
    return (this.next = next);
  }

  // setPos(pos) {
  //   return (this.pos = pos);
  // }
}

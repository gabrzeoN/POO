export default class Ram {
  constructor(space){
    this.space = space;
  }

  free(space) {
    this.space += space;
  }

  alloc(space) {
    this.space -= space;
  }
}
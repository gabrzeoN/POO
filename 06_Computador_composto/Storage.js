export default class Storage {
  constructor(storage){
    this.storage = storage;
    this.programs = [];
  }

  install(program) {
    const { size } = program;
    if (this.storage >= size) {
      this.programs.push(program);
      this.storage -= size;
    } else {
      console.log("You don't have enough space on storage.");
    }
  }

  desinstall(programName) {
    this.programs = this.programs.filter({ name } !== programName);
  }

  getProgram(programName) {
    return this.programs.find(({ name }) => name === programName);
  }

}
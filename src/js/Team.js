export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж есть');
    }
    this.members.add(member);
  }

  [Symbol.iterator]() {
    const teamArr = this.members;
    let current = -1;
    return {
      next() {
        current += 1;
        if (teamArr[current] === undefined) {
          return {
            done: true,
          };
        }
        return {
          value: teamArr[current],
          done: false,
        };
      },
    };
  }
}

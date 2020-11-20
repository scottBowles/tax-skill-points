export class Tax {
  constructor(public name: string, public points: number) {}

  incrementPoints() {
    this.points += 1;
  }

  decrementPoints() {
    this.points -= 1;
  }

  changeName(name: string) {
    this.name = name;
  }
}

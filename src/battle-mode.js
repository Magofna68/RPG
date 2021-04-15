export class BattleMode {
  constructor(heroes, villains) {
    this.heroes = heroes;
    this.villains = villains;
    this.turn = "heroes";
  }

  changeTurn() {
    if (this.turn === "heroes") {
      this.turn = "villains"
    } else {
      this.turn = "heroes"
    }
  }
}

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

  checkForDeath() {
    let anyoneDead = false
    this.heroes.forEach(function(person) {
      anyoneDead = hasDied(person)
    })
    this.villains.forEach(function(person) {
      anyoneDead = hasDied(person)
    })
  }

  hasDied(person) {
    if (person.health <= 0) {
      return true
    } else {
      return false
    }
  }

}
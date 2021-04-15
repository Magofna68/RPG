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

  hasAnyoneDied() {
    let anyoneDead = false
    this.heroes.forEach(person => {
      anyoneDead = person.health <= 0
    })
    this.villains.forEach(person => {
      anyoneDead = person.health <= 0
    })
    return anyoneDead
  }

  dealDamage(character, damage) {
    character.health = character.health - damage
  }
}

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
      console.log("HERO DEAD?",person)
      anyoneDead = person.health <= 0
    })
    if (anyoneDead) {
      return true
    }
    this.villains.forEach(person => {
      console.log("VILLAIN DEAD?",person)
      anyoneDead = person.health <= 0
    })
    return anyoneDead
  }

  dealDamage(character, damage) {
    character.health = character.health - damage
  }
}

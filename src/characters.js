import { Person, Spell } from './classes.js'

export class Mage extends Person {
  constructor(health, attack, speed, defense, stamina) {
    super(60, 50, speed, 60, stamina)
    this.mana = 100;
    this.spells = [
      new Spell("Fireball",25,20,30),
      new Spell("Magic Missile", 50, 20, 0),
      new Spell("Stamina Regen", 0, 20, 50)
    ];
  }
}

export class Troll extends Person {
  constructor(health, attack, speed, defense, stamina) {
    super(150, 22, 5, defense, stamina)
  }
}

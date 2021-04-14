export class Person {
  constructor() {
    this.health = 100;
    this.attack = 100;
    this.speed = 100;
    this.defense = 100;
    this.stamina = 100;
    // Range?
    this.inventory = {
      armor: [],
      weapons: [],
      potions: [],
    };
  }
}

export class Weapon {
  constructor(type, attack, range, weight) {
    this.type = type;
    this.attack = attack;
    this.range = range;
    this.weight = weight;
  }
}


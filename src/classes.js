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

export class Attack {
  constructor(type, attack, range) {
    this.type = type;
    this.attack = attack;
    this.range = range;
  }
}

export class Weapon extends Attack {
  constructor(weight) {
    super()
    this.weight = weight;
  }
}

export class Spell extends Attack {
  constructor(mana) {
    super();
    this.mana = mana;
  }
}

export class Armor {
  constructor(type, weight, bodyPart, defense) {
    this.type = type
    this.weight = weight
    this.bodyPart = bodyPart
    this.defense = defense
  }
}

export class MagicUser extends Person {
  constructor() {
    super()
    this.mana = 100;
    this.spells = [
      // new Spell("Magic Missile", 50, 20, 0),
      // new Spell("Stamina Regen", 0, 20, 50)
    ];
  }
}

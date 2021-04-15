export class Person {
  constructor(health, attack, speed, defense, stamina) {
    this.health = health || 100;
    this.attack = attack || 100;
    this.speed = speed || 100;
    this.defense = defense || 100;
    this.stamina = stamina || 100;
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
  constructor(type, attack, range, weight) {
    super(type, attack, range)
    this.weight = weight;
  }
}

export class Spell extends Attack {
  constructor(type, attack, range, mana) {
    super(type, attack, range);
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

export class Mage extends Person {
  constructor(health, attack, speed, defense, stamina) {
    super(health, attack, speed, defense, stamina)
    this.mana = 100;
    this.spells = [
      new Spell("Fireball",25,20,30),
      new Spell("Magic Missile", 50, 20, 0),
      new Spell("Stamina Regen", 0, 20, 50)
    ];
  }
}

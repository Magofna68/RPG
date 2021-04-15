import { Attack, Person, Weapon, Armor, Mage } from '../src/classes.js'

describe('PersonClass', () => {
  let myPerson;
  beforeEach(() => {
    myPerson = new Person()
  })

  test('should correctly create a Person Class', () => {
    expect(myPerson).toBeDefined();
  })

  test('Person class should have health property', () => {
    expect(myPerson.health).toBeDefined()
  })

  test('Person class should have health default value of 100', () => {
    expect(myPerson.health).toEqual(100)
  })

  test('Person class should have attack default value of 100', () => {
    expect(myPerson.attack).toEqual(100)
  })

  test('Person class should have speed default value of 100', () => {
    expect(myPerson.speed).toEqual(100)
  })

  test('Person class should have defense default value of 100', () => {
    expect(myPerson.defense).toEqual(100)
  })

  test('Person class should have stamina default value of 100', () => {
    expect(myPerson.stamina).toEqual(100)
  })

  test('Person class should contain an inventory object', () => {
    expect(myPerson.inventory).toBeDefined()
  })

  test('Inventory object contains armor', () => {
    expect(myPerson.inventory.armor).toBeDefined()
  })

  test('Inventory object contains weapons', () => {
    expect(myPerson.inventory.weapons).toBeDefined()
  })

  test('Inventory object contains potions', () => {
    expect(myPerson.inventory.potions).toBeDefined()
  })
})

describe('AttackClass', () => {
  let myAttack;
  beforeEach(() => {
    myAttack = new Attack("sword", 20, 5)
  })

  test('Attack constructor class should exist', () => {
    expect(myAttack).toBeDefined();
  })

  test('Attack Class has property Attack Type', () => {
    expect(myAttack.type).toBeDefined()
  })

  test('Attack Class has property attack', () => {
    expect(myAttack.attack).toBeDefined()
  })

  test('Attack Class has property range', () => {
    expect(myAttack.range).toBeDefined()
  })
})

describe('WeaponClass', () => {
  let myWeapon;
  beforeEach(() => {
    myWeapon = new Weapon("sword",20,5,15)
  })

  test('a Weapon constructor class should exist', () => {
    expect(myWeapon).toBeDefined();
  })

  test('WeaponClass has property weaponType', () => {
    expect(myWeapon.type).toBeDefined()
  })

  test('WeaponClass has property attack', () => {
    expect(myWeapon.attack).toBeDefined()
  })

  test('WeaponClass has property range', () => {
    expect(myWeapon.range).toBeDefined()
  })

  test('WeaponClass has property weight', () => {
    expect(myWeapon.weight).toBeDefined()
  })
})

describe('armorClass', () => {
  let myArmor;
  beforeEach(() => {
    myArmor = new Armor("helmet", 20, "head", 10)
  })

  test("Armor should exist", () => {
    expect(myArmor).toBeDefined()
  })

  test("Armor has a type", () => {
    expect(myArmor.type).toBeDefined()
  })

  test("Armor has a weight", () => {
    expect(myArmor.weight).toBeDefined()
  })

  test("Armor has a bodyPart", () => {
    expect(myArmor.bodyPart).toBeDefined()
  })

  test("Armor has a defense", () => {
    expect(myArmor.type).toBeDefined()
  })
})

describe("Mage", () => {
  let myMage

  beforeEach(() => {
    myMage = new Mage()
  })

  test("Mage should exist", () => {
    expect(myMage).toBeDefined()
  })

  test("Mage should exist should extend Person", () => {
    expect(myMage.health).toBeDefined()
  })

  test('Mage should have mana points property', () => {
    expect(myMage.mana).toEqual(100)
  })

  test('Mage should have array of spells', () => {
    expect(myMage.spells).toBeDefined();
  })
})


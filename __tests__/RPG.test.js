import { Person, Weapon } from '../src/classes.js'

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

describe('WeaponClass', () => {
  let myWeapon;
  beforeEach(() => {
    myWeapon = new Weapon("sword", 20, 5, 20)
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



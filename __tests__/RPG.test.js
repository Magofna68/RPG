import { Person } from '../src/classes.js'

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

})




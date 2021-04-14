import { Person } from '../src/classes.js'

describe('PersonClass', () => {

  test('should correctly create a Person Class', () => {
    const examplePerson = new Person()
    expect(examplePerson).toBeDefined();
  })

  test('Person class should have health property', () => {
    const myHealth = new Person() 
    expect(myHealth.health).toBeDefined()
  })
})




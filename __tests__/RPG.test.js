import { Person } from '../src/classes.js'

describe('PersonClass', () => {

  test('should correctly create a Person Class', () => {
    const examplePerson = new Person()
    expect(examplePerson).toBeDefined();
  })
})




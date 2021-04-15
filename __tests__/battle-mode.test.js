import { BattleMode } from '../src/battle-mode.js'
import { Mage, Troll } from '../src/characters.js'

describe("Battle Mode", () => {
  let myBattleMode;
  let myMage;
  let myTroll;

    beforeEach(() => {
      myMage = new Mage()
      myTroll = new Troll()
      myBattleMode = new BattleMode([myMage],[myTroll])
    })
  test("BattleMode class exists", () => {
    expect(myBattleMode).toBeDefined()
  })

  test("BattleMode has heroes property", () => {
      expect(myBattleMode.heroes).toBeDefined()
  })

  test("BattleMode has villains property", () => {
    expect(myBattleMode.villains).toBeDefined()
  })

  test('BattleMode has turn property', () => {
    expect(myBattleMode.turn).toBeDefined()
  })

  test("BattleMode has a changeTurn method", () => {
    expect(myBattleMode.changeTurn).toBeDefined()
  })

  test('BattleMode changes the turn', () => {
    myBattleMode.changeTurn()
    expect(myBattleMode.turn).toEqual("villains")
  })

  test('BattleMode changes the turn', () => {
    myBattleMode.changeTurn()
    myBattleMode.changeTurn()
    expect(myBattleMode.turn).toEqual("heroes")
  })

  test("hasAnyoneDied method should return true if any player health is below zero", () => {
    const myDeadTroll = new Troll()
    myDeadTroll.health = 0
    const myDeadBattleMode = new BattleMode([myDeadTroll],[])
    expect(myDeadBattleMode.hasAnyoneDied(myDeadBattleMode)).toBeTruthy()
  })

  test("BattleMode dealDamage should reduce the health of a character", () => {
    const initialHealth = myTroll.health
    myBattleMode.dealDamage(myTroll, myMage.attack)
    expect(myTroll.health).toBeLessThan(initialHealth)
  })
})


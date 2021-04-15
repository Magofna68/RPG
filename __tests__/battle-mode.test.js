import { BattleMode } from '../src/battle-mode.js'
import { Attack, Person, Weapon, Armor, MagicUser, Mage } from '../src/classes.js'

describe("Battle Mode", () => {
  let myBattleMode;
  let myMage;
  let myTroll;

    beforeEach(() => {
      myBattleMode = new BattleMode([],[])
      myMage = new Mage()
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

})

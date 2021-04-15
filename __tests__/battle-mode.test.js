import { BattleMode } from '../src/battle-mode.js'

describe("Battle Mode", () => {
  let myBattleMode;
  let myMage;
  let myTroll;

    beforeEach(() => {
      myBattleMode = new BattleMode([],[])
      
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

import { BattleMode } from '../src/battle-mode.js'

describe("Battle Mode", () => {

  test("BattleMode class exists", () => {
    const myBattleMode = new BattleMode()
    expect(myBattleMode).toBeDefined()
  })

})

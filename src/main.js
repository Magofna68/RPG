import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import { BattleMode } from './battle-mode.js'
import { Mage, Troll } from './characters.js'

// intiialize the game
const myMage = new Mage()
const myTroll = new Troll()
const myBattle = new BattleMode([myMage], [myTroll])
$(".turn").text(`It is the ${myBattle.turn} turn!`)
updateStats()

function updateStats() {
  $('.h-health').text(myMage.health)
  $('.h-mana').text(myMage.mana)
  $('.h-stamina').text(myMage.stamina)
  $('.h-attack').text(myMage.attack)

  $('.v-health').text(myTroll.health)
  $('.v-mana').text(myTroll.mana)
  $('.v-stamina').text(myTroll.stamina)
  $('.v-attack').text(myTroll.attack)
}

function gameOver() {
  // hide both teams
  $(".heroes").hide()
  $(".villains").hide()
  // hide the buttons
  $(".btn").hide()
  // show the winner
  $(`.${myBattle.turn}`).show();
  // myBattle.turn // who was the winner
  // show some winning text
  $(".turn").text("CONGRATS!!!!!")
  console.log("GAME OVER MAN")
}

function getCharacters() {
  if (myBattle.turn === "heroes") {
    return [myMage, myTroll]
  } else {
    return [myTroll, myMage]
  }
}

$('.attack-button').click(() => {
  console.log("attack!")
  const [ attacker, defender ] = getCharacters()
  myBattle.dealDamage(defender, attacker.attack)
  const isDead = myBattle.hasAnyoneDied()
  console.log("someone dead?",isDead)
  if (isDead) return gameOver()
  updateStats()
  myBattle.changeTurn()
  $(".turn").text(`It is the ${myBattle.turn} turn!`)
})

$('.potion-button').click(() => {
  console.log("potion!")
  /* eslint-disable no-unused-vars */
  const [ currentCharacter, defender ] = getCharacters()
  currentCharacter.health = currentCharacter.health + 20
  /* eslint-enable */
  updateStats()
  myBattle.changeTurn()
  $(".turn").text(`It is the ${myBattle.turn} turn!`)
})

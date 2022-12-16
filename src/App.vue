<style>
  @import './css/style.css';
</style>

<template>
  <div class="snowpitytotal">You currently have {{format(player.snowpity)}} Snowpities stored!</div>
  <div class="snowpity-container">
    <div class="earthpity">
      Your Earthpony mares have gathered you {{format(player.earthpity)}} Snowpities so far!
    </div>
    <div class="pegapity">
      Your Pegasus mares have gathered you {{format(player.pegapity)}} Snowpities so far!
    </div>
    <div class="unipity">
      Your Unicorn mares have gathered you {{format(player.unipity)}} Snowpities so far!
    </div>
  </div>
  <div class="mares-container">
    <div class="earthmares">
      <div class="mare earthmare" v-for="(earthmares, idx) in player.earthmares" :key="earthmares">
        <h4>{{earthmares.name}}</h4>
        <span class="mareamount">Amount: {{format(earthmares.amount)}} </span>
        <span class="maremult"> Mult: x{{format(earthmares.mult)}}</span>
        <span class="marecost">Cost: {{format(earthmares.cost)}} Snowpities</span>
        <button @click="BuyEarthMare(idx)">Buy 1</button>
      </div>
    </div>
    <div class="pegamares">
      <div class="mare pegamare" v-for="(pegamares, idx) in player.pegamares" :key="pegamares">
        <h4>{{pegamares.name}}</h4>
        <span class="mareamount">Amount: {{format(pegamares.amount)}} </span>
        <span class="maremult"> Mult: x{{format(pegamares.mult)}}</span>
        <span class="marecost">Cost: {{format(pegamares.cost)}} Snowpities</span>
        <button @click="BuyPegaMare(idx)">Buy 1</button>
      </div>
    </div>
    <div class="unimares">
      <div class="mare unimare" v-for="(unimares, idx) in player.unimares" :key="unimares">
        <h4>{{unimares.name}}</h4>
        <span class="mareamount">Amount: {{format(unimares.amount)}} </span>
        <span class="maremult"> Mult: x{{format(unimares.mult)}}</span>
        <span class="marecost">Cost: {{format(unimares.cost)}} Snowpities</span>
        <button @click="BuyUniMare(idx)">Buy 1</button>
      </div>
    </div>
  </div>
</template>

<script>

import format from '@/js/format.js'
import gameLoop from '@/js/loop.js'
import player from '@/js/player.js'

export default {
  name: 'App',
  data() {
    return {
      player: player
    }
  },
  methods: {
    BuyEarthMare(index){
      let g = this.player.earthmares[index]
      if (g.cost > this.player.snowpity) return
      this.player.snowpity -= g.cost
      this.player.earthmares[index].cost *= 1 + (index + 1) * 0.25
      this.player.earthmares[index].amount += 1
      this.player.earthmares[index].bought += 1
    },
    BuyPegaMare(index){
      let g = this.player.pegamares[index]
      if (g.cost > this.player.snowpity) return
      this.player.snowpity -= g.cost
      this.player.pegamares[index].cost *= 1 + (index + 1) * 0.25
      this.player.pegamares[index].amount += 1
      this.player.pegamares[index].bought += 1
    },
    BuyUniMare(index){
      let g = this.player.unimares[index]
      if (g.cost > this.player.snowpity) return
      this.player.snowpity -= g.cost
      this.player.unimares[index].cost *= 1 + (index + 1) * 0.25
      this.player.unimares[index].amount += 1
      this.player.unimares[index].bought += 1
    },
    gameLoop(){
      gameLoop(this)
    },
    format(amount){
      return format(amount)
    }
  },
  mounted() {
    setInterval(this.gameLoop, 50)
  }
}

</script>
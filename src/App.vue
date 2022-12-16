<template>
  <div class="snowpity-container">
    <div class="earthpity">
      You have {{player.snowpity}} Snowpities!
    </div>
    <div class="pegapity">

    </div>
    <div class="unipity">

    </div>
  </div>
  <div class="mares-container">
    <div class="earthmares">
      <div class="mare earthmare" v-for="earthmares in player.earthmares" :key="earthmares">
        {{earthmares.cost}}
      </div>
    </div>
    <div class="pegamares">

    </div>
    <div class="unimares">

    </div>
  </div>
</template>

<script>

import player from '@/js/player.js'

export default {
  name: 'App',
  data() {
    return {
      player: player
    }
  }
}

</script>
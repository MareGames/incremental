<script>
export default {
  name: 'PlayerData',
}

var player = {
    snowpity: 10,
    earthpity: 0,
    pegapity: 0,
    unipity: 0,
    earthmares: [],
    pegamares: [],
    unimares: []
}

var firstEarthmare = {
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0
}

player.earthmares.push(firstEarthmare)
</script>
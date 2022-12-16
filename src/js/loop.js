
function gameLoop(that) {
    let diff = (Date.now() - that.player.lastUpdate) / 1000
    var value = that.player.earthmares[0].amount * that.player.earthmares[0].mult * diff
    that.player.earthpity += value
    that.player.snowpity += value
    that.player.lastUpdate = Date.now()
}

export default gameLoop
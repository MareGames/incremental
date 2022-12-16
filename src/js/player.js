var player = {
    snowpity: 999,
    earthpity: 0,
    pegapity: 0,
    unipity: 0,
    earthmares: [],
    pegamares: [],
    unimares: [],
    lastUpdate: Date.now()
}

var firstEarthmare = {
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Gardening I"
}

var firstPegamare = {
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Flying I"
}

var firstUnimare = {
    cost: 10,
    mult: 1,
    amount: 0,
    bought: 0,
    name: "Spelling I"
}

player.earthmares.push(firstEarthmare)
player.pegamares.push(firstPegamare)
player.unimares.push(firstUnimare)

export default player
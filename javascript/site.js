import Character from "./characterCreation/character.js"
import Selector from "./elements/selector.js"

const character = new Character()
let oSelector
let c1Selector
let c2Selector

$(async () => {
    await character.load()
    oSelector = new Selector("OriginSelector", character.data.origins.origins, (option) => {  })
    c1Selector = new Selector("Career1Selector", character.data.careers.careers, (option) => { })
    c2Selector = new Selector("Career2Selector", character.data.careers.careers, (option) => { })
    $("#characters").append(oSelector.selector)
    $("#characters").append(c1Selector.selector)
    $("#characters").append(c2Selector.selector)
})
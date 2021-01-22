import Character from "./characterCreation/character.js"
import OriginSelector from "./elements/originSelector.js"

const character = new Character()
const originSelector = new OriginSelector(character)

$(async () => {
    await character.load()
    originSelector.load()
    // character.generate()
    // character.map()
})
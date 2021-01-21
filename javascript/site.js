import Character from "./characterCreation/character.js"

const character = new Character()

$(async () => {
    await character.load()
    character.generate()
    character.map()
})
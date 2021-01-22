const Funcs = Object.freeze({
    createElement: (list) => {
        let ele = $("<select id='originSelector'></select>")
        const create = (text) => {
            let ele = $("<option></option>")
            ele.text(text)
            ele.attr("name", text)
            return ele
        }
        let options = list.map(obj => obj.name)
        options.sort()
        for (let option of options) {
            let selection = create(option)
            ele.append(selection)
        }
        return ele
    }
})

export default class {
    constructor(character) {
        this.character = character
    }
    load() {
        this.element = Funcs.createElement(this.character.data.origins.origins)
        $("#characters").append(this.element)
    }
}
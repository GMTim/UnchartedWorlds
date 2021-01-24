import Common from "../common.js"

const Funcs = Object.freeze({
    create: {
        selector: (id) => {
            return $(`<select id="${id}"></select>`)
        },
        option: (value) => {
            return $(`<option type="${value}">${value}</option>`)
        }
    },
    make: (id, list, property) => {
        let selector = Funcs.create.selector(id)
        const sortedList = Common.sort(list, property)
        for (let item of sortedList) {
            selector.append(Funcs.create.option(item[property]))
        }
        return selector
    }
})

export default class {
    constructor(id, list, chosen) {
        this.metadata = {
            id: id,
            list: list,
            chosen: chosen
        }
        this.selector = Funcs.make(this.metadata.id, this.metadata.list, "name")
        $(this.selector).on("change", (event) => {
            event.preventDefault()
            chosen(event.currentTarget.value)
        })
        chosen(list[0]["name"])
    }
}
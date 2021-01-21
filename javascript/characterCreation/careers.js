import Common from "../common.js"

export default class {
    async load() {
        this.careers = await Common.load("careers")
    }
    generate() {
        const first = Common.random(this.careers)
        let second
        do {
            second = Common.random(this.careers)
        } while (second == first)
        let items = Common.sort([first, second], "name")
        // items.sort((a, b) => {
        //     if (a.name < b.name) { return -1 }
        //     if (a.name > b.name) { return 1 }
        //     return 0
        // })
        return items
    }
}
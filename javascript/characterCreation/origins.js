import Common from "../common.js"

export default class {
    async load() {
        this.origins = await Common.load("origins")
    }
    generate() {
        return Common.random(this.origins)
    }
}
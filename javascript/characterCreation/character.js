import Careers from "./careers.js"
import Origins from "./origins.js"

export default class {
    async load() {
        this.data = {
            careers: new Careers(),
            origins: new Origins()
        }
        await this.data.careers.load()
        await this.data.origins.load()
    }
    generate() {
        this.careers = this.data.careers.generate()
        this.origin = this.data.origins.generate()
        return this
    }
    map() {
        const ele = (value) => { 
            let ele = $("<div></div>")
            ele.text(value)
            return ele
         }
         let parent = $("#characters")
         parent.append(ele("Origin: " + this.origin.name))
         parent.append(ele("Career One: " + this.careers[0].name))
         parent.append(ele("Career Two: " + this.careers[1].name))
         parent.append($("<br />"))
         parent.append(ele(JSON.stringify(this.origin)))
         parent.append($("<br />"))
         parent.append(ele(JSON.stringify(this.careers[0])))
         parent.append($("<br />"))
         parent.append(ele(JSON.stringify(this.careers[1])))
    }
}
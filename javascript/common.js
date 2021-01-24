const Func = {
    load: async (value) => {
        return new Promise((resolve, reject) => {
            const path = value
            $.getJSON(path, (data) => {
                resolve(data)
            }).fail((error) => {
                resolve(error)
            })
        })
    }
}

export default Object.freeze({
    load: async (file) => {
        return await Func.load("./data/" + file + ".json")
    },
    loadHTML: async (file) => {
        return await Func.load("./html/" + file + ".html")
    },
    random: (list) => {
        return list[Math.floor(Math.random() * list.length)]
    },
    sort: (list, property) => {
        list.sort((a, b) => {
            if (a[property] < b[property]) { return -1 }
            if (a[property] > b[property]) { return 1 }
            return 0
        })
        return list
    }
})
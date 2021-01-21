export default Object.freeze({
    load: async (file) => {
        return new Promise((resolve, reject) => {
            const path = "./data/" + file + ".json"
            $.getJSON(path, (data) => {
                resolve(data)
            }).fail((error) => {
                resolve(error)
            })
        })
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
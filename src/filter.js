export const filter = (data, condicion) => {

    const resultFilter = data.filter (element => {
        return element.director.includes(condicion)
    })
    return resultFilter
}
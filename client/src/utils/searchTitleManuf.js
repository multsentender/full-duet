export const searchTitleManuf = (manufactured, id) => {
    const obj = manufactured.find(el => el._id === id)
    return obj.title
}
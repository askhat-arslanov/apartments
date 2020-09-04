export default class DTO {
  parseGetFlatListResponse(data = {}) {
    const { response = [] } = data
    const flatList = []

    response.forEach(({ id, attributes = {}, relationships = {} }) => {
      flatList.push({
        id,
        title: attributes.title,
        rooms: attributes.rooms,
        address: attributes.address,
        area: attributes.area,
        unit: attributes.unit,
        landlordType: relationships.type,
        landlordName: `${relationships.attributes.first_name} ${relationships.attributes.last_name}`
      })
    })

    return flatList
  }
}

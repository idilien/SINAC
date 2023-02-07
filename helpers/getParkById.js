import { ListParks } from "../data/parks"





export const getParkById = (id) => {

  return ListParks.find(park => park.id === id)
}

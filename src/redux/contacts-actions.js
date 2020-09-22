import { DELETE, FILTER, GET } from "./contacts-types"
import { v4 as uuidv4 } from "uuid";

const getContacts = item => ({
  type: GET,
    payload: {
        id:uuidv4(),
        name: item.name,
        number:item.number
    },
});
const deleteContact = id => ({
    type: DELETE,
    payload: {
        id
    },
})

const getFilter = filter => ({
    type: FILTER,
    payload:{filter}
})
export default { getContacts, deleteContact,getFilter }
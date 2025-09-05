import BASEURL from "./baseURL";
import commonAPI from "./commonAPI";


export const addContactAPI = async (contacts) => {
    return await commonAPI("POST", `${BASEURL}/allContacts`, contacts)

}

export const getContactAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/allContacts`, {})

}

export const deleteContactAPI = async (id) => {
    return await commonAPI("DELETE", `${BASEURL}/allContacts/${id}`, {})
 
}

export const editContactAPI = async (id,contacts) => {
    return await commonAPI("PUT", `${BASEURL}/allContacts/${id}`, contacts)
 
}

export const getUpdateContactAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/allContacts/${id}`, {})

}
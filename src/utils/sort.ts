import Contact from "../model/contact";

export const sortIdByDecresingOrder = (contacts: Contact[]) => {
    return contacts.sort((a:Contact, b:Contact) => Number(b.id) - Number(a.id))
};

export const sortIdByIncreasingOrder = (contacts: Contact[]) => {
    return contacts.sort((a:Contact, b:Contact) => Number(a.id) - Number(b.id))
};
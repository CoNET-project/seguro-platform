import {useEffect, useRef, useState} from "react";
import {Contacts} from "../contexts/messenger/messengerReducer";
import {Contact} from "../contexts/messenger/messengerActions";

export const useDidMountEffect = (func: () => void, deps: any) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

type CategorizedContacts = {
    [startsWith: string]: { [keyId: string]: Contact }
}

export const useCategorizeContact = (contacts: Contacts) => {

    const createNewCategoryObject = () => {
        const categories: CategorizedContacts = {}
        for (let i = 65; i <= 90; i++) {
            categories[String.fromCharCode(i)] = {}
        }

        categories["#"] = {}
        return categories
    }

    const categories = createNewCategoryObject()


    const [categorizedContacts, setCategorizedContacts] = useState<CategorizedContacts>(categories)

    useEffect(() => {
        const categories: CategorizedContacts = createNewCategoryObject()
        for (let key in contacts) {
            let firstChar

            if (contacts[key].nickname) {
                firstChar = contacts[key].nickname[0].toUpperCase()
            } else if (contacts[key].alias) {
                firstChar = contacts[key].alias[0].toUpperCase()
            } else {
                firstChar = "#"
            }

            const previous = categories[firstChar]
            categories[firstChar] = {
                ...previous,
                [key]: contacts[key]
            }
        }

        setCategorizedContacts(categories)
    }, [contacts])

    return [categorizedContacts]
}
import styled from "styled-components";
import {isObjectEmpty} from "../../../../../../../../utilities/utilities";
import ListItem from "../../../../../../../UI/Messenger/Contact/ListItem";
import {useMessengerContext} from "../../../../../../../../contexts/messenger/MessengerContext";
import {useCategorizeContact} from "../../../../../../../../utilities/hooks";
import {Contact} from "../../../../../../../../contexts/messenger/messengerActions";
import SearchBar from "../../../../../../../UI/SearchBar/SearchBar";
import {Overlay} from "../../../../../../../UI/Common/Overlay/Overlay";
import {useEffect, useState} from "react";
import {SearchResults} from "../../../../../../../UI/SearchBar/SearchResult/SearchResult";
import Image from "../../../../../../../UI/Common/Profile/Image/Image";

const StyledContactList = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
`

const StyledSectionTitle = styled.p`
  width: 100%;
  text-align: left;
  padding: 7.5px 15px;
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} - 2px);
  opacity: 0.5;
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
  font-family: 'Lato Bold', sans-serif;
`

const CustomOverlay = styled(Overlay)`
  background-color: transparent;
  z-index: ${props => props.show ? 197 : -1}
`

type ContactListProps = {
    onClick?: (contact: Contact) => void
}

const ContactList = ({onClick}: ContactListProps) => {
    const {contacts} = useMessengerContext()

    const [categorizedContact] = useCategorizeContact(contacts)

    const [showOverlay, setShowOverlay] = useState(false)

    const [results, setResults] = useState<{ [keyId: string]: Contact }>({})

    useEffect(() => {
        if (!showOverlay) {
            setResults({})
        }
    }, [showOverlay])

    const renderList = () => {
        const componentList: JSX.Element[] = []
        for (let key in categorizedContact) {
            if (!isObjectEmpty(categorizedContact[key])) {
                componentList.push(<StyledSectionTitle key={`contact-list-${key}`}>{key}</StyledSectionTitle>)
                Object.values(categorizedContact[key]).map((contact) => {
                    componentList.push(
                        <ListItem key={contact.keyId}
                                  contact={contact}
                                  onClick={() => onClick && onClick(contact)}/>
                    )
                })
            }
        }
        return componentList
    }

    // Needs fixing
    const onSearch = (value: string) => {
        setResults({})
        if (value) {
            const firstChar = value[0].toUpperCase()
            if (categorizedContact[firstChar]) {
                console.log(categorizedContact[firstChar])
                Object.values(categorizedContact[firstChar]).map(contact => {
                    if (contact.nickname && contact.nickname.toLowerCase().includes(value)) {
                        setResults(prevResult => {
                            return {
                                ...prevResult,
                                [contact.keyId]: contact
                            }
                        })
                    } else if (contact.alias && contact.alias.toLowerCase().includes(value)) {
                        setResults(prevResult => {
                            return {
                                ...prevResult,
                                [contact.keyId]: contact
                            }
                        })
                    } else {
                        if (contact.keyId.toLowerCase().includes(value)) {
                            setResults(prevResult => {
                                return {
                                    ...prevResult,
                                    [contact.keyId]: contact
                                }
                            })
                        }
                    }
                })
            }
        }
    }

    const generateResultsComponents = () => {
        console.log(results)
        const searchResults: SearchResults[] = []
        Object.values(results).map(result => {
            searchResults.push({
                leftComponent: <Image size={30} src={result.profileSrc}/>,
                rightText: result.nickname || result.alias || result.keyId,
                onClick: () => console.log("hey")
            })
        })
        return searchResults
    }

    return (
        <StyledContactList>
            <SearchBar onFocus={setShowOverlay} onSearch={onSearch} results={generateResultsComponents()}/>
            <CustomOverlay show={showOverlay}/>
            {
                renderList().map(item => item)
            }
        </StyledContactList>
    )
}

export default ContactList
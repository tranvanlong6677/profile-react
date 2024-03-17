import { Accordion } from "react-bootstrap"
import { ItemBasicInformation } from "."


const ItemBasicInformationComponent = (props: ItemBasicInformation) => {
    const { headerTitle, content, eventKey } = props
    return (
        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{headerTitle}</Accordion.Header>
                <Accordion.Body>
                    <b> {content}</b>

                </Accordion.Body>
            </Accordion.Item >
        </>
    )
}

export default ItemBasicInformationComponent
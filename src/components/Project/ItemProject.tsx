import { Accordion } from "react-bootstrap"
import { IProject } from "."
import { Fragment } from "react"

interface IProjectProps extends IProject {
    eventKey: number
}
const ItemProject = (props: IProjectProps) => {
    const { name, time, customer, quantity, position, technology, details, eventKey } = props
    return <>
        <Accordion.Item eventKey={`${eventKey}`}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
                <div className="d-flex w-100">
                    <div className="field d-flex flex-column w-25">
                        <b>Thời gian</b>
                        <b>Khách hàng</b>
                        <b>Số lượng</b>
                        <b>Vị trí</b>
                        <b>Công nghệ sử dụng</b>
                        <b>Chi tiết</b>

                    </div>

                    <div className="value d-flex flex-column">
                        <b> {time}</b>
                        <b> {customer}</b>
                        <b> {quantity}</b>
                        <b> {position}</b>
                        <b> {technology?.map((item, index: number) => {
                            return (
                                <Fragment key={`item-${index}`}>{item}
                                    {index === technology.length - 1 ? <></> : <>,</>}
                                </Fragment>
                            )
                        })}</b>
                        <b> {details}</b>
                    </div>
                </div>


            </Accordion.Body>
        </Accordion.Item >
    </>
}
export default ItemProject
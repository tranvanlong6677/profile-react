import { Fragment } from "react"
import { Accordion, Container } from "react-bootstrap"
import ItemProject from "./ItemProject"

export interface IProject {
    name: string
    time: string
    customer: string
    quantity: number
    position: string
    technology: string[]
    details: string
}
const Index = () => {
    const arrData: IProject[] = [
        {
            name: "Matching",
            time: "01/2023 - 09/2023",
            customer: "Khách hàng Nhật",
            quantity: 10,
            position: "FRONTEND DEVELOPER",
            technology: ["ReactJS/Typescript", "Ant Design", "SASS", "Redux Toolkit"],
            details: "Dự án sử dụng ReactJS với Typescript ,sử dụng Ant Design và SASS để phát triển giao diện và logic trong giao diện, Redux Toolkit để quản lý State.",
        },
        {
            name: "Color",
            time: "01/2023 - 08/2023",
            customer: "Khách hàng Nhật",
            quantity: 8,
            position: "FRONTEND DEVELOPER",
            technology: ["ReactJS/Typescript", "Ant Design", "SASS", "Redux Toolkit"],
            details: "Chủ yếu sử dụng Ant Design và Sass để xử lý phần giao diện của phần Admin.",
        },
    ]
    return <>
        <Container className="mt-5">
            <h1 className="d-flex justify-content-center mb-5">Dự án</h1>
            <Accordion>
                {arrData?.map((item: any, index: number) => {
                    return (
                        <Fragment key={`item-${index}`}>
                            <ItemProject
                                {...item}
                                eventKey={index + 1}
                            />
                        </Fragment>

                    )
                }

                )}


            </Accordion>
        </Container >
    </>
}

export default Index
import { Fragment } from "react"
import { Accordion, Container } from "react-bootstrap"
import ItemSkill from "./ItemSkill"

export interface Skill {
    name: string
    skills: string[]
}
const Index = () => {
    const arrData: Skill[] = [
        {
            name: "Frontend", skills: [
                "Có kiến thức và kinh nghiệm với ReactJS/Typescript , Redux và Redux Toolkit.",
                "Có kiến thức và kinh nghiệm với Bootstrap, Ant Design."
            ]
        },
        {
            name: "Backend", skills: [
                "Có kiến thức và sản phẩm cá nhân thông qua các khóa học về ExpressJS, NestJS.",
                "Có kiến thức về MongoDB."
            ]
        },
        {
            name: "Các kỹ năng khác", skills: [
                "Có kiến thức cơ bản về Git",
                "Có khả năng tự đọc tài liệu, khả năng giải quyết vấn đề.",
                "Có kỹ năng làm việc nhóm và giao tiếp tốt trong công việc."
            ]
        },
    ]
    return <>
        <Container className="mt-5">
            <h1 className="d-flex justify-content-center mb-5">Các kỹ năng</h1>
            <Accordion>
                {arrData?.map((item: any, index: number) => {
                    return (
                        <Fragment key={`item-${index}`}>
                            <ItemSkill
                                {...item}
                                eventKey={index}
                            />
                        </Fragment>

                    )
                }

                )}
            </Accordion>
        </Container>
    </>
}

export default Index
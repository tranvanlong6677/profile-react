import { useState } from "react"
import { Button, Container, Form, Modal, Table } from "react-bootstrap"
import { SubmitHandler, useForm } from "react-hook-form"

interface Experience {
    company: string
    time: string
    position: string
    details: string
}
const Index = () => {
    const [experience, setExperience] = useState<Experience[]>([{
        company: "Moncow UX",
        time: "10/2022 - 08/2023",
        position: "FRONTEND DEVELOPER",
        details: "Phát triển phần Frontend trong dự án của công ty."
    }])
    const {
        register,
        handleSubmit,
    } = useForm<Experience>()
    const onSubmit: SubmitHandler<Experience> = (data: Experience) => {
        console.log(data)
        setExperience([...experience, data])
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container className="mt-5">
                <h1 className="d-flex justify-content-center mb-5">Kinh nghiệm làm việc</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Công ty</th>
                            <th>Thời gian</th>
                            <th>Vị trí</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        {experience?.map((item: Experience, index: number) => {
                            return (
                                <tr key={`item-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.company}</td>
                                    <td>{item.time}</td>
                                    <td>{item.position}</td>
                                    <td>{item.details}</td>
                                </tr>
                            )
                        })}


                    </tbody>
                </Table>

                <hr />
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thêm mới kinh nghiệm làm việc</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Công ty</Form.Label>
                                    <Form.Control type="text" placeholder="Công ty" {...register("company")} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Thời gian</Form.Label>
                                    <Form.Control type="text" placeholder="Thời gian" {...register("time")} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Vị trí</Form.Label>
                                    <Form.Control type="text" placeholder="Vị trí" {...register("position")} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Chi tiết</Form.Label>
                                    <Form.Control type="text" placeholder="Chi tiết" {...register("details")} />
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={handleClose}>
                                    Thêm mới
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <Button onClick={handleShow}>Thêm mới</Button>
            </Container>
        </>
    )


};

export default Index
import { Container, Table } from "react-bootstrap"

const Index = () => {
    return <>
        <Container className="mt-5">
            <h1 className="d-flex justify-content-center mb-5">Học vấn</h1>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <td className="col w-50">Thời gian:</td>
                        <td className="col w-50">08/2019 - HIện tại</td>
                    </tr>
                    <tr>
                        <td className="col w-50">Chuyên ngành:</td>
                        <td className="col w-50">Khoa học máy tính</td>
                    </tr>
                    <tr>
                        <td className="col w-50">Trường:</td>
                        <td className="col w-50">Đại học Bách Khoa Hà Nội</td>
                    </tr>
                    <tr>
                        <td className="col w-50">CPA:</td>
                        <td className="col w-50">2.8</td>
                    </tr>

                </tbody>
            </Table>
        </Container>

    </>
}

export default Index
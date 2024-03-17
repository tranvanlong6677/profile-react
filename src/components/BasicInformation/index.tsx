/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, Container } from "react-bootstrap";
import ItemBasicInformationComponent from "./item";
import { Fragment } from "react";
export interface ItemBasicInformation {
  headerTitle: string
  content: string
  eventKey: string
}
const Index = () => {
  const arrData: ItemBasicInformation[] = [
    {
      headerTitle: "Họ và tên",
      content: "Trần Văn Long",
      eventKey: "0"
    },
    {
      headerTitle: "Vị trí ứng tuyển",
      content: "Intern ReactJS",
      eventKey: "1"
    },
    {
      headerTitle: "Số điện thoại",
      content: "0357952929",
      eventKey: "2"
    },
    {
      headerTitle: "Email",
      content: "tranvanlong6677@gmail.com",
      eventKey: "3"
    },
    {
      headerTitle: "Địa chỉ",
      content: "Quận Cầu Giấy, TP.Hà Nội",
      eventKey: "4"
    },
  ]
  return (
    <Container className="mt-5">
      <h1 className="d-flex justify-content-center mb-5">Thông tin cơ bản</h1>
      <Accordion>
        {arrData?.map((item: any, index: number) => {
          return (
            <Fragment key={`item-${index}`}>
              <ItemBasicInformationComponent
                {...item}
              />
            </Fragment>

          )
        }

        )}
      </Accordion>
    </Container >
  );
};
export default Index;

import { Accordion } from 'react-bootstrap'
import { Skill } from '.'
import { Fragment } from 'react'

interface IPropsItemSkill extends Skill {
      eventKey: number
}

const ItemSkill = (props: IPropsItemSkill) => {
      const { eventKey, name, skills } = props
      return (
            <>
                  <Accordion.Item eventKey={`${eventKey}`}>
                        <Accordion.Header>{name}</Accordion.Header>
                        <Accordion.Body>
                              {skills?.map((item: string, index: number) => {
                                    return (
                                          <Fragment key={`item-${index}`}>
                                                <b>{item}</b>
                                                <br />
                                          </Fragment>
                                    )
                              })}
                        </Accordion.Body>
                  </Accordion.Item>
            </>
      )
}

export default ItemSkill

import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])

  const addInfo = () => {
    setInfo([...info, {
      title: '',
      description: '',
      number: Date.now()
    }])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить девайс
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className={"mt-3"}>
            <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className={"mt-3"}>
            <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            className={"mt-3"}
            placeholder={'Введите название устройства'}
          />
          <Form.Control
            className={"mt-3"}
            placeholder={'Введите стоимость устройства'}
            type={"number"}
          />
          <Form.Control
            className={"mt-3"}
            placeholder={'Загрузите картинку'}
            type={"file"}
          />
          <hr/>
          <Button
            variant={"outline-dark"}
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {info.map(i =>
            <Row className={"mt-3"} key={i.number}>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите название"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Введите описание"
                />
              </Col>
              <Col md={4}>
                <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)}>Удалить</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={"outline-danger"}>Закрыть</Button>
        <Button onClick={onHide} variant={"outline-success"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateDevice;
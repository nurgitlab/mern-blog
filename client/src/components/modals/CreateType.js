import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
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
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder={"Введите название типа"}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={"outline-danger"}>Закрыть</Button>
        <Button onClick={onHide} variant={"outline-success"}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateType;
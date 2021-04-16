import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap"

import Sidebar from "../components/Sidebar.jsx"

const Contact = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="text-left">
            <h2>ติดต่อเรา</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Form>
            <FormGroup row>
              <Label for="name" sm={3}>
                ชื่อ-นามสกุล
              </Label>
              <Col sm={4}>
                <Input type="name" name="name" id="name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={3}>
                อีเมล
              </Label>
              <Col sm={4}>
                <Input type="email" name="email" id="email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="title" sm={3}>
                เรื่องที่ติดดต่อ
              </Label>
              <Col sm={4}>
                <Input type="title" name="title" id="title" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="detail" sm={3}>
                รายละเอียด
              </Label>
              <Col sm={4}>
                <Input type="textarea" name="detail" id="detail" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="detail" sm={3}></Label>
              <Col sm={4}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Contact

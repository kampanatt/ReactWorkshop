import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap"

const Home = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <Form>
          <div className="text-left">
            <h2>เข้าสู่ระบบ</h2>
          </div>
          <FormGroup row>
            <Label for="email" sm={2}>
              Email
            </Label>
            <Col sm={6}>
              <Input type="email" name="email" id="Username" placeholder="Username" />
            </Col>
          </FormGroup>{" "}
          <FormGroup row>
            <Label for="Password" sm={2}>
              Password
            </Label>
            <Col sm={6}>
              <Input type="password" name="password" id="Password" placeholder="password" />
            </Col>
          </FormGroup>{" "}
          <Col sm={{ size: 12, offset: 2 }}>
            <Button>Submit</Button>
            <Button color="link">ลืมรหัสผ่าน</Button>
          </Col>
        </Form>
      </div>
    </div>
  )
}

export default Home

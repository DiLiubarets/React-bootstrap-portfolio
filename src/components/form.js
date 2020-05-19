import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class form extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h5>Email address</h5>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Label>
          <h5>Message</h5>
        </Form.Label>
        <InputGroup>
          <Form.Control
            style={{ height: 350 }}
            placeholder="Message me"
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        <br />
        <Button variant="secondary" type="submit">
          Send me message
        </Button>
      </Form>
    );
  }
}
export default form;

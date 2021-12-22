import React from "react";
import { useState } from "react";
import { Button, Image, Form, Row, Col, InputGroup } from "react-bootstrap";
import mesoIcon from "../../Assets/meso.png"

function Logger (){
    const [validated, setValidated] = useState(false);

    const handleChange = (event) =>{
        if(!isNaN(event.target.value) && event.target.value !== ""){
            setValidated(true);
        } else {
            setValidated(false);
        }
    }

    return(
        <Form style={{padding: "1rem"}} validated={validated}>
            <Form.Label><h1>Add a transaction here</h1></Form.Label>
            <Row className="mb-3">
            <Form.Group as={Col} md="4">
                <Form.Label>Transaction amount  </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Text><Image src={mesoIcon} style={{width: "30px", align: "top"}}/></InputGroup.Text>
                    <Form.Control onChange={handleChange} placeholder="Write your transaction amount here" isInvalid={!validated}/>
                    <Form.Control.Feedback type="invalid">Please enter a number</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Transaction target </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Text><Image src={mesoIcon} style={{width: "30px", align: "top"}}/></InputGroup.Text>
                    <Form.Control placeholder="Write character making transaction here"/>
                    <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Brief description of transaction</Form.Label>
                <Form.Control placeholder="Description of meso usage or gain"></Form.Control>
            </Form.Group>
            </Row>
            <br />
            <Button variant="outline-success" type="submit">Submit</Button>
        </Form>
    );
}

export default Logger;
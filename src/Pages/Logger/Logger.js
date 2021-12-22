import React from "react";
import { useState } from "react";
import { Button, Image, Form, Row, Col, InputGroup } from "react-bootstrap";
import mesoIcon from "../../Assets/meso.png"

function Logger (){
    const [newStart, setNewStart] = useState(true);
    const [amtValidated, setAmtValidated] = useState(newStart);
    const [userValidated, setUserValidated] = useState(newStart);
    const [descValidated, setDescValidated] = useState(newStart);

    const handleChange = (event) =>{
        if(newStart){
            setNewStart(false);
        }
        if(event.target.id === "amount"){
            if(!isNaN(event.target.value) && event.target.value !== ""){
                setAmtValidated(true);
            }
            else {
                setAmtValidated(false);
            }
        } else if (event.target.id === "user"){
            if (event.target.value !== ""){
                setUserValidated(true);
            }
            else{
                setUserValidated(false);
            }
        } else {
            if (event.target.value !== ""){
                setDescValidated(true);
            }
            else {
                setDescValidated(false)
            }
        }
    }

    const handleSubmit = () => {
        /*
            adds our transaction into localStorage
        */
       if(amtValidated && userValidated && descValidated && !newStart){

       }
    }

    return(
        <Form style={{padding: "1rem"}} onSubmit={handleSubmit}>
            <Form.Label><h1>Add a transaction here</h1></Form.Label>
            <Row className="mb-3">
            <Form.Group as={Col} md="4">
                <Form.Label>Transaction amount  </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Text><Image src={mesoIcon} style={{width: "30px", align: "top"}}/></InputGroup.Text>
                    <Form.Control id="amount" onChange={handleChange} placeholder="Write your transaction amount here" isInvalid={!(amtValidated || newStart)}/>
                    <Form.Control.Feedback type="invalid">Please enter a number</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Transaction target </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control id="user" onChange={handleChange} placeholder="Write character making transaction here" isInvalid={!(userValidated || newStart)}/>
                    <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4">
                <Form.Label>Brief description of transaction</Form.Label>
                <Form.Control id="desc" onChange={handleChange} placeholder="Description of meso usage or gain" isInvalid={!(descValidated || newStart)}></Form.Control>
                <Form.Control.Feedback type="invalid">Please enter a description</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <br />
            <Button variant="outline-success" type="submit">Submit</Button>
        </Form>
    );
}

export default Logger;
import React from "react";
import { Badge, Card } from "react-bootstrap"

class Transaction extends React.Component{
    constructor(props){
        super(props);
        this.transactionData = {
            id: props.data.id,
            amount: props.data.amount,
            user: props.data.user,
            description: props.data.description
        }
    };

    render(){
        return(
            <Card key={this.id}>
                <Card.Title>{this.amount}</Card.Title>
                <Card.Text>{this.user}</Card.Text>
                <Card.Footer>Made by {this.user}</Card.Footer>
            </Card>
        )
    }
}

export default Transaction;
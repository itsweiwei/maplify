import React from 'react';
import Transaction from "../../Components/Transaction";
import { Container, Col } from 'react-bootstrap';


class Log extends React.Component{
    constructor(props){
        super(props);
        this.transactionsList = [
            {
                id: 0,
                amount: 2000000000,
                user: "Miinaries",
                description: "Farming"
            }
        ];
    }

    render(){
        return(
            <Container>
                <h1>All Meso Transactions</h1>
                <Col>
                {this.transactionsList.map(entries =>(
                    <Transaction data={entries}/>
                ))}
                </Col>
            </Container>
        );
    }
}

export default Log;
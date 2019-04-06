import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setTaskCompleted, setTaskDeleted} from '../../Actions/ToDoList'
import { Card, Button } from 'react-bootstrap';

class TaskDeleted extends Component {
    constructor(props){
        super(props)
    }
    deleteAction = ()=>{
        this.props.setDelete(this.props.id)
    }
    render(){
        console.log(this.props)
        return (
        <Card style={{ width: '50rem', height: '5rem', margin: '20px' }}>
            <Card.Body >
                <Card.Title style={{ float: 'left' }}>{this.props.title}</Card.Title>
                <div style={{ position: 'absolute', right: '0', paddingRight: '20px' }}>
                    <Button onClick={this.deleteAction} style={{ background: '#FC6377', border: '0' }}>UnDelete</Button>
                </div>
            </Card.Body>
        </Card>
    )
    }
}

let mapDispatchToProps = dispatch => ({
    setDelete : id =>dispatch(setTaskDeleted(id)),
});


export default connect(null, mapDispatchToProps)(TaskDeleted)
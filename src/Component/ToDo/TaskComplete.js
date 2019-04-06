import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setTaskCompleted,setTaskDeleted} from '../../Actions/ToDoList'
import { Card, Button } from 'react-bootstrap';

class TaskComplete extends Component {
    constructor(props){
        super(props)
    }
    completedAction = ()=>{
        // debugger
        this.props.setComplete(this.props.id);
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
                    <Button onClick={this.completedAction} style={{ background: '#FC6377', border: '0', marginRight: '2px' }}>UnComplete</Button>
                    <Button onClick={this.deleteAction} style={{ background: '#FC6377', border: '0' }}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
    }
}

let mapDispatchToProps = dispatch => ({
    setComplete: id => dispatch(setTaskCompleted(id)),
    setDelete : id =>dispatch(setTaskDeleted(id)),

});


export default connect(null, mapDispatchToProps)(TaskComplete)
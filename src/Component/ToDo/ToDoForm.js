import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setToDoListData } from '../../Actions/ToDoList'
import uuidv4 from 'uuid/v4';

import { Form, FormControl, Button } from 'react-bootstrap';

class ToDoForm extends Component {
    state = {
        text: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.text) return;
        const todo = {
            id: uuidv4(),
            title: this.state.text,
            completed: false,
            deleted: false
        }
        this.setState({text: ''})
        
        this.props.addToDo(todo);
    }
    handleInputChange = (e) => {
        const inputValue = e.target.value;
        // console.log(inputValue)
        this.setState({ text: inputValue })
    }
    render() {
        // console.log(this.props.data)
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <FormControl style={{width: '18rem', float:'left'}} value={this.state.text} aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.handleInputChange} />
                    <Button style={{ background: '#FC6377', border: '0' }} type="submit">Submit</Button>
                </Form>
            </>
        )
    }
}

let mapDispatchToProps = dispatch => ({
    addToDo: todo => dispatch(setToDoListData(todo)),
});


export default connect(null, mapDispatchToProps)(ToDoForm)
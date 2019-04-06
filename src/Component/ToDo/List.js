import React from 'react';
import { connect } from 'react-redux'

import Task from './Task';

const ToDoList = (props) => {
    console.log(props.tasks)
    return (
        <>
            {props.tasks.map(d => <Task key={d.id} {...d}></Task>)}
            {/* {props.tasks.filter(t=> t.completed).map(d => <Task key={d.id} {...d}></Task>)} */}
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.data.filter(t=> !(t.completed ||t.deleted))
})

export default connect(mapStateToProps)(ToDoList)

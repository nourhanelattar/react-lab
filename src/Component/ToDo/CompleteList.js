import React from 'react';
import { connect } from 'react-redux'

import TaskComplete from './TaskComplete';
import Task from './Task';

const CompletedLists = (props) => {
    console.log(props.tasks)
    return (
        <>
        <br/><br/><br/><br/><br/>
        <h2>Completed</h2>
            {/* {props.tasks.map(d => <Task key={d.id} {...d}></Task>)} */}
            {props.tasks.map(d => <TaskComplete key={d.id} {...d}></TaskComplete>)}
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.data.filter(t=> t.completed && !t.deleted)
})

export default connect(mapStateToProps)(CompletedLists)

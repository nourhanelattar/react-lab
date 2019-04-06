import React from 'react';
import { connect } from 'react-redux'

import TaskDeleted from './TaskDeleted';

const DeletedList = (props) => {
    console.log(props.tasks)
    return (
        <>
        <br/><br/><br/><br/><br/>
        <h2>DeletedList</h2>
            {props.tasks.map(d => <TaskDeleted key={d.id} {...d}></TaskDeleted>)}
            {/* {props.tasks.filter(t=> t.completed).map(d => <Task key={d.id} {...d}></Task>)} */}
        </>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.data.filter(t=> t.deleted)
})

export default connect(mapStateToProps)(DeletedList)

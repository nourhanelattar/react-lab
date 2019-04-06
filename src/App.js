import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ToDoList from './Component/ToDo/List'
import ToDoForm from './Component/ToDo/ToDoForm'
import CompletedLists from './Component/ToDo/CompleteList'
import DeletedList from './Component/ToDo/DeletedList'
import './App.css';

class App extends Component {
  render() {
    return ( 
      <>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
        <CompletedLists></CompletedLists>
        <DeletedList></DeletedList>
      </>
    );
  }
}

export default App;

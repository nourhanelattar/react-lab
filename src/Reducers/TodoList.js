export default (state, action) => {
    switch (action.type) {
        case 'SET_TODOLIST_DATA':
            return ({ ...state, data: [...state.data, action.data] });
        case 'SET_TASK_COMPLETED':
            let newData = state.data.slice();
            const target = newData.find(todo => todo.id === action.id);
            target.completed = !target.completed;
            // debugger
            // for (let i = 0; i < newData.length; i++) {
            //     if (newData[i].id === action.id) {
            //         if (newData[i].completed == true) {
            //             newData[i].completed = false
            //         }
            //         else{
            //             newData[i].completed = true
            //         }
            //     }
            // }
            return (
                { ...state, data: newData }
            );
            case 'SET_TASK_DELETED':
            let deleteData= state.data.slice();
            // debugger
            for (let i = 0; i < deleteData.length; i++) {
                if (deleteData[i].id === action.id) {
                    if (deleteData[i].deleted == true) {
                        deleteData[i].deleted = false
                    }
                    else{
                        deleteData[i].deleted = true
                    }
                }
            }
            return (
                { ...state, data: deleteData }
            );
            
            
        default:
            return state;
    }
}
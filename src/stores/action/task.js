const AddTask = (data) => {
    return {
        type: 'ADD_TASK', payload: data
    };
}


const UpdateTask = (id) => {
    return {
        type: 'UPDATE_TASK', payload: id
    }
}

const DeleteTask = (id) => {
    return {
        type: 'DELETE_TASK', payload: id
    }
}

export {
    AddTask, DeleteTask, UpdateTask
}
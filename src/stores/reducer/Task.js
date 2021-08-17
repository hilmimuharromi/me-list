import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [],
    loading: false
}

export default function TaskReducer(state = initialState, action) {

    if (action.type === 'ADD_TASK') {
        let newTask = action.payload
        newTask.id = uuidv4()
        console.log('new task ===>', newTask)
        return {
            ...state,
            data: [...state.data, newTask]
        };
    } else if (action.type === 'DELETE_CATEGORY') {
        let title = action.payload
        let newData = state.data.filter((item) => item.category !== title)
        console.log('new tasks ==>', title, newData)
        return {
            ...state,
            data: newData
        };
    } else if (action.type === 'UPDATE_CATEGORY') {
        let title = action.payload.oldTitle
        let newData = state.data.map((item) => {
            if (item.category === title) {
                item.category = action.payload.title
            }
            return item
        })
        console.log('new tasks ==>', title, newData)
        return {
            ...state,
            data: newData
        };
    } else if (action.type === 'UPDATE_TASK') {
        let updateData = action.payload
        let newData = state.data.map((item) => {
            if (item.id === updateData.id) {
                item = updateData;
            }
            return item;
        })
        return {
            ...state,
            data: newData
        };
    }
    else if (action.type === 'DELETE_TASK') {
        let id = action.payload
        let newData = state.data.filter((item) => item.id !== id)
        return {
            ...state,
            data: newData
        };
    }
    return state
}
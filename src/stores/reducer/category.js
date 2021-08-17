import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [],
}

export default function CategoryReducer(state = initialState, action) {

    if (action.type === 'ADD_CATEGORY') {
        let newData = action.payload
        newData.id = uuidv4()

        return {
            ...state,
            data: [...state.data, newData]
        };
    } else if (action.type === 'UPDATE_CATEGORY') {
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
    } else if (action.type === 'DELETE_CATEGORY') {
        let title = action.payload

        let newData = state.data.filter((item) => item.title !== title)

        return {
            ...state,
            data: newData
        };

    }
    return state
}
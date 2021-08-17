const AddCategory = (data) => {
    return {
        type: 'ADD_CATEGORY', payload: data
    };
}

const DeleteCategory = (data) => {
    return {
        type: 'DELETE_CATEGORY', payload: data
    };
}

const UpdateCategory = (data) => {
    return {
        type: 'UPDATE_CATEGORY', payload: data
    }
}

export {
    AddCategory,
    DeleteCategory,
    UpdateCategory
}
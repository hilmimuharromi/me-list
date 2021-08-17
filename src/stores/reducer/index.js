import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import task from './Task';
import category from './category'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 2000
};

const reducers = combineReducers({
    task,
    category
});

const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
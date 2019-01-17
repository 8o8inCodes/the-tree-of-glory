import { SET_TITLE } from '../actions/TreeActions';
import treeData from '../../mocks/Tree';

const initState = {
    ...treeData
};

const TreeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_TITLE:
            return setName(state, action.data.path, action.data.title, 1);
        default:
            return state;
    }
};

// Main logic for creating a new state with changed value
const setName = (state, path, title, currentIndex) => {
    if(currentIndex < path.length){
        let children = [
            ...state.children
        ]
        children[path[currentIndex]] = setName(state.children[path[currentIndex]], path, title, currentIndex+1);
        return {
            ...state,
            children
        }
    } else {
        return {
            ...state,
            title
        };
    }
}
export default TreeReducer;
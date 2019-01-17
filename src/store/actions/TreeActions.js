export const SET_TITLE = 'SET_TITLE';

const createSetTitleAction = (data) => ({
    type: SET_TITLE, 
    data
});

export const setTitle = (data) => (dispatch) => {
    dispatch(createSetTitleAction(data));
};

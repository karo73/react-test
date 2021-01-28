export const ADD_ITEMS = 'ADD_ITEMS';

export const addItemsAction = ( payload: object ) => {
    return {
        type: ADD_ITEMS,
        payload
    };
};
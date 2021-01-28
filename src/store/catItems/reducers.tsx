import { ADD_ITEMS } from './actions';

interface ItemState {
    items: object;
}

interface ItemAction {
    type: string;
    payload: object;
}

const initialState = {
    items: {}
};

export const itemsReducer = ( state: ItemState = initialState, action: ItemAction ) => {

    switch( action.type ){
        case ADD_ITEMS:
            return {...state, items: action.payload};
        default:
            return state;
    }

};
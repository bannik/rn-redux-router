const initialState = {};

export default function input(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_MUTATION' :
            return {
                ...state,
                text : action.text
            };
        default:
            return state;
    }
};

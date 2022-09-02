import { STATUS_CHANGED, COLOR_CHANGED, COLOR_ADDED, COLOR_REMOVED } from './actionTypes';


const initialState = {
    status: 'All',
    colors: []
}


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// this reducer() function called by Redux,
// when user dispatch an action creators from UI
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case STATUS_CHANGED:
            return {
                ...state, status: payload
            };

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case COLOR_CHANGED:

            const { color, changeType } = payload;


            switch (changeType) {

                // 🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫

                case COLOR_ADDED: // add new item into [array]
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    }; 

                // 🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫

                case COLOR_REMOVED: // remove selected item from [array]
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color),
                    };

                // 🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫🟫

                default:
                    return state;
            }

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        default:
            return state;
    }
}

export default reducer;
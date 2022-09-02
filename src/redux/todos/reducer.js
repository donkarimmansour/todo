import { ADDED, TOGGLED, DELETED, COLOR_SELECTED, ALL_COMPLETED, CLEAR_COMPLETED } from './actionTypes';


export const initialState = [
    // {
    //     id: 1,
    //     text: 'Learn React',
    //     completed: true,
    // },
    // {
    //     id: 2,
    //     text: 'Learn Redux',
    //     completed: false, 
    //     color: 'red',
    // },
]


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// this reducer() function called by Redux,
// when user dispatch an action creators from UI
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case ADDED:

        const add = [
            ...state,
            {
                id: state.length + 1,
                text: payload,
                completed: false,
            },
        ]

            localStorage.setItem("todo", JSON.stringify(add))

            return add;

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case TOGGLED:

        const tgl = state.map(todo => todo.id === payload ? { ...todo, completed: !todo.completed }: todo )
        localStorage.setItem("todo", JSON.stringify(tgl))

            return tgl;

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case DELETED:
            const dlt = state.filter(todo => todo.id !== payload);

            localStorage.setItem("todo", JSON.stringify(dlt))

            return dlt

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case COLOR_SELECTED:

            const { todoId, color } = payload;

            const clr = state.map(todo => todo.id === todoId
                ? { ...todo, color: color }
                : todo
            )

            localStorage.setItem("todo", JSON.stringify(clr) )

            return clr;

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case ALL_COMPLETED:

           const allCMPT = state.map(todo => ({ ...todo, completed: true }))

            localStorage.setItem("todo", JSON.stringify(allCMPT) )

            return allCMPT;

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        case CLEAR_COMPLETED:

            const allCLR = state.filter(todo => !todo.completed)

            localStorage.setItem("todo", JSON.stringify(allCLR) )


            return allCLR ;

        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
        default:
            const old =  localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []

            return old;
    }
}

export default reducer;
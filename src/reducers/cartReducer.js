export function manageBasket(state, action) {
    switch(action.type) {
        case 'add': {
            return [...state, {
                name: action.payload.name,
                quantity: action.payload.quantity,
            }]  
        }
        case 'change': {
            return state.map(element => {
                if (element.name === action.payload.name) {
                    element.quantity += action.payload.quantity
                    return element
                } else {
                    return element
                }
            })
        }
        default:
            return state
    }
}
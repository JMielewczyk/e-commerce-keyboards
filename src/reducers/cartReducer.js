export function manageBasket(state, action) {
    switch(action.type) {
        case 'add': {
            return [...state, {
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price,
                image: action.payload.image,
            }]  
        }
        case 'change': {
            return state.map(element => {
                if (element.name === action.payload.name) {
                    element.quantity += action.payload.quantity
                    element.price = element.quantity * action.payload.price
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
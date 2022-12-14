export function manageBasket(state, action) {
    console.log(state)
    switch(action.type) {
        case 'add': {
            return [...state, {
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price,
                image: action.payload.image,
                path: action.payload.pathToProduct,
            }]  
        }
        case 'change': {
            return state.map(element=>{
                if (element.name === action.payload.name){
                    const newQuantity = element.quantity+action.payload.quantity
                        return {
                        ...element,
                        quantity:newQuantity,
                        price:newQuantity*action.payload.price
                    }
                }
                else return {...element}}
            )
/*            return state.map(element => {
                if (element.name === action.payload.name) {
                    element.quantity = element.quantity + action.payload.quantity
                    element.price = element.quantity * action.payload.price
                    return element
                } else {
                    return element
                }
            })*/}
        case 'delete': {
            const filteredState = state.filter(element => element.name !== action.payload.name)
            return [...filteredState]
        }
        default:
            return state
    }
}
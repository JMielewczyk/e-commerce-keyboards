export function manageBasket(state, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...state,
        {
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price * action.payload.quantity,
          image: action.payload.image,
          path: action.payload.pathToProduct
        }
      ];
    }
    case 'change': {
      return state.map((element) => {
        if (element.name === action.payload.name) {
          const newQuantity = element.quantity + action.payload.quantity;
          return {
            ...element,
            quantity: newQuantity,
            price: newQuantity * action.payload.price
          };
        } else return { ...element };
      });
    }
    case 'delete': {
      const filteredState = state.filter((element) => element.name !== action.payload.name);
      return [...filteredState];
    }
    case 'reset': {
      const newState = [{ name: 'Your basket is empty' }];
      return newState;
    }
    default:
      return state;
  }
}

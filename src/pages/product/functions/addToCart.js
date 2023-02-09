export const addToCart = (basket, location, data, images, orderAmount, dispatch) => {
  if (orderAmount === 0) return;

  let alreadyInBasket = false;

  const discountedPrice = data.price - data.price * (data.discountValue / 100);

  basket.forEach((element) => {
    if (element.name === data.name) {
      alreadyInBasket = true;
      dispatch({
        type: 'change',
        payload: {
          name: data.name,
          quantity: orderAmount,
          price: data.discount ? discountedPrice : data.price
        }
      });
    }
  });

  if (alreadyInBasket === false) {
    dispatch({
      type: 'add',
      payload: {
        name: data.name,
        quantity: orderAmount,
        price: data.discount ? discountedPrice : data.price,
        image: images[0],
        path: location
      }
    });
  }
};

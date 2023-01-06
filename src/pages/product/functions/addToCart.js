export const addToCart = (basket, location, data, category, orderAmount, product, dispatch) => {
  if (orderAmount === 0) return;

  let alreadyInBasket = false;

  const thisProduct = data[category].filter((item) => {
    if (item.name === product) {
      return item;
    }
  });

  const discountedPrice =
    thisProduct[0].price - thisProduct[0].price * (thisProduct[0].discountValue / 100);

  basket.forEach((element) => {
    if (element.name === product) {
      alreadyInBasket = true;
      dispatch({
        type: 'change',
        payload: {
          name: product,
          quantity: orderAmount,
          price: thisProduct[0].discount ? discountedPrice : thisProduct[0].price
        }
      });
    }
  });
  if (alreadyInBasket === false) {
    dispatch({
      type: 'add',
      payload: {
        name: product,
        quantity: orderAmount,
        price: thisProduct[0].discount ? discountedPrice : thisProduct[0].price,
        image: thisProduct[0].imageTemplate,
        pathToProduct: location.pathname
      }
    });
  }
};

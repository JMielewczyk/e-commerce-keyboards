export const addToCart = (
  basket,
  location,
  data,
  category,
  orderAmount,
  product,
  dispatch
) => {
  if (orderAmount === 0) return;

  let alreadyInBasket = false;
  console.log(data);
  const thisProduct = data[category].filter((item) => {
    if (item.name === product) {
      return item;
    }
  });

  basket.forEach((element) => {
    if (element.name === product) {
      alreadyInBasket = true;
      dispatch({
        type: "change",
        payload: {
          name: product,
          quantity: orderAmount,
          price: thisProduct[0].price,
        },
      });
    }
  });
  if (alreadyInBasket === false) {
    dispatch({
      type: "add",
      payload: {
        name: product,
        quantity: orderAmount,
        price: thisProduct[0].price,
        image: thisProduct[0].imageTemplate,
        pathToProduct: location.pathname,
      },
    });
  }
};

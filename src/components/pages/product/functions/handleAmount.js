export const handleAmount = (orderAmount, setOrderAmount, value) => {
  if (value === "plus") {
    setOrderAmount((prevValue) => prevValue + 1);
  } else if (value === "minus") {
    if (orderAmount === 0) return;
    setOrderAmount((prevValue) => prevValue - 1);
  }
};

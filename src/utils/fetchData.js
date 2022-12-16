export async function fetchData() {
  const response = await fetch('/data.json');
  const parsedResponse = await response.json();
  return parsedResponse.products;
}

// export async function fetchData(setData, setLoading) {
//   try {
//     setData(null);
//     const response = await fetch("/data.json");
//     const parsedResponse = await response.json();
//     setData(parsedResponse.products);
//     setLoading(false);
//   } catch (error) {
//     console.error(error);
//   }
// }

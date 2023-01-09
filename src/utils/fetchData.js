export async function fetchData() {
  const response = await fetch('https://api.jsonbin.io/v3/b/63bc36f0dfc68e59d57dfde4');
  const parsedResponse = await response.json();
  return parsedResponse.record.products;
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

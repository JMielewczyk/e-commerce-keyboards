//functions
import { fetchData } from '../../../utils/fetchData';

export async function loadProducts(setData, setLoading, setProductIndex) {
  const data = await fetchData();
  let product = [];
  Object.entries(data).forEach(([key, value]) => {
    value.forEach((item) => {
      item['category'] = key;
      product = [...product, item];
    });
  });
  setData(product);
  setLoading(false);
  setProductIndex(0);
}

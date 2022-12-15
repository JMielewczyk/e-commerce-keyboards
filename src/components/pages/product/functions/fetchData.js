export const fetchData = (setData, setLoading) => {
  fetch("/data.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => setData(data.products))
    .then(() => setLoading(false))
    .catch((error) => console.log(error));
};

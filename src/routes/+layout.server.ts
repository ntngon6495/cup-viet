
export const load = async () => {
  const res = await fetch(
    `https://08iid05zfe.execute-api.ap-southeast-1.amazonaws.com/dev/banners?banner_type=1`,
    {
      method: "GET"
    }
  );
  const { banners } = await res.json();

  const dataProducts = await fetch(
    "https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=all",
    {
      method: "GET"
    }
  );
  const { products } = await dataProducts.json();

  return {
    banners,
	products
  };
};

import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const response = await fetch(
    `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=${params.id}`,
    {
      method: "GET"
    }
  );
  if (response) {
    const { products } = await response.json();
    let listProduct = products?.Items;
    return { listProduct };
  }

  error(404, "Not found");
}

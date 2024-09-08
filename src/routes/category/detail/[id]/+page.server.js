import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const response = await fetch(
    `https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/product?productId=${params.id}`,
    {
      method: "GET"
    }
  );
  if (response) {
    return await response.json();
  }

  error(404, "Not found");
}


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
 
    let category = params.id;
    return { category };
}

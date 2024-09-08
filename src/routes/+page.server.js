export async function load() {
    const response = await fetch('https://dgg300bw0j.execute-api.ap-southeast-1.amazonaws.com/dev/products?categoryId=all', {
        method: "GET"
    })

    const { products } = await response.json()
    // console.log("products", products)
    return {
        products
    };
}

import { client } from '../sanity/lib/client'

export async function fetchProducts() {
    const query = `
      *[_type == "product"]{
        _id,
        _type,
        title,
        price,
       "productImage": productImage.asset->url,
        tags,
        discountPercentage,
        description,
        isNew
      }
    `
    const products = await client.fetch(query)
    return products
}

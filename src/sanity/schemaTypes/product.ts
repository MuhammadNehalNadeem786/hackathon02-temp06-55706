export const product ={
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "id",
            type: "number",
            title: "Id",
        },
        {
            name: "description",
            type: "text",
            title: "Description",
        },
        {
            name: "productImage",
            type: "image",
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name: "dicountPercentage",
            type: "number",
            title: "Discount Percentage",
        },
        {
            name: "isNew",
            type: "boolean",
            title: "New Badge",
        }
    ]
}
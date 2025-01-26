export type ProductType={
        toLowerCase(): unknown;
        salePrice: any;
        _id?: string;
        productImage?: string;
        title: string;
        description?: string;
        price?: string;
        discountPercentage?: number;
        tags?: string[];
        isNew?: boolean;
        _type?: string;
    
}
export interface CartItem extends ProductType {
        quantity: number;
        discountedPrice?: number;
}
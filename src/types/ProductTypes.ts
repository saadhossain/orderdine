export interface ProductType {
    id: number,
    availabilityStatus: string,
    brand: string,
    category: string,
    price: number,
    title: string,
    description: string,
    discountPercentage: number,
    dimension: {},
    rating: number,
    stock: number,
    tags: [],
    sku: string,
    weight: number,
    warrantyInformation: string,
    shippingInformation: string,
    reviews: [],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: {},
    thumbnail: string,
    images: []
}

export interface CartProduct {
    id: number,
    quantity: number,
    price: number,
    title?: string,
    thumbnail?: string
}
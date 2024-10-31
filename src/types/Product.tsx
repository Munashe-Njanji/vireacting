// types/Product.ts
export interface Rating {
    rate: number;
    count: number;
}

export default interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

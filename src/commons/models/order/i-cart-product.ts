export interface ICartProduct {
    maxOrder: number;
    minOrder: number;
    offPercent: number;
    price: number;
    product: { _id: string, slug: string, title: string, images: string[] };
    quantity: number;
    strikePrice: number;
    subTotal: number;
    _id: string;
}
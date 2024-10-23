export interface IAddToCart {
    cartId:string;
    item:{
        product:string;
        quantity:number;
        variantType:string
    }
}
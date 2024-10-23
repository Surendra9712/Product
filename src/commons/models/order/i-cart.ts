export interface ICart {
    createdAt:string,
    deliveryAddress:string,
    deliveryCharge:number
    isDeleted:boolean
    items:any
    orderId:string
    orderStatus:string
    paymentMethod:string
    paymentStatus:string
    subTotal:number
    totalAmount:number
    updatedAt:string
    voucherAmount:number
    voucherCode:string
    _id:string
}
export interface IColorVariants{
    color: {
        _id: string,
        isTwin: boolean,
        name:string,
        colorValue: string[]
    },
    price: number,
    strikePrice: number,
    offPercent: number,
    minOrder: number,
    maxOrder: number,
    status: number,
    images: string[],
    productCode: string,
    _id: string
}
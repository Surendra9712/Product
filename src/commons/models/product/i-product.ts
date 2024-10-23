import {IBrand} from "./i-brand";
import {IColorVariants} from "./i-color-variants";
import {ISizeVariant} from "./i-size-variant";

export interface IProduct {
    _id: string
    price: number
    ratedBy: number
    brand: IBrand
    offPercent: number
    ratings: number
    slug: string
    strikePrice: number
    title: string
    totalRatings: number
    variantType: string
    images: string[]
    description: string
    colorVariants: IColorVariants[];
    sizeVariants: ISizeVariant[];
    howToUse: string;
}
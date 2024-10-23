import {IBrand} from "./i-brand";
import {ISizeVariant} from "./i-size-variant";
import {IColorVariants} from "./i-color-variants";
import {ICategory} from "./i-category";

export class Product  {
    public _id: string = '';
    public price: number = 0;
    public ratedBy: number = 0;
    public brand: IBrand = {name: '', slug: '', _id: ''};
    public offPercent: number = 0;
    public ratings: number = 0;
    public slug: string = '';
    public strikePrice: number = 0;
    public title: string = '';
    public totalRatings: number = 0;
    public variantType: string = ''
    public images: string[] = ['']
    public description: string = '';
    public colorVariants: IColorVariants[] = [];
    public sizeVariants: ISizeVariant[] = [];
    public category: ICategory = {title: '', slug: '', parentId: '', level: 0};
    public howToUse:string ='';

    public mergeImages(product: Product): Product {
        const allImages = [...product.images];

        product.colorVariants.forEach((variant: IColorVariants) => {
            allImages.push(...variant.images);
        });

        product.sizeVariants.forEach((variant: ISizeVariant) => {
            allImages.push(...variant.images);
        });

        product.images = allImages;
        return product;
    }
}
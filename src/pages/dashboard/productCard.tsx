import {AppLink, AppText, AppTitle} from "../../commons/components";
import {IProduct} from "../../commons/models";
import AppRating from "../../commons/components/ui-components/rating";

export default function ProductCard({product}: { product: IProduct }) {
    return (
        <AppLink to={'/product/' + product.slug}>
            <div className='product-item'>
                <img src={product.images[0]}
                     alt='This is product thumbnail'/>
                <div className="p-sm relative">
                    {product.offPercent ? <AppText as='span'
                                                   color='white'
                                                   className='discount absolute right-0 bottom-full bg-filled color-warning'>-{product.offPercent}%
                        Off</AppText> : null}
                    <AppTitle as={'h6'} weight={'semibold'}
                              lineClamp={2}>{product.title}</AppTitle>
                    <div className="flex gap-xs align-items-center">
                        <AppTitle as='h4' color={'secondary'}>${product.price}</AppTitle>
                        {product.price !== product.strikePrice &&
                            <del className="text-muted">${product.strikePrice}</del>}
                    </div>
                    <div className="flex align-items-center">
                        <AppRating value={product.ratings}/>
                        <AppText color={'muted'}>({product.totalRatings})</AppText>
                    </div>
                </div>
            </div>
        </AppLink>
    )
}
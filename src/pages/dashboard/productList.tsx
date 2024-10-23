import {AppEmptyState, AppText, AppTitle} from "../../commons/components";
import {Product} from "../../commons/models";
import ProductCard from "./productCard";

export default function ProductList({products, isLoading}: { products?: Product[], isLoading: boolean }) {
    return (
        <>
            {isLoading ? <div className="grid-row gap-lg">
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <div key={item} className="col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className='skeleton-loader skeleton-card'></div>
                        <AppText className='skeleton-loader skeleton-loader-title w-full flex-bsisi-full'></AppText>
                        <AppTitle className='skeleton-loader skeleton-loader-title w-8'></AppTitle>
                        <AppText className='skeleton-loader skeleton-loader-subtitle'></AppText>
                    </div>
                ))}
            </div> : (
                <>
                    {products?.length ? <div className="grid-row gap-sm">
                        {products.map(item => (
                            <div key={item.slug}
                                 className="col-lg-2 col-md-3 col-sm-4 col-6 shadow-xs radius-sm overflow-hidden">
                                <ProductCard product={item}/>
                            </div>
                        ))}
                    </div> : <AppEmptyState/>}
                </>
            )}
        </>
    )
}
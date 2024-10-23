import {useEffect, useState} from "react";
import {productService} from "../../commons";
import {
    AppText,
    AppTitle
} from "../../commons/components";
import {QueryParams} from "../../ensue-react-system/http/http-client";
import {Product} from "../../commons/models";
import ProductCard from "./productCard";

interface RelatedProductProps {
    productId: number;
    categoryId: number;
}

export default function RelatedProduct({productId, categoryId}: RelatedProductProps) {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true);
        let params = new QueryParams();
        params = params.set('categoryId', categoryId);
        productService.getProducts(params).then((res) => {
            setProducts(res.all());
            setLoading(false);
        }).catch(_=> setLoading(false));
    }, [categoryId]);

    useEffect(() => {
        // if (products?.length) {
        //     const relatedProducts = products.filter(item => item.id !== productId);
        //     setFilteredProducts(relatedProducts);
        // }

    }, [productId, products]);
    return (
        <>
           {/* {(isLoading || (filteredProducts && filteredProducts?.length)) ?
                <>
                    <AppTitle as='h2' mt='4xl' mb='lg'>Related Products</AppTitle>
                    {isLoading ? <AppGridBox columns={4} gap='lg'>
                        {[1, 2, 3, 4].map(item => (
                            <AppBox key={item} flexDirection={'column'} gap='xs'>
                                <AppBox displayBlock className='skeleton-loader skeleton-card'>
                                </AppBox>
                                <AppBox justifyContent='between'>
                                    <AppText className='skeleton-loader skeleton-loader-title'></AppText>
                                </AppBox>
                            </AppBox>
                        ))}
                    </AppGridBox> : (
                        <AppGridBox className='related-product-grid' columns={4} gap='lg'>
                            {filteredProducts?.map(item => (
                                <ProductCard product={item} key={item.id}/>
                            ))}
                        </AppGridBox>
                    )}
                </> : null
            }*/}
        </>
    )
}
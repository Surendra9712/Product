import {AppContainer} from "../../commons/components";
import {useCallback, useEffect, useState} from "react";
import {productService} from "../../commons";
import {QueryParams} from "../../ensue-react-system/http/http-client";
import ProductList from "./productList";
import {Product} from "../../commons/models";
import setPageTitle from "../../hook/setPageTitle";

export default function Dashboard() {
    setPageTitle('Explore');
    const [platform, setPlatform] = useState<number[]>([]);

    const [isLoading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product[]>([]);

    const buildQueryParams = () => {
        const queryParams = new QueryParams();
        if (platform.length) {
            queryParams.set('platformType', platform.join('|'));
        }

        return queryParams;
    };


    const fetchProducts = useCallback(() => {
        setLoading(true);
        let queryParams = buildQueryParams();
        productService.getProducts(queryParams)
            .then(res => {
                setProducts(res.all());
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [platform]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            {/*<AppContainer>*/}
                <div className='page-wrapper'>
                    <ProductList products={products} isLoading={isLoading}/>
                </div>
            {/*</AppContainer>*/}
        </>
    );
}
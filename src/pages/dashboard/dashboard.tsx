import {useCallback, useEffect, useState} from "react";
import {productService} from "../../commons";
import ProductList from "./productList";
import {Product} from "../../commons/models";
import useSetPageTitle from "../../hook/useSetPageTitle";
import Pagination from "../../commons/components/ui-components/Pagination";
import {AppContainer} from "../../commons/components";
import {QueryParams} from "../../system/http/http-client";
import { PaginatedCollection } from "../../system/utilities/paginated-collection";

export default function Dashboard() {
    useSetPageTitle('Explore');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageLimit, setPageLimit] = useState<number>(0);

    const [isLoading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<PaginatedCollection<Product> | null>(null);

    const buildQueryParams = () => {
        const queryParams = new QueryParams();
        if (pageLimit) {
            queryParams.set('limit', pageLimit);
        }
        if (currentPage) {
            queryParams.set('page', currentPage);
        }
        return queryParams;
    };


    const fetchProducts = useCallback(() => {
        setLoading(true);
        let queryParams = buildQueryParams();
        productService.getProducts(queryParams)
            .then(res => {
                setProducts(res);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [currentPage, pageLimit]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <AppContainer>
            <div className='page-wrapper'>
                <ProductList products={products?.all()} isLoading={isLoading}/>
                {products && products.length > 0 && (
                    <Pagination currentPage={products.page}
                                total={products.total}
                                perPage={products.limit}
                                onPageChange={setCurrentPage}
                                onPageLimitChange={setPageLimit}
                    />
                )}
            </div>
        </AppContainer>
    );
}
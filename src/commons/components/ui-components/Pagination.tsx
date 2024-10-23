import React, {ChangeEvent, useEffect, useState} from 'react';
import {
    IconChevronDoubleLeft,
    IconChevronDoubleRight,
    IconChevronLeft,
    IconChevronRight
} from "../icons/icons";
import {AppText} from "../index";

interface PaginationProps {
    currentPage: number;
    total: number;
    perPage: number;
    onPageChange: (page: number) => void;
    onPageLimitChange?: (page: number) => void;
}

const Pagination = ({currentPage, total, perPage, onPageChange, onPageLimitChange}: PaginationProps) => {
    const totalPages = Math.ceil(total / perPage);
    const windowSize = 4;
    const [pages, setPages] = useState<number[]>([])
    const [startIndex, setStartIndex] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(perPage);


    useEffect(() => {
        if (totalPages < windowSize) {
            if (totalPages !== 0) {
                setStartIndex(1)
            }
            setPages(Array.from({length: totalPages}, (_, index) => index))
        } else {
            setPages(Array.from({length: windowSize + 1}, (_, index) => index))
            setStartIndex(Math.floor(currentPage / windowSize) * (windowSize))
            if ((totalPages - currentPage) <= windowSize) {
                setStartIndex(totalPages - windowSize)
            }
        }
    }, [totalPages, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };
    const handlePageLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);
        setItemsPerPage(value)
        if (onPageLimitChange) {
            onPageLimitChange(value)
        }
    };

    if (total <= 10) {
        return null
    }
    return (
        <div className="flex justify-between align-items-center pt-xl">
            <ul className="page-list">
                {currentPage !== 1 && <>
                    <li onClick={() => handlePageChange(1)}>{IconChevronDoubleLeft}</li>
                    <li onClick={() => handlePageChange(currentPage - 1)}>
                        {IconChevronLeft}
                    </li>
                </>}
                {currentPage - 1 > 1 && <li onClick={() => handlePageChange(currentPage - 1)}>...</li>}
                {pages.map((page, index) => {
                    if (startIndex + index > 0) {
                        return (
                            <li
                                key={page}
                                onClick={() => handlePageChange(startIndex + index)}
                                className={currentPage === (startIndex + index) ? 'active' : ''}
                            >
                                {startIndex + index}
                            </li>
                        );
                    }
                })}

                {currentPage + 1 < totalPages && <li onClick={() => handlePageChange(currentPage + 1)}>...</li>}
                {currentPage !== totalPages && <>
                    <li onClick={() => handlePageChange(currentPage + 1)}>
                        {IconChevronRight}
                    </li>
                    <li onClick={() => handlePageChange(totalPages)}>
                        {IconChevronDoubleRight}</li>
                </>}
            </ul>
            <div className="flex align-items-center gap-2xs">
                <AppText>Per page: </AppText>
                <select className="select-control" value={itemsPerPage} onChange={handlePageLimitChange}>
                    {[10, 20, 30, 40, 50].map(item => <option value={item}>{item}</option>)}
                </select>
            </div>
        </div>
    );
};

export default Pagination;

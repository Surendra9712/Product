import { useEffect } from 'react';

const useSetPageTitle = (title: string) => {
    const suffix:string = 'Shop';
    useEffect(() => {
        document.title = suffix !==''? `${title} - ${suffix}`: title;
    }, [title]);
};

export default useSetPageTitle;

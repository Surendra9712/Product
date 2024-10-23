import { useEffect } from 'react';

const setPageTitle = (title: string) => {
    const suffix:string = 'Shop';
    useEffect(() => {
        document.title = suffix !==''? `${title} - ${suffix}`: title;
    }, [title]);
};

export default setPageTitle;

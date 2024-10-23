import React, {useState} from 'react';
import {AppIconButton} from "../index";
import {IconChevronLeft, IconChevronRight} from "../icons/icons";

const ImageSlider = ({images}: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative flex justify-center">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="max-w-full"
                 style={{aspectRatio: 2 / 2}}/>
            <span
                className="absolute bottom-0 bg-filled color-primary p-3xs radius-sm">{currentIndex + 1}/{images.length}</span>
            <AppIconButton className="absolute top-1/2 -translate-y-1/2 left-0" icon={IconChevronLeft}
                           size={'sm'}
                           onClick={prevImage} disabled={currentIndex === 0}
            ></AppIconButton>
            <AppIconButton className="absolute top-1/2 -translate-y-1/2 right-0" icon={IconChevronRight}
                           size={'sm'}
                           onClick={nextImage} disabled={currentIndex === images.length - 1}
            ></AppIconButton>
        </div>
    );
};

export default ImageSlider;

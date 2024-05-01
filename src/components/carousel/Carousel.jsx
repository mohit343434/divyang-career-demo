import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import banner from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'

export default function Carousel() {
    return (
        <>
            <TECarousel showControls showIndicators ride="carousel">
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        itemID={1}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={banner}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={banner2}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={3}
                        className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[100ms] ease-in-out motion-reduce:transition-none"
                    >
                        <img
                            src={banner}
                            className="block w-full"
                            alt="..."
                        />
                    </TECarouselItem>
                </div>
            </TECarousel>
        </>
    );
}
import React from "react";
import MainCarosel from "../../component/HomeCarosel/MainCarosel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
    return (
        <div>
            <MainCarosel/>
            <div className='space-y-10 py-20'>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
                <HomeSectionCarousel/>
            </div>
        </div>
    )
}

export default HomePage
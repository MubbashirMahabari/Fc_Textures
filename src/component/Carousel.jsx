import React from 'react'
import "../css/carousel.css"
import { Carousel } from 'antd';
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    
};


const CarouselPage = () => {
    return (
        <div className='carousel-section'>
            <div className="container">
                <div className='mobile-screens'>
                    <h2>Top Mobile Skins</h2>
                </div>
                <div className="carousel">
                    <Carousel autoplay slidesToShow={3} responsive={[
                        {
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 2,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                dots: true,
                            },
                        },
                    ]}>
                        <div style={contentStyle} >
                            <img className="carousel-img" src="/static/screen1.webp" alt="mobile-skin" />
                        </div>
                        <div style={contentStyle}>
                            <img className="carousel-img" src="/static/screen2.webp" alt="" />
                        </div>
                        <div style={contentStyle}>
                            <img className="carousel-img" src="/static/screen3.webp" alt="" />
                        </div>
                        <div style={contentStyle}>
                            <img className="carousel-img" src="/static/screen1.webp" alt="" />
                        </div>
                        <div style={contentStyle}>
                            <img className="carousel-img" src="/static/screen2.webp" alt="" />
                        </div>
                        <div style={contentStyle}>
                            <img className="carousel-img" src="/static/screen3.webp" alt="" />
                        </div>
                    </Carousel>
                </div>

            </div>

        </div>
    )
}

export default CarouselPage

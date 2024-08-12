import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../cartSlider/cartSlider.css'; // Ensure this matches the actual file name
import { Button } from '@mui/material';

import { Navigation, Pagination } from 'swiper/modules'; // Correct import path for modules

const CartSlider = () => {

    // Array of product objects
    const products = [
        {
            image: "/main-images/home-img1.png",
            description: "The Lorem ipsum filling text is used by graphic designers.",
            price: "Rs.999.00"
        },
        {
            image: "/main-images/home-img1.png",
            description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
            price: "Rs.199.00"
        },
        {
            image: "/main-images/home-img1.png",
            description: "The Lorem ipsum filling text is used by graphic designers.",
            price: "Rs.259.00"
        },
        {
            image: "/main-images/home-img1.png",
            description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
            price: "Rs.99.00"
        },
        {
            image: "/main-images/home-img1.png",
            description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
            price: "Rs.99.00"
        }
    ];

    return (
        <div className="shop-container">
            <h2 className="cart-title">Other Related Products</h2>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    spaceBetween={25}
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        520: {
                            slidesPerView: 2,
                        },
                        950: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >

                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <img src={product.image} alt={`Product ${index + 1}`} className="card-image" />
                                <p className="card-description">{product.description}</p>
                                <p className="card-price">{product.price}</p>
                                <Button variant="contained"
                                    sx={{
                                        backgroundColor: '#7B967A',
                                        color: '#fff',
                                        padding: '5px 20px',
                                        borderRadius: '0px',
                                        '&:hover': {
                                            backgroundColor: '#88A087',
                                        },
                                        fontFamily: 'pureblissPoppinsLight',
                                        fontSize: '16px',
                                    }}
                                    className="card-button">Add to Cart</Button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-button-next swiper-navBtn"></div>
                <div className="swiper-button-prev swiper-navBtn"></div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default CartSlider;

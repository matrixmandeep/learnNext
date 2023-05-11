"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCrousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel">
            <img src='/assets/p1.png' alt="product-1"></img>
            <img src='/assets/p2.png' alt="product-1"></img>
            <img src='/assets/p3.png' alt="product-1"></img>
            <img src='/assets/p4.png' alt="product-1"></img>
            <img src='/assets/p5.png' alt="product-1"></img>
            <img src='/assets/p6.png' alt="product-1"></img>
            <img src='/assets/p7.png' alt="product-1"></img>
        </Carousel>
    </div>
  );
};

export default ProductDetailsCrousel;

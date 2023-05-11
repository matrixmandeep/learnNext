import ProductCard from '@/app/components/ProductCard'
import ProductDetailsCrousel from '@/app/components/ProductDetailsCrousel'
import RelatedProduct from '@/app/components/RelatedProduct'
import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'


const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    {/* Left Column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCrousel />
                    </div>
                    {/* Left column end */}


                    {/* Right column start */}
                    <div className='flex-[1] py-3'>
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Nike Shoes
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : 4505
                            </p>
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* Product Range Size start */}

                        <div className='mb-10'>
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 7
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 7.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 8
                                </div>

                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 8.5
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-pointer hover:border-black'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                                    UK 9.5
                                </div>

                            </div>
                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>
                        </div>

                        {/* Product Range size end */}

                        {/* AddToCartButton */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>

                        {/* WhishList Button */}

                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.

                                Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling.

                                Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications.

                            </div>
                            <div className="markdown text-md mb-5">
                                With Next.js, you can build user interfaces using React components. Then, Next.js provides additional structure, features, and optimizations for your application.

                                Under the hood, Next.js also abstracts and automatically configures tooling for you, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time setting up tooling.

                                Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast web applications.

                            </div>
                        </div>

                    </div>
                    {/* Right column End */}
                </div>
                <RelatedProduct />
            </Wrapper>
        </div>
    )
}

export default ProductDetails
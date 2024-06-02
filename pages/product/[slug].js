import React from 'react'
import Wrapper from '@/components/Wrapper'
import ProductDetailCarousel from '@/components/ProductDetailCarousel'
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] ">

          {/* left col start */}

          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            < ProductDetailCarousel />
          </div>
          {/* left col end */}


          {/* right col start */}

          <div className="flex-[1] py-3">

            {/* PRODUCT TITLE START */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              jordan 6 retro
            </div>
            {/* PRODUCT TITLE END */}


            {/* PRODUCT SUBTITLE */}

            <div className="text-lg font-semibold mb-5">
              Product Subtitle
            </div>

            {/* PRODUCT PRICE */}

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;20000
              </p>
            </div>
            <div className="text-md font-medium text-gold/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-gold/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/*  SIZE RANGE START */}

            <div className="mb-10">

              {/* HEADING START */}

              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                  Select Size
                </div>
                <div className="text-md font-medium cursor-pointer">
                  Select Guide
                </div>
              </div>

              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>

              </div>
              {/* SIZE END */}



              {/* SHOW ERROR START */}

              <div className="text-red-600 mt-1">
                Size selection is required
              </div>

              {/* SHOW ERROR END */}
            </div>
            {/* SIZE RANGE END */}
            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-stone-900 text-gold text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full bg-stone-900  border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">
                Product Details
              </div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ReactMarkdown>
              </div>
            </div>

            </div>
            {/* right col end */}
          
        </div>

        <RelatedProducts />
      </Wrapper>
    </div>

  )
}

export default ProductDetails

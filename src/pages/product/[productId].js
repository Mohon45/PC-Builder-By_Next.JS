import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import ProuctImage from "@/assets/Images/demo-ram.jpg";
import ProductRating from "@/components/UI/ProductRating";
import { Icon } from "@iconify/react";

const ProductDetailsPage = () => {
  return (
    <div className="my-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image className="mx-auto my-auto" src={ProuctImage} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-[#18AE91]">
            APACER 4GB DDR4 2400Mhz Panther Golden Desktop Ram
          </h1>
          <div className="flex my-5 ">
            <p className="bg-[#F5F6FC] text-lg px-5 pb-2 rounded-full mr-3">
              Price : 2000 <span className="text-2xl">&#2547;</span>
            </p>
            <p className="bg-[#F5F6FC] text-lg px-5 py-2 rounded-full mr-3">
              Status : In Stock
            </p>
          </div>
          <div>
            <h1 className="w-[150px] text-2xl font-semibold border-b-2 border-b-[#18AE91]">
              Key Features
            </h1>
            <div className="mt-5 text-lg font-semibold">
              <h2>Model : Model: PRO MP241X</h2>
              <h2>Category : RAM</h2>

              <h2 className="flex">
                <span className="mr-3">Rating :</span>{" "}
                {<ProductRating rating={3.5} />}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#18AE91]" />
      <div>
        <h1 className="text-3xl font-semibold my-4">Description</h1>
        <p className="w-[80%] mx-auto text-justify text-lg mb-4">
          <span className="text-2xl font-bold">
            APACER 4GB DDR4 2400Mhz Panther Golden Desktop Ram
          </span>{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          reprehenderit mollitia excepturi tenetur quos, porro quae, in
          recusandae voluptatem harum saepe minus, aspernatur similique odit
          fuga. Totam fugit porro, repellat, illum similique est odio animi,
          incidunt iusto corporis itaque laborum ipsam dolor nisi voluptatibus
          perferendis! Porro blanditiis suscipit expedita aperiam obcaecati
          deleniti, corrupti, sunt, labore ex similique nisi. Facilis temporibus
          minus deserunt nobis similique veniam perspiciatis aliquam omnis atque
          quod architecto nulla nihil aliquid suscipit, eius delectus, ducimus
          ratione fugiat eveniet explicabo! Facere impedit aliquid inventore.
          Quos quas cum dicta sint, iusto fugit voluptate ipsum aut dolor non
          optio sed.
        </p>
      </div>
      <hr className="border-2 border-[#18AE91]" />
      <div>
        <div className="flex justify-between my-2">
          <div>
            <h2 className="text-3xl font-semibold">Questions (0)</h2>
            <p className="text-lg">
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <button className="px-4 py-1 h-[50px] text-[#18AE91] border-2 border-[#18AE91] rounded-lg hover:bg-[#18AE91] hover:text-[#FFFFFF]">
            Ask Question
          </button>
        </div>
        <hr />
        <div className="hero h-[300px] bg-base-200 rounded-md">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="w-[70px] mx-auto h-[70px] bg-slate-300 rounded-full p-3">
                <Icon icon="ri:message-2-line" width={50} />
              </div>
              <p className="py-6">
                There are no questions asked yet. Be the first one to ask a
                question.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-[#18AE91] mt-5" />
      <div>
        <div className="flex justify-between my-2">
          <div>
            <h2 className="text-3xl font-semibold">Reviews (0)</h2>
            <p className="text-lg">
              Get specific details about this product from customers who own it.
            </p>
          </div>
          <button className="px-4 py-1 h-[50px] text-[#18AE91] border-2 border-[#18AE91] rounded-lg hover:bg-[#18AE91] hover:text-[#FFFFFF]">
            Write a Review
          </button>
        </div>
        <hr />
        <div className="hero h-[300px] bg-base-200 rounded-md">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="w-[70px] mx-auto h-[70px] bg-slate-300 rounded-full p-3">
                <Icon icon="pajamas:review-list" width={47} />
              </div>
              <p className="py-6">
                This product has no reviews yet. Be the first one to write a
                review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
